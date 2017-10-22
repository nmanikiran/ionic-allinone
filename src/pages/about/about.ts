import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { CallNumber } from '@ionic-native/call-number';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  inAppBrowserOptions: InAppBrowserOptions = {
    zoom: 'no',
    hardwareback:'yes',
    location:'no'
  };
  constructor(public navCtrl: NavController, public appbrowser: InAppBrowser, private call: CallNumber) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

  async callNumber() {
    await this.call.callNumber('1234456666', true);
  }
  ////https://www.linkedin.com/in/nmanikiran/
  //https://github.com/nmanikiran
  async openWebBrowser() {
    const browser = await this.appbrowser.create('https://github.com/nmanikiran', '_self', this.inAppBrowserOptions);
    browser.show();
  }

}
