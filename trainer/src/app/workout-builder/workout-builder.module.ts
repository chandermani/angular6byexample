import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WorkoutBuilderComponent } from './workout-builder.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { WorkoutComponent } from './workout/workout.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { WorkoutBuilderRoutingModule } from './workout-builder-routing.module';
import { LeftNavExercisesComponent } from './navigation/left-nav-exercises.component';
import { LeftNavMainComponent } from './navigation/left-nav-main.component';
import { SubNavMainComponent } from './navigation/sub-nav-main.component';
import { SharedModule } from '../shared/shared.module';
import { WorkoutBuilderService } from './builder-services/workout-builder.service';
import { WorkoutResolver } from './workout/workout.resolver';
import { ExerciseBuilderService } from './builder-services/exercise-builder.service';
import { ExerciseResolver } from './exercise/exercise.resolver';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    WorkoutBuilderRoutingModule,
    SharedModule
  ],
  declarations: [
    WorkoutBuilderComponent,
    ExerciseComponent,
    ExercisesComponent,
    WorkoutComponent,
    WorkoutsComponent,
    LeftNavExercisesComponent,
    LeftNavMainComponent,
    SubNavMainComponent],
  providers: [
    WorkoutBuilderService,
    WorkoutResolver,
    ExerciseBuilderService,
    ExerciseResolver
   ]
})
export class WorkoutBuilderModule { }
