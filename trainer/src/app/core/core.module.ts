import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutHistoryTrackerService } from './workout-history-tracker.service';
import { LocalStorageService } from './local-storage.service';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-modialog';
import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';
import { WorkoutService } from './workout.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ModalModule.forRoot(),
    BootstrapModalModule
  ],
  declarations: [HeaderComponent],
  providers: [WorkoutHistoryTrackerService, LocalStorageService, WorkoutService],
  exports: [HeaderComponent]
})
export class CoreModule { }
