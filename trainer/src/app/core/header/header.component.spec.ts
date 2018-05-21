import { Component } from '@angular/core';
import { TestBed, inject, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { Location } from '@angular/common';

import { HeaderComponent } from './header.component';

@Component({
  template: ''
})
class MockHistoryComponent {
}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent, MockHistoryComponent ],
      imports: [
        RouterTestingModule.withRoutes([
         { path: 'history', component: MockHistoryComponent }
        ])
      ],
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h3 tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('Personal Trainer');
  }));

  it('should have a link to /history', () => {
    const href = fixture.debugElement.query(By.css('a')).nativeElement
    .getAttribute('href');
    expect(href).toEqual('/history');
  });

  it('should navigate to "/history" when clicking on link',
    async(inject([Location], (location: Location) => {
    fixture.debugElement.query(By.css('a')).nativeElement.click();
    fixture.whenStable().then(() => {
      expect(location.path()).toEqual('/history');
    });
  })));
});
