import { Component } from '@angular/core';
import { ViewController, IonicPage } from 'ionic-angular';

declare var google: any;

@IonicPage()
@Component({
    selector: 'add-event',
    templateUrl: './addEvent.html'
})

export class AddEventPage {

    event = {
        title: '', location: '', notes: '',
        endTime: new Date().toISOString(),
        startTime: new Date().toISOString(), allDay: false
    };
    geocoder: any;
    places: Array<any>;

    constructor(public viewCtrl: ViewController) {
        this.places = [];
        this.event.location = '';
        this.geocoder = new google.maps.Geocoder();
    }

    seletedDestination(i) {
        this.places = [];
        this.event.location = i.formatted_address;
    }

    getPlaces(event) {
        this.places = [];
        this.geocoder.geocode({ address: this.event.location }, (destinations, status) => {
            if (status === google.maps.GeocoderStatus.OK) {
                this.places = destinations.slice(0, 4);
            }
        })
    }

    dismiss() {
        this.viewCtrl.dismiss(null);
    }

    onSubmit() {
        this.viewCtrl.dismiss(this.event);
    }
}