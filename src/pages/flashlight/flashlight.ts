import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Flashlight } from '@ionic-native/flashlight';

@IonicPage()
@Component({
  selector: 'page-flashlight',
  templateUrl: 'flashlight.html',
})
export class FlashlightPage {
  isOn: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private flashlight: Flashlight) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlashlightPage');
  }

  async isAvailable(): Promise<boolean> {
    try {
      return await this.flashlight.available();
    }
    catch (e) {
      console.log(e);
    }
  }

  async toggleFlashLight(): Promise<void> {
    try {
      let available = await this.isAvailable();
      if (available) {
        await this.flashlight.toggle();
        this.isOn = !this.isOn;
      }
    } catch (e) {
      console.log(e);
    }
  }

}
