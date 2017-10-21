import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google: any;

@IonicPage()
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {

  @ViewChild('map') mapRef: ElementRef
  coords = { latitude : 17.3850,longitude : 78.4867};

  constructor(public navCtrl: NavController, private geolocation: Geolocation) {
    this.onLocateMe();
  }

  ionViewDidLoad() {
    this.showMap();
  }

  onLocateMe() {
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp.coords);
      this.coords = resp.coords;
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      this.coords = data.coords;
      console.log(data.coords);
    });
  }

  showMap(): void {
    this.coords.latitude = this.coords.latitude || 17.3850
    this.coords.longitude = this.coords.longitude || 78.4867;
    const location = new google.maps.LatLng(this.coords.latitude, this.coords.longitude);

    const options = {
      center: location,
      zoom: 15,
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
