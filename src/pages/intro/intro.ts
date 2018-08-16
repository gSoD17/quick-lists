import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

  constructor(public navCtrl: NavController) {
  }

  gotoHome(): void {
    this.navCtrl.setRoot('HomePage')
  }

}
