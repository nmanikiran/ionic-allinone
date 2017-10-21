import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YoutubePage } from './youtube';
import { PlaylistPageModule } from './playlist/playlist.module';
import { YoutubeModalPageModule } from './youtube-modal/youtube-modal.module';

@NgModule({
  declarations: [
    YoutubePage,
  ],
  imports: [
    PlaylistPageModule,
    YoutubeModalPageModule,
    IonicPageModule.forChild(YoutubePage),
  ],
  exports: [
    YoutubePage
  ],
})
export class YoutubePageModule { }
