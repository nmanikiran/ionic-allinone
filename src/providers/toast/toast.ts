import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { ToastController, ToastOptions } from 'ionic-angular';

@Injectable()
export class ToastProvider {

  tOptions: ToastOptions = {
    duration: 3000,
    position: 'top',
  };

  constructor(public toast: ToastController) { }

  error(options) {
    this.tOptions.cssClass = 'error'
    let mergedOptions = { ...this.tOptions, ...options };
    this.toast.create(mergedOptions).present();
  }

  show(options) {
    let mergedOptions = { ...this.tOptions, ...options };
    this.toast.create(mergedOptions).present();
  }

}
