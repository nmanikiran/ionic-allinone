import { Component } from '@angular/core';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { SocialSharing } from '@ionic-native/social-sharing';

import { AlertController, AlertOptions, IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-image-details',
  templateUrl: 'image-details.html',
})
export class ImageDetailsPage {

  photo: any;

  constructor(public navCtrl: NavController,
    private socialSharing: SocialSharing,
    public navParams: NavParams, private photoViewer: PhotoViewer,
    private alert: AlertController) {

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

  sharePhoto() {
   
    try {
      this.socialSharing.share((this.photo.description || this.photo.user.bio), 'Check this photo', this.photo.urls.thumb, this.photo.links.html).then(() => {
      }).catch(e => { console.log(e); });
    } catch (e) {
      console.log(e);
    }
  }

}
