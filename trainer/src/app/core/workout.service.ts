import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

import {Exercise, ExercisePlan, WorkoutPlan } from './model';

@Injectable()
export class WorkoutService {
    workouts: Array<WorkoutPlan> = [];
    exercises: Array<Exercise> = [];
    workout: WorkoutPlan;
    collectionsUrl = 'https://api.mongolab.com/api/1/databases/personaltrainer/collections';
    apiKey = '9xfTWt1ilKhqIqzV9Z_8jvCzo5ksjexx';
    params = '?apiKey=' + this.apiKey;

    constructor(public http: HttpClient) {
    }

    static handleError (error: Response) {
      console.error(error);
      return Observable.throw(error || 'Server error');
    }

    getExercises() {
        return this.http.get<ExercisePlan>(this.collectionsUrl + '/exercises' + this.params)
            .pipe(catchError(WorkoutService.handleError));
    }

    getExercise(exerciseName: string) {
        return this.http.get(this.collectionsUrl + '/exercises/' + exerciseName  + this.params)
            .pipe(catchError(WorkoutService.handleError));
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

    getWorkouts() {
        return this.http.get <WorkoutPlan[]>(this.collectionsUrl + '/workouts' + this.params)
            .pipe(catchError(WorkoutService.handleError));
    }

    getWorkout(workoutName: string) {
        return this.http.get<WorkoutPlan>(this.collectionsUrl + '/workouts/' + workoutName  + this.params)
            .pipe(catchError(WorkoutService.handleError));
    }

    addWorkout(workout: WorkoutPlan) {
        if (workout.name) {
            this.workouts.push(workout);
            return workout;
        }
    }

    updateWorkout(workout: WorkoutPlan) {
        for (let i = 0; i < this.workouts.length; i++) {
            if (this.workouts[i].name === workout.name) {
                this.workouts[i] = workout;
                break;
            }
        }
    }
}
