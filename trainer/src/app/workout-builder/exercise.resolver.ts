import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { Exercise } from '../core/model';
import { ExerciseBuilderService } from './exercise-builder.service';

@Injectable()
export class ExerciseResolver implements Resolve<Exercise> {
  public exercise: Exercise;

  constructor(
    public exerciseBuilderService: ExerciseBuilderService,
    public router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Exercise {
    let exerciseName = route.paramMap.get('id');

    if (!exerciseName) {
        exerciseName = '';
    }

    this.exercise = this.exerciseBuilderService.startBuilding(exerciseName);

    if (this.exercise) {
        return this.exercise;
    } else { // exerciseName not found
        this.router.navigate(['/builder/exercises']);
        return null;
    }
  }
}
