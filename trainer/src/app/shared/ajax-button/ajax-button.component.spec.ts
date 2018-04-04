import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjaxButtonComponent } from './ajax-button.component';

describe('AjaxButtonComponent', () => {
  let component: AjaxButtonComponent;
  let fixture: ComponentFixture<AjaxButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjaxButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjaxButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
