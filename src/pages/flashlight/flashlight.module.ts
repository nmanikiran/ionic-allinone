import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FlashlightPage } from './flashlight';

@NgModule({
  declarations: [
    FlashlightPage,
  ],
  imports: [
    IonicPageModule.forChild(FlashlightPage),
  ],
  exports: [
    FlashlightPage
  ]
})
export class FlashlightPageModule { }
