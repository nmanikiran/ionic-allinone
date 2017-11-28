import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, AlertOptions } from 'ionic-angular';
import { PhotoViewer } from '@ionic-native/photo-viewer';

@IonicPage()
@Component({
  selector: 'page-image-details',
  templateUrl: 'image-details.html',
})
export class ImageDetailsPage {

  photo: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams, private photoViewer: PhotoViewer, private alert: AlertController) {

    if (this.navParams.data && this.navParams.data.image) {
      this.photo = this.navParams.data.image;
    } else {
      this.navCtrl.setRoot('ImageGalleryPage');
    }
  }

  fullView() {
    this.photoViewer.show(this.photo.urls.full, '', { share: false });
  }

  download() {
    let options: AlertOptions = {
      title: 'Download',
      message: 'Currently not avalable. :!',
      buttons: [
        {
          text: 'Ok', handler: () => { }
        }
      ]
    }

    this.alert.create(options).present();
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ImageDetailsPage');
  }

}
