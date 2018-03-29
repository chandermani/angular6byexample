import {Component, OnInit} from '@angular/core';

import { WorkoutService } from '../../core/workout.service';
import { Exercise, ExercisePlan } from '../../core/model';
import { WorkoutBuilderService } from '../builder-services/workout-builder.service';

@Component({
    selector: 'abe-left-nav-exercises',
    templateUrl: './left-nav-exercises.component.html'
})
export class LeftNavExercisesComponent implements OnInit {
    exerciseList: Array<Exercise> = [];
    errorMessage: any;

    constructor(
      public workoutService: WorkoutService,
      public workoutBuilderService: WorkoutBuilderService) {}

      ngOnInit() {
        this.workoutService.getExercises()
        .then(exerciseList => this.exerciseList = exerciseList,
          error => this.errorMessage = <any>error
        );
      }

    addExercise(exercise: Exercise) {
      this.workoutBuilderService.addExercise(new ExercisePlan(exercise, 30));
    }
}
