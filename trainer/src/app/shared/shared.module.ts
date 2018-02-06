import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderByPipe } from './order-by.pipe';
import { SearchPipe } from './search.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OrderByPipe, SearchPipe],
  exports: [OrderByPipe, SearchPipe]
})
export class SharedModule { }
