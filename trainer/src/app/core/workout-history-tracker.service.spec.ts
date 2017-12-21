import { TestBed, inject } from '@angular/core/testing';

import { WorkoutHistoryTrackerService } from './workout-history-tracker.service';

describe('WorkoutHistoryTrackerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkoutHistoryTrackerService]
    });
  });

  it('should be created', inject([WorkoutHistoryTrackerService], (service: WorkoutHistoryTrackerService) => {
    expect(service).toBeTruthy();
  }));
});
