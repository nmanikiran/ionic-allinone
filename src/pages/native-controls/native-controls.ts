import { Component } from '@angular/core';
import { Badge } from '@ionic-native/badge';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { Brightness } from '@ionic-native/brightness';
import { FingerprintAIO, FingerprintOptions } from '@ionic-native/fingerprint-aio';
import { Flashlight } from '@ionic-native/flashlight';
import { Vibration } from '@ionic-native/vibration';

import { IonicPage, Platform, ToastController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { SMS } from '@ionic-native/sms';
import { TextToSpeech } from '@ionic-native/text-to-speech';

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
  phoneNumber: number;
  message: string = "Hello from Ionic App testing.";
  type: string = 'call';
  speechText: string;

  constructor(private vibration: Vibration,
    private barcode: BarcodeScanner,
    private brightness: Brightness,
    private call: CallNumber,
    private plt: Platform, private flashlight: Flashlight,
    private toast: ToastController, private sms: SMS,
    private tts: TextToSpeech,
    private badge: Badge, public platform: Platform, public finger: FingerprintAIO) {
    this.type = 'call';
  }

  async callNumber() {
    await this.call.callNumber(this.phoneNumber.toString(), true);
  }

  sendTextMessage() {

    this.sms.hasPermission().then((isPermission) => {
      if (isPermission) {
        this.sms.send(this.phoneNumber.toString(), this.message).then((result) => {
          console.log(result);
          this.toast.create({
            message: "message sent", duration: 1000, position: 'bottom'
          });

        }).catch((err) => console.log(err));
      } else {
        this.toast.create({ message: 'Not allowed, No SMS Permission.' });
      }
    }).catch((err) => console.log(err));
  }

  async sayText(): Promise<any> {
    try {
      await this.tts.speak(this.speechText);
      console.log("Successfully Spoke ", this.speechText);
    } catch (e) {
      console.log(e);
    }
  }

  async showFingerPrintDailog() {
    try {
      await this.platform.ready()
      const isAvailable = await this.finger.isAvailable();
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
  }

  async encodeData() {
    const result = await this.barcode.encode(this.barcode.Encode.TEXT_TYPE, 'https://www.linkedin.com/in/nmanikiran/');

    console.log(result);
  }

}
