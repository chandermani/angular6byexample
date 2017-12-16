import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutRunnerComponent } from './workout-runner.component';

describe('WorkoutRunnerComponent', () => {
  let component: WorkoutRunnerComponent;
  let fixture: ComponentFixture<WorkoutRunnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutRunnerComponent ]
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
