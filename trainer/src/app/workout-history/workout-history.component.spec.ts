import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Location, LocationStrategy, PathLocationStrategy, APP_BASE_HREF } from '@angular/common';

import { WorkoutHistoryComponent } from './workout-history.component';
import { SharedModule } from '../shared/shared.module';
import { WorkoutHistoryTrackerService } from '../core/workout-history-tracker.service';
import { LocalStorageService } from '../core/local-storage.service';

describe('WorkoutHistoryComponent', () => {
  let component: WorkoutHistoryComponent;
  let fixture: ComponentFixture<WorkoutHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutHistoryComponent ],
      imports: [SharedModule],
      providers: [
        WorkoutHistoryTrackerService,
        LocalStorageService,
        Location,
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        { provide: APP_BASE_HREF, useValue: '/..'}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
