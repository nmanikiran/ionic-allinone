import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { TextToSpeech } from '@ionic-native/text-to-speech';
@IonicPage()
@Component({
  selector: 'page-tts',
  templateUrl: 'tts.html',
})
export class TtsPage {
  text: string;
  constructor(public navCtrl: NavController, private tts: TextToSpeech) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TtsPage');
  }

  async sayText(): Promise<any> {
    try {
      await this.tts.speak(this.text);
      console.log("Successfully Spoke ", this.text);
    } catch (e) {

    }
  }

}
