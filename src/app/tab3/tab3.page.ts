import { Component } from '@angular/core';
import { Collections } from '../collections'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  gamesList =  Collections.gamesList;
  isAddingNewGame = false;
  newValue = "";

  constructor() {}

  onEnableAdd(){
    this.isAddingNewGame = true;
  }

  onAddNew(){
    this.isAddingNewGame = false;
    if(this.newValue !== null && this.newValue !== '') {
      this.gamesList.push(this.newValue);
    }
    this.newValue = "";
  }

}
