import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {
  image: string;

  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    correctOrientation: true,
    saveToPhotoAlbum: true
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera) {
    this.takePhoto();
  }

  async takePhoto() {
    let results = await this.camera.getPicture(this.options);
    // imageData is either a base64 encoded string or a file URI
    // If it's base64:
    this.image = `data:image/jpeg;base64,${results}`;
    console.log(results);
    console.log(this.image);
  }
  ionViewDidLoad() {
    // console.log('ionViewDidLoad CameraPage');
  }

}
