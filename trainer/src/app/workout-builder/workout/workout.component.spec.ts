import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutComponent } from './workout.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { WorkoutBuilderService } from '../builder-services/workout-builder.service';
import { WorkoutService } from '../../core/workout.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs/observable/of';
import { WorkoutPlan, ExercisePlan } from '../../core/model';

describe('WorkoutComponent', () => {
  let component: WorkoutComponent;
  let fixture: ComponentFixture<WorkoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutComponent ],
      imports: [ FormsModule, SharedModule, RouterTestingModule, HttpClientTestingModule ],
      providers: [
        WorkoutBuilderService,
        WorkoutService,
        { provide: ActivatedRoute, useClass: class {
            data = of({ workout : new WorkoutPlan( '3Minute', '3 Minute', 5, new Array<ExercisePlan>())});
          }
        }
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
