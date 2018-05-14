import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { _throw } from 'rxjs/observable/throw';
import { of } from 'rxjs/observable/of';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { map, catchError } from 'rxjs/operators';

import {Exercise, ExercisePlan, WorkoutPlan } from './model';
import { CoreModule } from './core.module';

@Injectable({
  providedIn: CoreModule
})
export class WorkoutService {
    workouts: Array<WorkoutPlan> = [];
    exercises: Array<Exercise> = [];
    workout: WorkoutPlan;
    collectionsUrl = 'https://api.mongolab.com/api/1/databases/personaltrainer/collections';
    apiKey = '9xfTWt1ilKhqIqzV9Z_8jvCzo5ksjexx';
    params = '?apiKey=' + this.apiKey;

    constructor(public http: HttpClient) {
    }

    getExercises(): Observable<Exercise[]> {
      return this.http.get<Exercise[]>(this.collectionsUrl + '/exercises' + this.params)
      .pipe(catchError(this.handleError('getExercises', [])));
    }

    getExercise (exerciseName: string): Observable<Exercise> {
        return this.http.get<Exercise>(this.collectionsUrl + '/exercises/' + exerciseName  + this.params)
            .pipe(catchError(this.handleError<Exercise>(`getHero id=${exerciseName}`)));
    }

    updateExercise(exercise: Exercise) {
        for (let i = 0; i < this.exercises.length; i++) {
            if (this.exercises[i].name === exercise.name) {
                this.exercises[i] = exercise;
            }
        }
        return exercise;
    }

    addExercise(exercise: Exercise) {
        if (exercise.name) {
            this.exercises.push(exercise);
            return exercise;
        }
    }

    deleteExercise(exerciseName: string) {
        let exerciseIndex: number;
        for (let i = 0; i < this.exercises.length; i++) {
            if (this.exercises[i].name === exerciseName) {
                exerciseIndex = i;
            }
        }
        if (exerciseIndex >= 0) { this.exercises.splice(exerciseIndex, 1); }
    }

    getWorkouts(): Observable<WorkoutPlan[]> {
        return this.http.get<WorkoutPlan[]>(this.collectionsUrl + '/workouts' + this.params)
            .pipe(
                map((workouts: Array<any>) => {
                  const result: Array<WorkoutPlan> = [];
                  if (workouts) {
                      workouts.forEach((workout) => {
                          result.push(
                              new WorkoutPlan(
                                  workout.name,
                                  workout.title,
                                  workout.restBetweenExercise,
                                  workout.exercises,
                                  workout.description
                              ));
                      });
                  }
                  return result;
                }),
                catchError(this.handleError<WorkoutPlan[]>('getWorkouts', []))
            );
    }

    getWorkout(workoutName: string): Observable<WorkoutPlan> {
      return forkJoin (
          this.http.get(this.collectionsUrl + '/exercises' + this.params),
          this.http.get(this.collectionsUrl + '/workouts/' + workoutName + this.params))
          .pipe(
               map(
                  (data: any) => {
                      const allExercises = data[0];
                      const workout = new WorkoutPlan(
                          data[1].name,
                          data[1].title,
                          data[1].restBetweenExercise,
                          data[1].exercises,
                          data[1].description
                      );
                      workout.exercises.forEach(
                          (exercisePlan: any) => exercisePlan.exercise = allExercises.find(
                              (x: any) => x.name === exercisePlan.name
                          )
                      );
                      return workout;
                  }
              ),
              catchError(this.handleError<WorkoutPlan>(`getWorkout id=${workoutName}`))
        );
      }

    addWorkout(workout: WorkoutPlan) {
      const workoutExercises: any = [];
      workout.exercises.forEach(
          (exercisePlan: any) => {
              workoutExercises.push({name: exercisePlan.exercise.name, duration: exercisePlan.duration});
          }
      );

      const body = {
          '_id': workout.name,
          'exercises': workoutExercises,
          'name': workout.name,
          'title': workout.title,
          'description': workout.description,
          'restBetweenExercise': workout.restBetweenExercise
      };

      return this.http.post(this.collectionsUrl + '/workouts' + this.params, body)
        .pipe(
          catchError(this.handleError<WorkoutPlan>())
        );

    }

    updateWorkout(workout: WorkoutPlan) {
      const workoutExercises: any = [];
      workout.exercises.forEach(
          (exercisePlan: any) => {
              workoutExercises.push({name: exercisePlan.exercise.name, duration: exercisePlan.duration});
          }
      );

      const body = {
          '_id': workout.name,
          'exercises': workoutExercises,
          'name': workout.name,
          'title': workout.title,
          'description': workout.description,
          'restBetweenExercise': workout.restBetweenExercise
      };

      return this.http.put(this.collectionsUrl + '/workouts/' + workout.name + this.params, body)
        .pipe(
          catchError(this.handleError<WorkoutPlan>())
        );
    }

    deleteWorkout(workoutName: string) {
        return this.http.delete(this.collectionsUrl + '/workouts/' + workoutName + this.params)
          .pipe(
            catchError(this.handleError<WorkoutPlan>())
          );
    }

    private handleError<T> (operation = 'operation', result?: T) {
      return (error: HttpErrorResponse): Observable<T> => {
        if (error.status === 404) {
          console.log('HTTP 404 Not found error');
          return of(result as T);
        } else {
          console.error(error);
          return _throw('An error occurred:', error.error.message);
        }
      };
    }
}
