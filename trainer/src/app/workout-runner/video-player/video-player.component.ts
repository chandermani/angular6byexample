import { Component, OnInit, OnChanges, Input, ViewEncapsulation } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { Modal } from 'ngx-modialog/plugins/bootstrap';
import { VideoDialogComponent, VideoDialogContext } from './video-dialog/video-dialog.component';
import { overlayConfigFactory } from 'ngx-modialog';

@Component({
  selector: 'abe-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class VideoPlayerComponent implements OnInit{

  @Input() videos: Array<string>;

  constructor(private modal: Modal) { }

  ngOnInit() {
  }

  playVideo(videoId: string) {
    this.modal.open(VideoDialogComponent, overlayConfigFactory(new VideoDialogContext(videoId)));
  };
}
