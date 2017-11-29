import { ChangeDetectorRef, Component } from '@angular/core';
import { Badge } from '@ionic-native/badge';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { BatteryStatus, BatteryStatusResponse } from '@ionic-native/battery-status';
import { Brightness } from '@ionic-native/brightness';
import { CallNumber } from '@ionic-native/call-number';
import { FingerprintAIO, FingerprintOptions } from '@ionic-native/fingerprint-aio';
import { Flashlight } from '@ionic-native/flashlight';
import { SMS } from '@ionic-native/sms';
import {
  SpeechRecognition, SpeechRecognitionListeningOptionsAndroid,
  SpeechRecognitionListeningOptionsIOS
} from '@ionic-native/speech-recognition';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { Vibration } from '@ionic-native/vibration';

import { IonicPage, Platform } from 'ionic-angular';

import { ToastProvider } from '../../providers/toast/toast';

@IonicPage()
@Component({
  selector: 'page-native-controls',
  templateUrl: 'native-controls.html',
})
export class NativeControlsPage {
  batteryListener: any;
  battery: BatteryStatusResponse;

  brightnessValue: number = 80;
  screenSleep: boolean = false;
  isFlashOn: boolean = false;
  fingerprintOptions: FingerprintOptions = {
    clientId: 'fingerprint-demo',
    disableBackup: true,
    clientSecret: 'password'
  };
  barcodeResults: any;
  options: BarcodeScannerOptions;
  phoneNumber: number;
  message: string = "Hello from Ionic App testing.";
  type: string = 'call';
  speechText: string;

  speechList: Array<string> = [];
  isRecording: boolean = false;
  speechOptions: any;
  androidOptions: SpeechRecognitionListeningOptionsAndroid;
  iosOptions: SpeechRecognitionListeningOptionsIOS;


  constructor(private vibration: Vibration,
    private barcode: BarcodeScanner,
    private brightness: Brightness,
    private call: CallNumber,
    private plt: Platform, private flashlight: Flashlight,
    private toast: ToastProvider, private sms: SMS,
    private tts: TextToSpeech,
    private batteryStatus: BatteryStatus,
    private badge: Badge, public platform: Platform, public finger: FingerprintAIO,
    private speech: SpeechRecognition, private cd: ChangeDetectorRef) {
    this.type = 'call';
  }

  segmentChanged(e) {
    if (e.value === 'speech') {
      this.initSpeech();
    } else if (e.value === 'battery') {
      this.getBattery();
    } else if (this.batteryListener) {
      this.batteryListener.unsubscribe();
    }
  }

  async callNumber() {
    await this.call.callNumber(this.phoneNumber.toString(), true);
  }

  sendTextMessage() {

    this.sms.hasPermission().then((isPermission) => {
      if (isPermission) {
        this.sms.send(this.phoneNumber.toString(), this.message).then((result) => {
          console.log(result);
          this.toast.show({ message: "message sent" });

        }).catch((err) => console.log(err));
      } else {
        this.toast.show({ message: 'Not allowed, No SMS Permission.' });
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
    try {
      this.options = {
        prompt: "Scan a bar/qr code to see the results."
      };

      this.barcodeResults = await this.barcode.scan(this.options);
    } catch (e) {
      console.log(e);
    }
  }

  async encodeData() {
    try {
      const result = await this.barcode.encode(this.barcode.Encode.TEXT_TYPE, 'https://www.linkedin.com/in/nmanikiran/');

      // console.log(result);
    } catch (e) {
      console.log(e);
    }
  }

  async getLanguages(): Promise<void> {
    const langs = await this.speech.getSupportedLanguages();
    console.log(langs);
  }

  startListening(): void {
    this.androidOptions = { showPopup: false };
    if (this.plt.is('android')) {
      this.speechOptions = this.androidOptions;
    } else if (this.plt.is('ios')) {
      this.speechOptions = this.iosOptions;
    }

    this.speech.startListening(this.speechOptions).subscribe(data => {
      this.speechList = data.splice(0, 1);
      this.isRecording = true;
      this.cd.detectChanges();
    }, err => console.log(err));
  }

  stopListening(): void {
    this.speech.stopListening().then(data => {
      this.isRecording = false;
    }, err => console.log(err));
  }

  async initSpeech() {
    try {
      const isAvailable = await this.speech.isRecognitionAvailable();
      if (isAvailable) {
        this.speech.hasPermission().then(hasPermission => {
          if (!hasPermission) {
            this.speech.requestPermission();
          }
        })
      } else {
        this.toast.show({ message: 'Speech Recognition is Not Available :(' });
      }
    } catch (e) {
      console.log(e);
    }
  }

  getBattery() {

    this.platform.ready().then(() => {
      try {
        this.batteryListener = this.batteryStatus.onChange().subscribe(
          (status: BatteryStatusResponse) => {
            this.battery = status;
            console.log(status.level, status.isPlugged);
          }
        );
      } catch (e) {
        console.log(e);
      }
    });

  }


}
