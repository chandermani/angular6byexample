import { Directive, HostBinding } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: '[abeBusyIndicator][ngModel]'
})
export class BusyIndicatorDirective {
  private get validating(): boolean {
    return this.model.control != null && this.model.control.pending;
  }
  @HostBinding('style.borderWidth') get controlBorderWidth():
    string { return this.validating ? '3px' : null; }
  @HostBinding('style.borderColor') get controlBorderColor():
    string { return this.validating ? 'gray' : null; }

  constructor(private model: NgModel) { }
}
