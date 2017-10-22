import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FingerPrintPage } from './finger-print';

@NgModule({
  declarations: [
    FingerPrintPage,
  ],
  imports: [
    IonicPageModule.forChild(FingerPrintPage),
  ],
})
export class FingerPrintPageModule {}
