import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutAudioComponent } from './workout-audio.component';
import { SharedModule } from '../../shared/shared.module';

describe('WorkoutAudioComponent', () => {
  let component: WorkoutAudioComponent;
  let fixture: ComponentFixture<WorkoutAudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutAudioComponent ],
      imports: [ SharedModule]
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
