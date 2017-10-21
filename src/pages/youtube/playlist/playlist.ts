import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { YtProvider } from '../../../providers/yt/yt';

@IonicPage()
@Component({
  selector: 'page-playlist',
  templateUrl: 'playlist.html',
})
export class PlaylistPage {

  videoList: any = [];
  playListId: string;
  playListTitle: string;

  constructor(public navCtrl: NavController, private modal: ModalController, public navParams: NavParams, private ytProvider: YtProvider, private player: YoutubeVideoPlayer) {
    const playList = this.navParams.get('playList');
    if (playList && playList.id) {
      this.playListId = playList.id;
      this.playListTitle = playList.snippet.title;
      this.getVideoList();
    } else {
      this.navCtrl.pop();
    }
  }

  getVideoList() {
    this.videoList = this.ytProvider.getListVideos(this.playListId);
    this.videoList.subscribe(data => {
      console.log('videos', data);
    }, err => console.log(err)
    );
  }

  playVideo(video) {
    const modalInst = this.modal.create('YoutubeModalPage', { video: video });
    modalInst.present();
    // this.player.openVideo(video.snippet.resourceId.videoId)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlaylistPage');
  }

}
