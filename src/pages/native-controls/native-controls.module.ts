import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NativeControlsPage } from './native-controls';

@NgModule({
  declarations: [
    NativeControlsPage,
  ],
  imports: [
    IonicPageModule.forChild(NativeControlsPage),
  ],
  exports:[
    NativeControlsPage
  ]
})
export class NativeControlsPageModule {}
