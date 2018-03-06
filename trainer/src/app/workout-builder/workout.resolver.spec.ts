import { TestBed, inject } from '@angular/core/testing';

import { WorkoutResolver } from './workout.resolver';

describe('WorkoutResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkoutResolver]
    });
  });

  it('should be created', inject([WorkoutResolver], (service: WorkoutResolver) => {
    expect(service).toBeTruthy();
  }));
});
