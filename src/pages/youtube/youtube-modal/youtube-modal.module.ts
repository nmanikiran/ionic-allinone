import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YoutubeModalPage } from './youtube-modal';

@NgModule({
  declarations: [
    YoutubeModalPage,
  ],
  imports: [
    IonicPageModule.forChild(YoutubeModalPage),
  ],
})
export class YoutubeModalPageModule {}
