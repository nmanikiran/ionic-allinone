import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

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
  constructor(public navCtrl: NavController, public appbrowser: InAppBrowser, ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

  ////https://www.linkedin.com/in/nmanikiran/
  //https://github.com/nmanikiran
  async openWebBrowser() {
    const browser = await this.appbrowser.create('https://github.com/nmanikiran', '_self', this.inAppBrowserOptions);
    browser.show();
  }

}
