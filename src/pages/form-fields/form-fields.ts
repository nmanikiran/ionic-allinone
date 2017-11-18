import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormFieldsPage');
  }

  onSubmit(){
    console.log(this.formData);

  }

}
