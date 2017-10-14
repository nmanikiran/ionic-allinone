import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YoutubePage } from './youtube';

@NgModule({
  declarations: [
    YoutubePage,
  ],
  imports: [
    IonicPageModule.forChild(YoutubePage),
  ],
  exports: [
    YoutubePage
  ]
})
export class YoutubePageModule { }
