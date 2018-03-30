import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { WorkoutPlan } from '../../core/model';
import { WorkoutService } from '../../core/workout.service';

@Component({
  selector: 'abe-workouts',
  templateUrl: './workouts.component.html'
})
export class WorkoutsComponent implements OnInit {
  workoutList: Array<WorkoutPlan> = [];
  public notFound = false;

  constructor(
      public route: ActivatedRoute,
      public router: Router,
      public workoutService: WorkoutService) {}

      ngOnInit() {
        if (this.route.snapshot.url[1] && this.route.snapshot.url[1].path === 'workout-not-found') {
          this.notFound = true;
        }
        this.workoutService.getWorkouts()
            .subscribe(
              workouts => this.workoutList = workouts,
              (err: any) => console.error
            );
    }

  onSelect(workout: WorkoutPlan) {
      this.router.navigate( ['./builder/workout', workout.name] );
  }
}
