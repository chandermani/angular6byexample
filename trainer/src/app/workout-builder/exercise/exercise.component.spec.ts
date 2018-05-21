import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseComponent } from './exercise.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ExerciseBuilderService } from '../builder-services/exercise-builder.service';
import { WorkoutService } from '../../core/workout.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs/observable/of';
import { Exercise } from '../../core/model';

describe('ExerciseComponent', () => {
  let component: ExerciseComponent;
  let fixture: ComponentFixture<ExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseComponent ],
      imports: [ ReactiveFormsModule, RouterTestingModule, HttpClientTestingModule ],
      providers: [
        ExerciseBuilderService,
        WorkoutService,
        { provide: ActivatedRoute, useClass: class {
            data = of({ exercise : new Exercise( 'WallPush', 'Wall Push', 'desc', 'img')});
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
