import { TestBed, inject } from '@angular/core/testing';

import { WorkoutBuilderService } from './workout-builder.service';
import { WorkoutService } from '../../core/workout.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('WorkoutBuilderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WorkoutBuilderService, WorkoutService]
    });
  });

  it('should be created', inject([WorkoutBuilderService], (service: WorkoutBuilderService) => {
    expect(service).toBeTruthy();
  }));
});
