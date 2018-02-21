import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutBuilderComponent } from './workout-builder.component';

describe('WorkoutBuilderComponent', () => {
  let component: WorkoutBuilderComponent;
  let fixture: ComponentFixture<WorkoutBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
