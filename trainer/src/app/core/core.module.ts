import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutHistoryTrackerService } from './workout-history-tracker.service';
import { LocalStorageService } from './local-storage.service';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [HeaderComponent],
  providers: [WorkoutHistoryTrackerService, LocalStorageService],
  exports: [HeaderComponent]
})
export class CoreModule { }
