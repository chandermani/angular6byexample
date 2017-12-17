import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'abe-exercise-description',
  templateUrl: './exercise-description.component.html',
  styleUrls: ['./exercise-description.component.css']
})
export class ExerciseDescriptionComponent implements OnInit {
  @Input() description: string;
  @Input() steps: string;

  constructor() { }

  ngOnInit() {
  }

}
