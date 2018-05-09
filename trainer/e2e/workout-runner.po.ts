import { browser, by, element } from 'protractor';

export class WorkoutRunnerPage {
  pauseResume: any;
  playButton: any;
  pauseButton: any;
  exerciseTitle: any;
  exerciseDescription: any;
  exerciseTimeRemaining; any;

  constructor() {
      this.pauseResume =  element(by.id('pause-overlay'));
      this.playButton = element.all(by.css('.ion-md-play'));
      this.pauseButton = element.all(by.css('.ion-md-pause'));
      this.exerciseTitle = element(by.id('exercise-pane')).element(by.tagName('h1')).getText();
      this.exerciseDescription = element.all(by.className('card-text')).first().getText();
      this.exerciseTimeRemaining = element(by.id('exercise-pane')).all(by.tagName('h4')).first().getText();
  }
}
