import { Component, OnInit } from '@angular/core';
import { WorkoutLogEntry, WorkoutHistoryTrackerService } from '../core/workout-history-tracker.service';
import { Location } from '@angular/common';

@Component({
  selector: 'abe-workout-history',
  templateUrl: './workout-history.component.html'
})
export class WorkoutHistoryComponent implements OnInit {
  history: Array<WorkoutLogEntry> = [];
  completed: boolean;
  constructor(private tracker: WorkoutHistoryTrackerService, private location: Location) { }

  ngOnInit() {
    this.history = this.tracker.getHistory();
  }

  goBack() {
    this.location.back();
  }

}
