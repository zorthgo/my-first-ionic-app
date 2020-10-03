import { Component } from '@angular/core';
import { Collections } from '../collections'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

 // Contains the collection of my favorite family members.
 itemList = Collections.familyList;
 // Flag that determines whether a new item is currently being added to the list.
 isAddingNewItem = false;
 // The new item value that should be added to the list.
 newValue = "";

 constructor() { }

 // Enables the Add New item functionality.
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
