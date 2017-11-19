import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class YtProvider {
  apiKey = 'AIzaSyAXrNf-YL8LFYZmJNHSXGeuRVK8qPSOoXQ';
  baseUrl = `https://www.googleapis.com/youtube/v3/`

  constructor(public http: Http) { }

  formatParams(data) {
    let myParams = new URLSearchParams();
    myParams.set('key', this.apiKey);
    myParams.set('part', 'snippet,id');
    myParams.set('maxResults', '20');
    for (let prop in data) {
      myParams.set(prop, data[prop]);
    }
    return new RequestOptions({ params: myParams });
  }

  getPlaylistsForChannel(data) {
    let params = this.formatParams(data);
    return this.http.get(`${this.baseUrl}playlists`, params).map((res) => {
      return res.json();
    })
  }

  getListVideos(data) {
    
    let params = this.formatParams(data);
    return this.http.get(`${this.baseUrl}playlistItems`, params).map((res) => {
      return res.json();
    })
  }
}