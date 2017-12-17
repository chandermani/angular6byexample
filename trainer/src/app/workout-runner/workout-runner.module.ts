import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutRunnerComponent } from './workout-runner.component';
import { ExerciseDescriptionComponent } from './exercise-description/exercise-description.component';
import { VideoPlayerComponent } from './video-player/video-player.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    WorkoutRunnerComponent
  ],
  declarations: [WorkoutRunnerComponent, ExerciseDescriptionComponent, VideoPlayerComponent]
})
export class WorkoutRunnerModule { }
