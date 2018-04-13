import { TestBed, inject } from '@angular/core/testing';

import { WorkoutHistoryTrackerService } from './workout-history-tracker.service';
import { LocalStorageService } from './local-storage.service';

describe('WorkoutHistoryTrackerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkoutHistoryTrackerService, LocalStorageService]
    });
  });

  it('should be created', inject([WorkoutHistoryTrackerService], (service: WorkoutHistoryTrackerService) => {
    expect(service).toBeTruthy();
  }));
});
