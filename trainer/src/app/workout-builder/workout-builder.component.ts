import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'abe-workout-builder',
  template: `<div class="row">
                <div class="col-sm-3"></div>
                <div class="col-sm-6">
                    <h1 class="text-center">Workout Builder</h1>
                </div>
                <div class="col-sm-3"></div>
             </div> `,
  styles: []
})
export class WorkoutBuilderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
