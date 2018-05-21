import { TestBed, inject } from '@angular/core/testing';

import { ExerciseBuilderService } from './exercise-builder.service';
import { WorkoutService } from '../../core/workout.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ExerciseBuilderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ExerciseBuilderService, WorkoutService]
    });
  });

  it('should be created', inject([ExerciseBuilderService], (service: ExerciseBuilderService) => {
    expect(service).toBeTruthy();
  }));
});
