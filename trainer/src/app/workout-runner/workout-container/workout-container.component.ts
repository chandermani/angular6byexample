import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'abe-workout-container',
  templateUrl: './workout-container.component.html',
  styles: []
})
export class WorkoutContainerComponent implements OnInit, OnDestroy {
  public workoutName: string;
  private sub: any;

  constructor(private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
          this.workoutName = params['id'];
      });
  }

  ngOnDestroy() {
      this.sub.unsubscribe();
  }

}
