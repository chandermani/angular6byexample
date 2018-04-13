import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { WorkoutRunnerComponent } from './workout-runner.component';
import { SharedModule } from '../shared/shared.module';
import { WorkoutHistoryTrackerService } from '../core/workout-history-tracker.service';
import { LocalStorageService } from '../core/local-storage.service';
import { WorkoutService } from '../core/workout.service';


describe('WorkoutRunnerComponent', () => {
  let component: WorkoutRunnerComponent;
  let fixture: ComponentFixture<WorkoutRunnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutRunnerComponent ],
      imports: [SharedModule, RouterTestingModule, HttpClientTestingModule],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [
        WorkoutHistoryTrackerService,
        LocalStorageService,
        WorkoutService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutRunnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
