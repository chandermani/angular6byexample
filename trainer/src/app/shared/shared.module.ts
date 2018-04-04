import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderByPipe } from './order-by.pipe';
import { SearchPipe } from './search.pipe';
import { MyAudioDirective } from './my-audio.directive';
import { SecondsToTimePipe } from './seconds-to-time.pipe';
import { RemoteValidatorDirective } from './remote-validator.directive';
import { BusyIndicatorDirective } from './busy-indicator.directive';
import { AjaxButtonComponent } from './ajax-button/ajax-button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    OrderByPipe,
    SecondsToTimePipe,
    SearchPipe,
    MyAudioDirective,
    RemoteValidatorDirective,
    BusyIndicatorDirective,
    AjaxButtonComponent
  ],
  exports: [
    OrderByPipe,
    SecondsToTimePipe,
    SearchPipe,
    MyAudioDirective,
    RemoteValidatorDirective,
    BusyIndicatorDirective,
    AjaxButtonComponent
  ]
})
export class SharedModule { }
