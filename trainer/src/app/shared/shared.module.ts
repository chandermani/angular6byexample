import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderByPipe } from './order-by.pipe';
import { SearchPipe } from './search.pipe';
import { MyAudioDirective } from './my-audio.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    OrderByPipe,
    SearchPipe,
    MyAudioDirective
  ],
  exports: [
    OrderByPipe,
    SearchPipe,
    MyAudioDirective
  ]
})
export class SharedModule { }
