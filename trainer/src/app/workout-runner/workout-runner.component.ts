import { Component, OnInit, OnDestroy, Output, EventEmitter, ViewEncapsulation, Input, DoCheck } from '@angular/core';
import { WorkoutPlan, ExercisePlan, Exercise, ExerciseProgressEvent, ExerciseChangedEvent } from '../core/model';
import { Router } from '@angular/router';
import { WorkoutHistoryTrackerService } from '../core/workout-history-tracker.service';
import { WorkoutService } from '../core/workout.service';

@Component({
  selector: 'abe-workout-runner',
  templateUrl: './workout-runner.component.html',
  styles: []
})
export class WorkoutRunnerComponent implements OnInit, DoCheck, OnDestroy {
  workoutPlan: WorkoutPlan;
  workoutTimeRemaining: number;
  restExercise: ExercisePlan;
  currentExerciseIndex: number;
  currentExercise: ExercisePlan;
  exerciseRunningDuration: number;
  exerciseTrackingInterval: number;
  workoutPaused: boolean;
  dataLoaded = false;

  @Input() public workoutName: string;
  @Output() exercisePaused: EventEmitter<number> = new EventEmitter<number>();
  @Output() exerciseResumed: EventEmitter<number> = new EventEmitter<number>();
  @Output() exerciseProgress: EventEmitter<ExerciseProgressEvent> = new EventEmitter<ExerciseProgressEvent>();
  @Output() exerciseChanged: EventEmitter<ExerciseChangedEvent> = new EventEmitter<ExerciseChangedEvent>();
  @Output() workoutStarted: EventEmitter<WorkoutPlan> = new EventEmitter<WorkoutPlan>();
  @Output() workoutComplete: EventEmitter<WorkoutPlan> = new EventEmitter<WorkoutPlan>();

  constructor(private router: Router,
    private tracker: WorkoutHistoryTrackerService,
    private workoutService: WorkoutService) {
  }

  ngOnDestroy() {
    this.tracker.endTracking(false);
    if (this.exerciseTrackingInterval) { clearInterval(this.exerciseTrackingInterval); }
  }

  ngOnInit() {
    this.getWorkout(this.workoutName);
  }

  ngDoCheck(): any {
    if (!this.dataLoaded) {
        this.start();
    }
}

  getWorkout(name: string) {
    this.workoutService.getWorkout(name)
        .subscribe(
            (data: WorkoutPlan) => {
                this.workoutPlan = data;
            },
            (err: any) => {
                console.error(err);
            }
        );
}

  start() {
    if (this.workoutPlan) {
      this.dataLoaded = true;
      this.restExercise = new ExercisePlan(new Exercise('rest', 'Relax!', 'Relax a bit', 'rest.png'), this.workoutPlan.restBetweenExercise);
      this.tracker.startTracking();
      this.workoutTimeRemaining = this.workoutPlan.totalWorkoutDuration();
      this.currentExerciseIndex = 0;
      this.startExercise(this.workoutPlan.exercises[this.currentExerciseIndex]);
      this.workoutStarted.emit(this.workoutPlan);
    }
  }

  pause() {
    clearInterval(this.exerciseTrackingInterval);
    this.workoutPaused = true;
    this.exercisePaused.emit(this.currentExerciseIndex);
  }

  resume() {
    this.startExerciseTimeTracking();
    this.workoutPaused = false;
    this.exerciseResumed.emit(this.currentExerciseIndex);
  }

  pauseResumeToggle() {
    if (this.workoutPaused) {
      this.resume();
    }
    else {
      this.pause();
    }
  }

  onKeyPressed(event: KeyboardEvent) {
    if (event.which === 80 || event.which === 112) {        // 'p' or 'P' key to toggle pause and resume.
      this.pauseResumeToggle();
    }
  }

  startExercise(exercisePlan: ExercisePlan) {
    this.currentExercise = exercisePlan;
    this.exerciseRunningDuration = 0;
    this.startExerciseTimeTracking();
  }

  startExerciseTimeTracking() {
    this.exerciseTrackingInterval = window.setInterval(() => {
      if (this.exerciseRunningDuration >= this.currentExercise.duration) {
        clearInterval(this.exerciseTrackingInterval);
        if (this.currentExercise !== this.restExercise) {
          this.tracker.exerciseComplete(this.workoutPlan.exercises[this.currentExerciseIndex]);
        }
        const next: ExercisePlan = this.getNextExercise();
        if (next) {
          if (next !== this.restExercise) {
            this.currentExerciseIndex++;
          }
          this.startExercise(next);
          this.exerciseChanged.emit(new ExerciseChangedEvent(next, this.getNextExercise()));
        }
        else {
          this.tracker.endTracking(true);
          this.workoutComplete.emit(this.workoutPlan);
          this.router.navigate(['/finish']);
        }
        return;
      }
      ++this.exerciseRunningDuration;
      --this.workoutTimeRemaining;
      this.exerciseProgress.emit(new ExerciseProgressEvent(
        this.currentExercise,
        this.exerciseRunningDuration,
        this.currentExercise.duration - this.exerciseRunningDuration,
        this.workoutTimeRemaining
      ));
    }, 1000);
  }

  getNextExercise(): ExercisePlan {
    let nextExercise: ExercisePlan = null;
    if (this.currentExercise === this.restExercise) {
      nextExercise = this.workoutPlan.exercises[this.currentExerciseIndex + 1];
    }
    else if (this.currentExerciseIndex < this.workoutPlan.exercises.length - 1) {
      nextExercise = this.restExercise;
    }

    return nextExercise;
  }
}
