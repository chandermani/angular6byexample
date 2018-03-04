import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderByPipe } from './order-by.pipe';
import { SearchPipe } from './search.pipe';
import { MyAudioDirective } from './my-audio.directive';
import { SecondsToTimePipe } from './seconds-to-time.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    OrderByPipe,
    SecondsToTimePipe,
    SearchPipe,
    MyAudioDirective
  ],
  exports: [
    OrderByPipe,
    SecondsToTimePipe,
    SearchPipe,
    MyAudioDirective
  ]
})
export class SharedModule { }
