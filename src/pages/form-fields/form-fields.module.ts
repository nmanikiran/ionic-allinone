import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormFieldsPage } from './form-fields';

@NgModule({
  declarations: [
    FormFieldsPage,
  ],
  imports: [
    IonicPageModule.forChild(FormFieldsPage),
  ],
})
export class FormFieldsPageModule {}
