import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MySmsPage } from './my-sms';

@NgModule({
  declarations: [
    MySmsPage,
  ],
  imports: [
    IonicPageModule.forChild(MySmsPage),
  ],
  exports: [
    MySmsPage
  ]
})
export class MySmsPageModule { }
