import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'abe-ajax-button',
  templateUrl: './ajax-button.component.html',
  styleUrls: []
})
export class AjaxButtonComponent implements OnInit {
  busy: boolean = null;
  @Input() execute: any;
  @Input() parameter: any;

  constructor() { }

  @HostListener('click', ['$event'])
  onClick(event: any) {
    const result: any = this.execute(this.parameter);
    if (result instanceof Promise) {
      this.busy = true;
      result.then(
        () => { this.busy = null; },
        (error: any) => { this.busy = null; });
    }
  }

  ngOnInit() {
  }

}
