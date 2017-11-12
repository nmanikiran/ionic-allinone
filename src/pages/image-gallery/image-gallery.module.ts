import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImageGalleryPage } from './image-gallery';

@NgModule({
  declarations: [
    ImageGalleryPage,
  ],
  imports: [
    IonicPageModule.forChild(ImageGalleryPage),
  ],
})
export class ImageGalleryPageModule {}
