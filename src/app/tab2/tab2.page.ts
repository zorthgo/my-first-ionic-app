import { Component } from '@angular/core';
import { Collections } from '../collections'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  // Contains the collection of my favorite games.
  itemList = Collections.foodList;
  // Flag that determines whether a new game is currently being added to the list.
  isAddingNewItem = false;
  // The new game value that should be added to the list.
  newValue = "";

  constructor() { }

  // Enables the Add New Game functionality.
  onEnableAdd() {
    this.isAddingNewItem = true;
  }

  // Click event for the done button that adds the new value to the collection.
  onAddNew() {
    this.isAddingNewItem = false;
    if (this.newValue !== null && this.newValue !== '') {
      this.itemList.push(this.newValue);
    }
    this.newValue = "";
  }

}
