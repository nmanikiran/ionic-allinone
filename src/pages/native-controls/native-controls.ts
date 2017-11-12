import { Component } from '@angular/core';
import { Badge } from '@ionic-native/badge';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { Brightness } from '@ionic-native/brightness';
import { FingerprintAIO, FingerprintOptions } from '@ionic-native/fingerprint-aio';
import { Flashlight } from '@ionic-native/flashlight';
import { Vibration } from '@ionic-native/vibration';

import { IonicPage, Platform } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-native-controls',
  templateUrl: 'native-controls.html',
})
export class NativeControlsPage {

  brightnessValue: number = 80;
  screenSleep: boolean = false;
  isFlashOn: boolean = false;
  fingerprintOptions: FingerprintOptions = {
    clientId: 'fingerprint-demo',
    disableBackup: true,
    clientSecret: 'password'
  };
  results: any;
  options: BarcodeScannerOptions;

  constructor(private vibration: Vibration,
    private barcode: BarcodeScanner,
    private brightness: Brightness,
    private plt: Platform, private flashlight: Flashlight,
    private badge: Badge, public platform: Platform, public finger: FingerprintAIO) {
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

  vibrate() {
    if (this.plt.is('android')) {
      // Vibrate 2 sec Pause for 1 sec and Vibrate for 2 seconds
      // Patterns work on Android and Windows only
      this.vibration.vibrate([2000, 1000, 2000]);
    } else if (this.plt.is('ios')) {
      // Duration is ignored on iOS.
      this.vibration.vibrate(1000);
    }
  }

  setBrightness(brightnessValue) {
    brightnessValue = brightnessValue || this.brightnessValue;
    brightnessValue = brightnessValue / 100;
    this.brightness.setBrightness(brightnessValue);
  }

  async getBrightness() {
    const currentBrightness = await this.brightness.getBrightness();
    this.setBrightness(currentBrightness);
  }

  setKeepScreenOn() {
    this.brightness.setKeepScreenOn(this.screenSleep);
  }

  async toggleFlashLight(): Promise<void> {
    try {
      let available = await this.flashlight.available();
      if (available) {
        await this.flashlight.toggle();
        this.isFlashOn = !this.isFlashOn;
      }
    } catch (e) {
      console.log(e);
    }
  }

  async scanBarcode() {
    this.options = {
      prompt: "Scan a bar/qr code to see the results."
    };

    this.results = await this.barcode.scan(this.options);
    console.log(this.results);
  }

  async encodeData() {
    const result = await this.barcode.encode(this.barcode.Encode.TEXT_TYPE, 'https://www.linkedin.com/in/nmanikiran/');

    console.log(result);
  }

}
