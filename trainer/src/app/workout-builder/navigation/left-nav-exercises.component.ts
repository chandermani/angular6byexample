import {Component, OnInit} from '@angular/core';

import { WorkoutService } from '../../core/workout.service';
import { Exercise, ExercisePlan } from '../../core/model';
import { WorkoutBuilderService } from '../workout-builder.service';

@Component({
    selector: 'abe-left-nav-exercises',
    templateUrl: './left-nav-exercises.component.html'
})
export class LeftNavExercisesComponent implements OnInit {
    exerciseList: Array<Exercise> = [];

    constructor(
      public workoutService: WorkoutService,
      public workoutBuilderService: WorkoutBuilderService) {}

      ngOnInit() {
        this.workoutService.getExercises()
        .subscribe(
            exercises => this.exerciseList = exercises,
            (err: any) => console.error
        );
      }

    addExercise(exercise: Exercise) {
      this.workoutBuilderService.addExercise(new ExercisePlan(exercise, 30));
    }
}
