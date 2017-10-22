import { Component } from '@angular/core';
import { IonicPage, Platform } from 'ionic-angular';
import { Brightness } from '@ionic-native/brightness';
import { Vibration } from '@ionic-native/vibration';
import { Flashlight } from '@ionic-native/flashlight';
import { Badge } from '@ionic-native/badge';

@IonicPage()
@Component({
  selector: 'page-native-controls',
  templateUrl: 'native-controls.html',
})
export class NativeControlsPage {

  brightnessValue: number = 80;
  screenSleep: boolean = false; 
  isFlashOn: boolean = false;

  constructor(private vibration: Vibration, private brightness: Brightness, private plt: Platform, private flashlight: Flashlight, private badge: Badge) {
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

}
