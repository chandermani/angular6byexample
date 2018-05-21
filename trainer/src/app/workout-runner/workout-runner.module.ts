import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutRunnerComponent } from './workout-runner.component';
import { ExerciseDescriptionComponent } from './exercise-description/exercise-description.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { VideoDialogComponent } from './video-player/video-dialog/video-dialog.component';
import { WorkoutContainerComponent } from './workout-container/workout-container.component';
import { WorkoutAudioComponent } from './workout-audio/workout-audio.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [WorkoutRunnerComponent,
    ExerciseDescriptionComponent,
    VideoPlayerComponent,
    VideoDialogComponent,
    WorkoutContainerComponent,
    WorkoutAudioComponent],
  entryComponents: [VideoDialogComponent]
})
export class WorkoutRunnerModule { }
