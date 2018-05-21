import { Component, OnInit } from '@angular/core';

@Component({
  template: `<div class="container-fluid fixed-top mt-5">
                <div class="row mt-5">
                  <abe-sub-nav-main></abe-sub-nav-main>
                </div>
                <div class="row mt-3">
                  <div class="col-sm-12">
                    <router-outlet></router-outlet>
                  </div>
                </div>
              <div>`
})
export class WorkoutBuilderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
