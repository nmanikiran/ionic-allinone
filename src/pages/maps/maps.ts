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
  @ViewChild('inputToFocus') inputToFocus;
  coords = { latitude: 17.3850, longitude: 78.4867 };
  mapType: string;

  geocoder: any;
  places: Array<any>;
  location: string;

  constructor(public navCtrl: NavController, private geolocation: Geolocation) {
    this.onLocateMe();
    this.places = [];
    this.location = '';
    this.mapType = 'title';
    this.geocoder = new google.maps.Geocoder();
  }

  ionViewDidLoad() {
    this.showMap();
  }

  onLocateMe() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.coords = resp.coords;
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      this.coords = data.coords;
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

  search() {
    this.mapType = this.mapType == 'search' ? 'title' : 'search';
    if (this.mapType === 'search') {
      setTimeout(() => {
        this.inputToFocus.setFocus();
      }, 200);
    }
  }

  searchCancel() {
    this.mapType = 'title';
  }

  seletedDestination(i) {
    this.places = [];
    this.location = i.formatted_address;
    let latitude: number = Number((i.geometry.location.lat()).toFixed(4));
    let longitude: number = Number((i.geometry.location.lng()).toFixed(4));
    this.coords = { latitude, longitude };

    this.showMap();
  }


  locationChange() {
    if (!this.location || this.location.length < 3) return;
    this.places = [];
    this.geocoder.geocode({ address: this.location }, (destinations, status) => {
      if (status === google.maps.GeocoderStatus.OK) {
        this.places = destinations.slice(0, 4);
      }
    })
  }

}
