import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h2>Guess the Number !</h2>
    <div class="card bg-light mb-3">
        <div class="card-body">
          <p class="card-text">Guess the computer generated random number between 1 and 1000.</p>
        </div>
    </div>
    <div>
      <label>Your Guess: </label>
      <input type="number" [value]="guess" (input)="guess = $event.target.value" />
      <button (click)="verifyGuess()" class="btn btn-primary btn-sm">Verify</button>
      <button (click)="initializeGame()" class="btn btn-warning btn-sm">Restart</button>
    </div>
    <div>
      <p *ngIf="deviation<0" class="alert alert-warning">Your guess is higher.</p>
      <p *ngIf="deviation>0" class="alert alert-warning">Your guess is lower.</p>
      <p *ngIf="deviation===0" class="alert alert-success">Yes! That's it.</p>
    </div>
    <p class="text-info">No of guesses :
      <span class="badge">{{noOfTries}}</span>
    </p>
  </div>
  `
})
export class AppComponent {
  title = 'Guess the Number';
  deviation: number;
  noOfTries: number;
  original: number;
  guess: number;

  constructor() {
      this.initializeGame();
  }
  initializeGame() {
      this.noOfTries = 0;
      this.original = Math.floor((Math.random() * 1000) + 1);
      this.guess = null;
      this.deviation = null;
  }
  verifyGuess() {
      this.deviation = this.original - this.guess;
      this.noOfTries = this.noOfTries + 1;
  }
}
