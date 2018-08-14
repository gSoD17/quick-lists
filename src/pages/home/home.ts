import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, Platform} from 'ionic-angular';

import { ChecklistModel } from '../../models/checklist-model';
import { DataProvider } from '../../providers/data/data';
import { Keyboard } from '@ionic-native/keyboard'

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  checklists: ChecklistModel[] = [];

  constructor(public navCtrl: NavController, public dataService: DataProvider, public alertCtrl: AlertController, public platform: Platform, keyboard: Keyboard) {

  }

  ionViewDidLoad() {

  }

  addChecklist(): void {

  }

  renameChecklist(checklist): void {

  }

  viewChecklist(checklist): void {

  }

  removeChecklist(checklist): void {

  }

  save(): void {
    
  }

}
