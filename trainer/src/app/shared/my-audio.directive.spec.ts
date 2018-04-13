import { MyAudioDirective } from './my-audio.directive';
import { ElementRef } from '@angular/core';

  // TODO: replace with more robust test
  describe('MyAudioDirective', () => {
    const elementRef = new ElementRef(null);
    it('should create an instance', () => {
      const directive = new MyAudioDirective(elementRef);
      expect(directive).toBeTruthy();
    });
  });
