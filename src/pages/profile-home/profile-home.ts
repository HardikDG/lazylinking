import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfileHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:"ProfileHome",
  segment:"profile-home",defaultHistory:['HomePage']
})
@Component({
  selector: 'page-profile-home',
  templateUrl: 'profile-home.html',
})
export class ProfileHomePage {

  items = [{
    'name':"Basic info",
    'page':'BasicInfo'
  },{
    'name':"Change Address",
    'page':'ChangeAddressPage'
  },{
    'name':"Change Password",
    'page':'ChangePasswordPage'
  },{
    'name':"Recent Purchases",
    'page':'RecentPurchasesPage'
  }]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileHomePage');
  }

  itemSelected(item) {
    this.navCtrl.push(`${item}`)
  }

}
