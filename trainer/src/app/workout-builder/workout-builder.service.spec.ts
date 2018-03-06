import { TestBed, inject } from '@angular/core/testing';

import { WorkoutBuilderService } from './workout-builder.service';

describe('WorkoutBuilderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkoutBuilderService]
    });
  });

  it('should be created', inject([WorkoutBuilderService], (service: WorkoutBuilderService) => {
    expect(service).toBeTruthy();
  }));
});
