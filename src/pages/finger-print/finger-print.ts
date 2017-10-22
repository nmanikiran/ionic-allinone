import { Component } from '@angular/core';
import { IonicPage, Platform } from 'ionic-angular';
import { FingerprintAIO, FingerprintOptions } from '@ionic-native/fingerprint-aio';

@IonicPage()
@Component({
  selector: 'page-finger-print',
  templateUrl: 'finger-print.html',
})
export class FingerPrintPage {

  fingerprintOptions: FingerprintOptions = {
    clientId: 'fingerprint-demo',
    disableBackup: true,
    clientSecret: 'password'
  };
  constructor(public platform: Platform, public finger: FingerprintAIO) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FingerPrintPage');
  }

  async showFingerPrintDailog() {
    try {
      await this.platform.ready()
      const isAvailable = await this.finger.isAvailable();
      console.log(isAvailable);
      if (isAvailable === 'OK') {
        const result = await this.finger.show(this.fingerprintOptions);
        console.log(result);
      }
    } catch (err) {
      console.log(err);
    }
  }

}
