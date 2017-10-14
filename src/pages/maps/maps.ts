import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
declare var google: any;

@IonicPage()
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {

  @ViewChild('map') mapRef: ElementRef

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    this.showMap();
  }

  showMap(): void {

    const location = new google.maps.LatLng(17.3850, 78.4867);

    const options = {
      center: location,
      zoom: 10,
      mapTypeControl: false
    };

    const map = new google.maps.Map(this.mapRef.nativeElement, options);
    this.addMarker(location, map);
  }

  addMarker(position, map) {
    return new google.maps.Marker({
      position, map
    });
  }

}
