import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutContainerComponent } from './workout-container.component';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs/observable/of';
import { WorkoutPlan, ExercisePlan } from '../../core/model';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

@Component({
  template: ''
})
class MockWorkoutComponent {
}

describe('WorkoutContainerComponent', () => {
  let component: WorkoutContainerComponent;
  let fixture: ComponentFixture<WorkoutContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutContainerComponent, MockWorkoutComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          { path: 'workout/:id', component: MockWorkoutComponent }]),
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
