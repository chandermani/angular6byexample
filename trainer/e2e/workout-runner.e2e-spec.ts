import { WorkoutRunnerPage } from './workout-runner.po';
import { browser, element, by, ExpectedConditions, ElementFinder } from 'protractor';
import { first } from 'rxjs/operators';
import { truncateSync } from 'fs';

describe('Workout Runner', () => {

  describe('Start Page', () => {
      beforeEach(() => {
          browser.get('');
      });
      it('should load the start page.', () => {
          expect(browser.getTitle()).toBe('Personal Trainer');
          expect(element(by.id('start')).getText()).toBe('Select a Workout');
      });

      it('should search workout with specific name.', () => {
          const filteredWorkouts = element.all(by.css('.workout.tile'));
          expect(filteredWorkouts.count()).toEqual(5);

          const searchInput = element(by.css('.form-control'));
          searchInput.sendKeys('1 Minute Workout');

          expect(filteredWorkouts.count()).toEqual(1);
          expect(filteredWorkouts.first().element(by.css('.title')).getText()).toBe('1 Minute Workout');
      });

      it('should navigate to workout runner.', () => {
          const filteredWorkouts = element.all(by.css('.workout.tile'));
          filteredWorkouts.first().click();
          expect(browser.getCurrentUrl()).toContain('/workout/1minworkout');
      });
  });

describe('Workout Runner page', () => {
    beforeEach(() => {
        browser.get('/workout/1minworkout');
    });

    it('should load workout data', () => {
        browser.waitForAngularEnabled(false);
        const page = new WorkoutRunnerPage();
        page.pauseResume.click();
        expect(page.exerciseTitle).toBe('Jumping Jacks');
        expect(page.exerciseDescription)
          .toBe('A jumping jack or star jump, also called side-straddle hop is a physical jumping exercise.');
    });

    it('should pause workout when paused button clicked', () => {
        const page = new WorkoutRunnerPage();
        let timeRemaining;
        browser.waitForAngularEnabled(false);

        page.pauseResume.click();
        expect(page.playButton.count()).toBe(1);
        expect(page.pauseButton.count()).toBe(0);

        page.exerciseTimeRemaining.then((time) => {
            timeRemaining = time;
            browser.sleep(3000);
        });
        page.exerciseTimeRemaining.then((time) => {
            expect(page.exerciseTimeRemaining).toBe(timeRemaining);
        });
    });
  });
});
