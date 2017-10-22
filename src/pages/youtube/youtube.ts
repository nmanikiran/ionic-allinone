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
  channelId = 'UCd6MoB9NC6uYN2grvUNT-Zg'; // Devdactic Channel ID
  playListId = 'PLtKjv92L0ihCYDnjfEppzUasoJ6UOdhcm';
  playlists: Observable<any[]>;

  constructor(public navCtrl: NavController, private ytProvider: YtProvider, private alertCtrl: AlertController) { }

  searchPlaylists() {
    this.playlists = this.ytProvider.getPlaylistsForChannel(this.channelId);
    this.playlists.subscribe(data => {
      //  console.log('playlists: ', data);
    }, err => {
      let alert = this.alertCtrl.create({
        title: 'Error',
        message: 'No Videos found for that Playlist ID',
        buttons: ['OK']
      });
      alert.present();
    })
  }

  openPlaylist(list) {
    this.navCtrl.push('PlaylistPage', { 'playList': list  });
  }
}