import { Component, ChangeDetectorRef } from '@angular/core';
import { SpeechRecognition, SpeechRecognitionListeningOptionsAndroid, SpeechRecognitionListeningOptionsIOS } from '@ionic-native/speech-recognition';

import { IonicPage, NavController, Platform } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-stt',
  templateUrl: 'stt.html',
})
export class SttPage {

  speechList: Array<string> = [];
  isRecording: boolean = false;
  options: any;
  androidOptions: SpeechRecognitionListeningOptionsAndroid;
  iosOptions: SpeechRecognitionListeningOptionsIOS;

  constructor(public navCtrl: NavController, private speech: SpeechRecognition, private plt: Platform, private cd: ChangeDetectorRef) {
  }

  async getLanguages(): Promise<void> {
    const langs = await this.speech.getSupportedLanguages();
    // console.log(langs);
  }

  startListening(): void {

    this.androidOptions = { showPopup: false };
    if (this.plt.is('android')) {
      this.options = this.androidOptions;
    } else if (this.plt.is('ios')) {
      this.options = this.iosOptions;
    }

    this.speech.startListening(this.options).subscribe(data => {
      this.speechList = data;
      this.isRecording = true;
      this.cd.detectChanges();
    }, err => console.log(err));
  }

  stopListening(): void {
    this.speech.stopListening().then(data => {
      this.isRecording = false;
    }, err => console.log(err));
  }

  async hasPermission(): Promise<boolean> {
    try {
      const permission = await this.speech.hasPermission();
      return permission;
    } catch (e) {
      console.log(e);
    }
  }

  getPermission(): void {
    this.speech.hasPermission().then(hasPermission => {
      if (!hasPermission) {
        this.speech.requestPermission();
      }
    })
  }



  async isSpeechSupported(): Promise<boolean> {
    const isAvailable = await this.speech.isRecognitionAvailable();
    console.log(isAvailable);
    return isAvailable;
  }

}
