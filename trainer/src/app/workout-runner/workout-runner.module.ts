import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutRunnerComponent } from './workout-runner.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    WorkoutRunnerComponent
  ],
  declarations: [WorkoutRunnerComponent]
})
export class WorkoutRunnerModule { }
