import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TtsPage } from './tts';

@NgModule({
  declarations: [
    TtsPage,
  ],
  imports: [
    IonicPageModule.forChild(TtsPage),
  ],
})
export class TtsPageModule {}
