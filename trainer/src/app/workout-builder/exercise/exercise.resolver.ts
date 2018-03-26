import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, catchError } from 'rxjs/operators';

import { Exercise } from '../../core/model';
import { ExerciseBuilderService } from '../builder-services/exercise-builder.service';

@Injectable()
export class ExerciseResolver implements Resolve<Exercise> {
  public exercise: Exercise;

  constructor(
    public exerciseBuilderService: ExerciseBuilderService,
    public router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<Exercise> {
    const exerciseName = route.paramMap.get('id');

    if (!exerciseName) {
      return this.exerciseBuilderService.startBuildingNew();
    } else {
      return this.exerciseBuilderService.startBuildingExisting(exerciseName)
      .pipe(
        map(exercise => {
          if (exercise) {
            return exercise;
          } else {
            this.router.navigate(['/builder/exercises']);
            return null;
          }
        }),
        catchError(error => {
          console.log('An error occurred!');
          this.router.navigate(['/builder/exercises']);
          return of(null);
        })
      );
    }
  }
}
