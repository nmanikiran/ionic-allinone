import { Component } from '@angular/core';
import { AlertController, NavController, IonicPage } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { YtProvider } from '../../providers/yt/yt';

@IonicPage()
@Component({
  selector: 'page-youtube',
  templateUrl: 'youtube.html'
})
export class YoutubePage {
  channelId = 'UCd6MoB9NC6uYN2grvUNT-Zg'; //  Channel ID
  playListId = 'PLtKjv92L0ihCYDnjfEppzUasoJ6UOdhcm';
  playlists = [];
  results: any = {};

  constructor(public navCtrl: NavController, private ytProvider: YtProvider, private alertCtrl: AlertController) { }

  searchPlaylists() {
    return new Promise((resolve) => {

      if (this.results.pageInfo && this.results.pageInfo.totalResults === this.playlists.length) {
        return resolve();
      }
      var data = {
        'channelId': this.channelId,
        'pageToken': this.results.nextPageToken
      }
      this.ytProvider.getPlaylistsForChannel(data).subscribe(res => {
        console.log(res);
        this.results = res;
        this.playlists = [...this.playlists, ...res.items];
        resolve();
      }, err => {
        resolve();
        let alert = this.alertCtrl.create({
          title: 'Error',
          message: 'No Videos found for that Playlist ID',
          buttons: ['OK']
        });
        alert.present();
      });

    });
  }

  openPlaylist(list) {
    this.navCtrl.push('PlaylistPage', { 'playList': list });
  }
}