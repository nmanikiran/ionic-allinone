import { Component } from '@angular/core';
import { SMS } from '@ionic-native/sms';

import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-my-sms',
  templateUrl: 'my-sms.html',
})
export class MySmsPage {

  phoneNumber: string = '8790222275';
  message: string = "Hello from Ionic App testing.";

  constructor(public navCtrl: NavController, private toast: ToastController, private sms: SMS) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MySmsPage');
  }

  sendTextMessage() {
    this.sms.hasPermission().then((isPermission) => {
      if (isPermission) {
        this.sms.send(this.phoneNumber, this.message).then((result) => {
          console.log(result);
          this.toast.create({
            message: "message sent",
            duration: 1000,
            position: 'bottom'
          });

        }).catch((err) => console.log(err));
      } else {
        this.toast.create({ message: 'Not allowed, No SMS Permission.' });
      }
    }).catch((err) => console.log(err));
  }

}