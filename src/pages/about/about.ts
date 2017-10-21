import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CallNumber } from '@ionic-native/call-number';
@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private call: CallNumber) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

  async callNumber() {
    await this.call.callNumber('8790222275', true);
  }

}
