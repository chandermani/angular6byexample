import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Modal } from 'ngx-modialog/plugins/bootstrap';
import { VideoDialogComponent, VideoDialogContext } from './video-dialog/video-dialog.component';
import { overlayConfigFactory } from 'ngx-modialog';

@Component({
  selector: 'abe-video-player',
  templateUrl: './video-player.component.html',
  styles: []
})
export class VideoPlayerComponent implements OnInit {

  @Input() videos: Array<string>;

  constructor(private modal: Modal) { }

  ngOnInit() {
  }

  playVideo(videoId: string) {
    this.modal.open(VideoDialogComponent, overlayConfigFactory(new VideoDialogContext(videoId)));
  };
}
