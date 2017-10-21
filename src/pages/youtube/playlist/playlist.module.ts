import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlaylistPage } from './playlist';

@NgModule({
  declarations: [
    PlaylistPage,
  ],
  imports: [
    IonicPageModule.forChild(PlaylistPage),
  ],
})
export class PlaylistPageModule {}
