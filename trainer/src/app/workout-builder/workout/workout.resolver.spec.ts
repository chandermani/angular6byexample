import { TestBed, inject } from '@angular/core/testing';

import { WorkoutResolver } from './workout.resolver';
import { WorkoutService } from '../../core/workout.service';
import { WorkoutBuilderService } from '../builder-services/workout-builder.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';


describe('WorkoutResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientTestingModule ],
      providers: [ WorkoutResolver, WorkoutService, WorkoutBuilderService ]
    });
  });

  it('should be created', inject([WorkoutResolver], (service: WorkoutResolver) => {
    expect(service).toBeTruthy();
  }));
});
