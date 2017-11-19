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
  results: any = {};

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
    return new Promise((resolve) => {

      if (this.results.pageInfo && this.results.pageInfo.totalResults === this.videoList.length)
        return resolve();
      let data = {
        'playlistId': this.playListId,
        'pageToken': this.results.nextPageToken
      };
      this.ytProvider.getListVideos(data).subscribe(res => {
        this.results = res;
        resolve();
        this.videoList = [...this.videoList, ...res.items];
      }, (err) => {
        resolve();
        console.log(err)
      });
    });
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
