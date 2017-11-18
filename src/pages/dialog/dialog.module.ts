import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DialogPage } from './dialog';

@NgModule({
  declarations: [
    DialogPage,
  ],
  imports: [
    IonicPageModule.forChild(DialogPage),
  ],
})
export class DialogPageModule {}
