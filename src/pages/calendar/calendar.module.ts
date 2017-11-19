import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalendarPage } from './calendar';
import { AddEventModule } from './addEvent/addEvent.module';
import { NgCalendarModule  } from 'ionic2-calendar';

@NgModule({
  declarations: [
    CalendarPage,
  ],
  imports: [
    AddEventModule,
    NgCalendarModule,
    IonicPageModule.forChild(CalendarPage),
  ],
})
export class CalendarPageModule { }
