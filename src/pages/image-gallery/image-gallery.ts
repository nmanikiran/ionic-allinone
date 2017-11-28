import { ImageProvider } from './../../providers/image/image';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Slides } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-image-gallery',
  templateUrl: 'image-gallery.html',
})
export class ImageGalleryPage {

  @ViewChild(Slides) slides: Slides;
  galleryType: string = 'grid';
  images = [];
  pager = { page: 1 }

  constructor(public navCtrl: NavController, private imgProvider: ImageProvider) {
    this.galleryType = 'grid';
    this.loadImages();
  }

  loadImages() {
    return new Promise((resolve) => {
      this.imgProvider.getPhotos(this.pager).subscribe((res) => {
        this.images = [...this.images, ...res]
        this.pager.page += 1;
        resolve();
      }, (err) => {
        resolve();
        console.log(err);
      });
    });
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    //console.log('Current index is', currentIndex);
  }

  gotoSlide(i) {
    this.slides.slideTo(i, 500);
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ImageGalleryPage');
  }

  gotoDetails(image) {
    this.navCtrl.push('ImageDetailsPage', { image });
  }

}
