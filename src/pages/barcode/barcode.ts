import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

@IonicPage()
@Component({
  selector: 'page-barcode',
  templateUrl: 'barcode.html',
})
export class BarcodePage {

  results: any;
  options: BarcodeScannerOptions;
  constructor(public navCtrl: NavController, public navParams: NavParams, private barcode: BarcodeScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarcodePage');
  }

  async scanBarcode() {
    this.options = {
      prompt: "Scan a bar/qr code to see the results."
    };

    this.results = await this.barcode.scan(this.options);
    console.log(this.results);
  }

  async encodeData() {
    const result = await this.barcode.encode(this.barcode.Encode.TEXT_TYPE, 'https://www.linkedin.com/in/nmanikiran/');
  }

}
