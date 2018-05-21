import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { VideoDialogComponent } from './video-dialog.component';
import { DialogRef } from 'ngx-modialog';

class MockContext {
  videoId;
  constructor(vidId) {
    this.videoId = vidId;
  }
}

class MockDialogRef {
  context: MockContext;
  constructor(mock: MockContext) {
    this.context = mock;
  }
  close() {
    return null;
  }
}

describe('VideoDialogComponent', () => {
  let component: VideoDialogComponent;
  let fixture: ComponentFixture<VideoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoDialogComponent ],
      providers: [
        { provide: DialogRef, useValue: new MockDialogRef(new MockContext(1))},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoDialogComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create',  () => {
    expect(component).toBeTruthy();
  });
});
