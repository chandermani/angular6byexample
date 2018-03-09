import { TestBed, inject } from '@angular/core/testing';

import { ExerciseBuilderService } from './exercise-builder.service';

describe('ExerciseBuilderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExerciseBuilderService]
    });
  });

  it('should be created', inject([ExerciseBuilderService], (service: ExerciseBuilderService) => {
    expect(service).toBeTruthy();
  }));
});
