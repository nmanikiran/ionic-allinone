import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-form-fields',
  templateUrl: 'form-fields.html',
})
export class FormFieldsPage {

  formData = {
    fName: '',
    lName: '',
    email: '',
    username: '',
    password: '',
    isProfessional: false,
    isAggred: false,
    gender: ''
  };
  type: string;
  interface: string;

  constructor(public navCtrl: NavController, private pt: Platform, public navParams: NavParams) {
    this.type = 'signin';
    this.interface = this.pt.is('ios') ? 'action-sheet' : 'popover';
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad FormFieldsPage');
  }

  onSubmit() {
    console.log(this.formData);
  }

}