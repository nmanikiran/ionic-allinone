import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams, AlertOptions, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-dialog',
  templateUrl: 'dialog.html',
})
export class DialogPage {

  itemList = [
    { title: 'Live In No Shoes Nation', id: 1 },
    { title: 'Meaning Of Life', id: 2 },
    { title: 'Heartbreak On A Full Moon', id: 3 }
  ];

  constructor(public alertCtrl: AlertController, private toast: ToastController) {

  }

  ionViewDidLoad() { }

  showAlert() {
    let options: AlertOptions = {
      title: 'Info!',
      subTitle: 'You can add, remove album !',
      buttons: ['OK']
    };
    this.alertCtrl.create(options).present();
  }

  showPrompt() {
    let options: AlertOptions = {
      title: 'Add',
      message: "Enter a name for this new album you're so keen on adding",
      inputs: [{ name: 'title', placeholder: 'Title' },],
      buttons: [
        {
          text: 'Cancel',
          handler: data => { }
        },
        {
          text: 'Save',
          handler: data => {
            if (!data || !data.title) return;
            data.id = this.itemList.length + 1;
            this.itemList.push(data);
            this.toast.create({ message: "Album added Successfully", duration: 3000, position: 'top', cssClass: 'error' }).present();
          }
        }
      ]
    }
    this.alertCtrl.create(options).present();
  }

  showConfirm(i) {
    let options: AlertOptions = {
      title: 'Confirm?',
      message: 'Are you sure, you want to remove this album ?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => { }
        },
        {
          text: 'Agree',
          handler: (data) => {
            this.itemList.splice(i, 1);
            this.toast.create({ message: "Album removed Successfully", duration: 3000, position: 'top', cssClass: 'error' }).present();
          }
        }
      ]
    };

    this.alertCtrl.create(options).present();
  }

}
