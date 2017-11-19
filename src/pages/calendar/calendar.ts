import { Component, ViewChild } from '@angular/core';
import { IonicPage, ModalController, AlertController, AlertOptions } from 'ionic-angular';
import { Calendar, CalendarOptions } from '@ionic-native/calendar';
import { CalendarComponent } from "ionic2-calendar/calendar";

import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: './calendar.html',
})
export class CalendarPage {

  options: CalendarOptions;
  @ViewChild(CalendarComponent) myCalendar: CalendarComponent;

  eventSource = [];
  viewTitle: string;
  isToday: boolean;
  calendar = {
    mode: 'month',
    currentDate: new Date()
  }; // these are the letiable used by the calendar.

  constructor(private nativeCal: Calendar, private modal: ModalController, private alertCtrl: AlertController) {
    this.nativeCal.createCalendar('MyCalendar').then(
      (msg) => { console.log(msg); },
      (err) => { console.log(err); }
    );
    this.options = this.nativeCal.getCalendarOptions();
  }

  loadEvents(results) {
    if (results)
      this.eventSource.push(results);
    this.myCalendar.loadEvents();
  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  onEventSelected(event) {

    let start = moment(event.startTime).format("ddd, MMM DD YYYY, h:mm a");
    let end = moment(event.endTime).format("ddd, MMM DD YYYY, h:mm a");

    let options: AlertOptions = {
      title: '' + event.title,
      message: event.notes,
      enableBackdropDismiss: false,
      subTitle: 'From: ' + start + '<br>To: ' + end,
      buttons: ['OK']
    };

    this.alertCtrl.create(options).present();
  }

  changeMode(mode) {
    this.calendar.mode = mode;
  }

  today() {
    this.calendar.currentDate = new Date();
  }

  onTimeSelected(ev) {
    console.log(ev);
  }

  onCurrentDateChanged(event: Date) {
    let today = new Date();
    today.setHours(0, 0, 0, 0);
    event.setHours(0, 0, 0, 0);
    this.isToday = today.getTime() === event.getTime();
  }

  createRandomEvents() {
    let events = [];
    return events;
  }

  onRangeChanged(ev) {
    console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
  }

  markDisabled = (date: Date) => {
    let current = new Date();
    current.setHours(0, 0, 0);
    return date < current;
  };

  ionViewDidLoad() {
    this.init();
    this.getAllEvents();
  }

  init() {
    this.nativeCal.hasReadWritePermission().then(hasit => {
      if (hasit) {
        console.log('can add');
      } else {
        this.nativeCal.requestReadPermission().then(IsGranted => {

        });
      }
    });
  }

  getAllEvents() {
    let date = new Date(), y = date.getFullYear(), m = date.getMonth();
    let firstDay = new Date(y, m, 1);
    let lastDay = new Date(y, m + 1, 0);
    this.nativeCal.listEventsInRange(firstDay, lastDay).then(results => {
      console.log(results);
    })
  }

  openCalendar() {
    this.nativeCal.openCalendar(new Date()).then(
      (msg) => { console.log(msg); },
      (err) => { console.log(err); }
    );
  }

  addEvent() {
    let modal = this.modal.create('AddEventPage', {});
    modal.present();

    modal.onDidDismiss(results => {
      this.options.secondReminderMinutes = 10;
      if (!results) return;

      results.startTime = new Date(results.startTime);
      results.endTime = new Date(results.endTime);
      let { title, location, notes, startTime, endTime, allDay } = results;

      this.loadEvents(results);
      this.nativeCal.createEventWithOptions(title, location, notes, startTime, endTime, this.options);
    });

  }

}
