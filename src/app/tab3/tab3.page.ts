import { Component } from '@angular/core';
import { Collections, GameInfo } from '../collections'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

   // Contains the collection of my favorite games.
   itemList = Collections.rankedGameList;
   // Flag that determines whether a new game is currently being added to the list.
   isAddingNewItem = false;
   // The new game value that should be added to the list.
   newUrl = null;
   newName = null;
 
   constructor() { }
 
   // Enables the Add New Game functionality.
   onEnableAdd() {
     this.isAddingNewItem = true;
   }
 
   // Click event for the done button that adds the new value to the collection.
   onAddNew() {
     this.isAddingNewItem = false;
     if (this.newName !== null && this.newName !== '' && this.newUrl !== null && this.newUrl !== '') {
       // Create a new GameInfo object.
       var newGame = new GameInfo();
       newGame.GameTitle = this.newName;
       newGame.Url = this.newUrl;
         
       
       this.itemList.push(newGame);
     }
     this.newName = "";
     this.newUrl = "";
   }
}
