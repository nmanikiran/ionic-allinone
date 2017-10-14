import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class YtProvider {
  apiKey = 'AIzaSyCQrugS5baPBSbk-Tyha8Xs3guDU9xohi4';
  baseUrl = `https://www.googleapis.com/youtube/v3/`

  constructor(public http: Http) { }

  getPlaylistsForChannel(channel) {
    return this.http.get(this.baseUrl + 'playlists?key=' + this.apiKey + '&channelId=' + channel + '&part=snippet,id&maxResults=20')
      .map((res) => {
        return res.json()['items'];
      })
  }

  getListVideos(listId) {
    return this.http.get(this.baseUrl + 'playlistItems?key=' + this.apiKey + '&playlistId=' + listId + '&part=snippet,id&maxResults=20')
      .map((res) => {
        return res.json()['items'];
      })
  }
}