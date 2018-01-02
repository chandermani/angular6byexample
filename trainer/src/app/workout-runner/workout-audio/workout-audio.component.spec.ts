import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutAudioComponent } from './workout-audio.component';

describe('WorkoutAudioComponent', () => {
  let component: WorkoutAudioComponent;
  let fixture: ComponentFixture<WorkoutAudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutAudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
