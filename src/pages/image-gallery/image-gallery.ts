import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-image-gallery',
  templateUrl: 'image-gallery.html',
})
export class ImageGalleryPage {
  galleryType = 'regular';
  images = [];
  constructor(public navCtrl: NavController) {
    this.loadImages();
  }

  loadImages() {
    this.images = ["https://images-na.ssl-images-amazon.com/images/M/MV5BMTQxMjMzMTczM15BMl5BanBnXkFtZTcwNzg5MzUyMQ@@._V1_SX300.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY5MzYwNDYwNF5BMl5BanBnXkFtZTgwMDMwNDg5MTE@._V1_SX300.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMzc5NTUzNTgzMF5BMl5BanBnXkFtZTcwODcwMzQ5Mw@@._V1_SX300.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM0MzM2MjU0N15BMl5BanBnXkFtZTcwMDIyMDcxMw@@._V1_SX300.jpg",
      "http://ia.media-imdb.com/images/M/MV5BMzUyNjc3NTg0NV5BMl5BanBnXkFtZTcwMTQ1OTg4Mg@@._V1_SX300.jpg",
      "http://ia.media-imdb.com/images/M/MV5BMTY4NjkzMDg0NV5BMl5BanBnXkFtZTcwNjAwOTA3NA@@._V1_SX300.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc1MTM0MTA2N15BMl5BanBnXkFtZTcwMTk1OTIzMQ@@._V1_SX300.jpg",
      "http://ia.media-imdb.com/images/M/MV5BNjk0OTYzNzU3OF5BMl5BanBnXkFtZTcwNTAwOTA3NA@@._V1_SX300.jpg",
      "http://ia.media-imdb.com/images/M/MV5BMWRmYTc0NDYtYTZkYS00YzBhLTkyMmUtZjg3MTcwMjUxZTljXkEyXkFqcGdeQXVyMzYzNzc1NjY@._V1_SX300.jpg"];
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ImageGalleryPage');
  }

}
