import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkoutBuilderComponent } from './workout-builder.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { WorkoutComponent } from './workout/workout.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { WorkoutResolver } from './workout/workout.resolver';
import { ExerciseResolver } from './exercise/exercise.resolver';

const routes: Routes = [
  {
    path: '',
    component: WorkoutBuilderComponent,
    children: [
         {path: '', pathMatch: 'full', redirectTo: 'workouts'},
         {path: 'workouts/workout-not-found', component: WorkoutsComponent },
         {path: 'workouts', component: WorkoutsComponent },
         {path: 'workout/new',  component: WorkoutComponent, resolve: { workout: WorkoutResolver} },
         {path: 'workout/:id', component: WorkoutComponent, resolve: { workout: WorkoutResolver} },
         {path: 'exercises', component: ExercisesComponent},
         {path: 'exercise/new', component: ExerciseComponent, resolve: { exercise: ExerciseResolver} },
         {path: 'exercise/:id', component: ExerciseComponent, resolve: { exercise: ExerciseResolver} }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkoutBuilderRoutingModule { }
