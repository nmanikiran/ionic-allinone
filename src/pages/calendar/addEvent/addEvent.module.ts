import { NgModule } from '@angular/core';

import { AddEventPage } from './addEvent';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [AddEventPage],
    imports: [
        IonicPageModule.forChild(AddEventPage),
    ],
})
export class AddEventModule { }
