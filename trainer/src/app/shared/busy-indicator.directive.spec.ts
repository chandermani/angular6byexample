import { BusyIndicatorDirective } from './busy-indicator.directive';
import { FormsModule, NgModel } from '@angular/forms';

  // TODO: replace with more robust test
describe('BusyIndicatorDirective', () => {
  const ngModel = new NgModel(null, null, null, null);
  it('should create an instance', () => {
    const directive = new BusyIndicatorDirective(ngModel);
    expect(directive).toBeTruthy();
  });
});
