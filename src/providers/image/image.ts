import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ImageProvider {
  baseUrl: string = `https://api.unsplash.com/photos`;
  apiKey: string = `7e6d61dfcd1edcdd5a92689816419036f7f0a893cacfdb5b34084dfc1856b23a`;
  constructor(public http: Http) { }

  formatParams(data) {
    let params = new URLSearchParams();
    params.set('client_id', this.apiKey);
    params.set('per_page', '20');
    for (let prop in data) {
      params.set(prop, data[prop]);
    }
    return new RequestOptions({ params });
  }

  getPhotos(data) {
    let params = this.formatParams(data);
    return this.http.get(`${this.baseUrl}`, params).map((res) => {
      return res.json();
    });
  }

}
