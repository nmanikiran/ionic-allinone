import { DomSanitizer } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-youtube-modal',
  templateUrl: 'youtube-modal.html',
})
export class YoutubeModalPage {

  video: any;

  constructor(public navCtrl: NavController, private params: NavParams, private viewCtrl: ViewController, private dom: DomSanitizer) {

    this.video = params.get('video');

    this.video.src = this.dom.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.video.snippet.resourceId.videoId}?showinfo=0&rel=0&autoplay=1`);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad YoutubeModalPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
