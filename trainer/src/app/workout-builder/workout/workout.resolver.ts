import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { WorkoutPlan } from '../../core/model';
import { WorkoutBuilderService } from '../builder-services/workout-builder.service';


@Injectable()
export class WorkoutResolver implements Resolve<WorkoutPlan> {
  public workout: WorkoutPlan;

  constructor(
    public workoutBuilderService: WorkoutBuilderService,
    public router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): WorkoutPlan {
    let workoutName = route.paramMap.get('id');

    if (!workoutName) {
        workoutName = '';
    }

    this.workout = this.workoutBuilderService.startBuilding(workoutName);

    if (this.workout) {
        return this.workout;
    } else { // workoutName not found
        this.router.navigate(['/builder/workouts']);
        return null;
    }
  }
}
