import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfileHomePage } from '../profile-home/profile-home';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  navigateUser() {
    this.navCtrl.push('ProfileHome');
  }

}
