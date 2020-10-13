import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Collections } from '../collections'

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.page.html',
  styleUrls: ['./exercises.page.scss'],
})
export class ExercisesPage implements OnInit {

  public workoutData = Collections.workoutData;
  
  public id: number = 1;

  public list: List[] = [
    {
      "Name": "Test 1",
      "Number": 1
    },
    {
      "Name": "Test 2",
      "Number": 2
    },
    {
      "Name": "Test 3",
      "Number": 3
    },
    {
      "Name": "Test 4",
      "Number": 4
    },
  ]

  constructor(public route: ActivatedRoute, private router: Router) {
    this.id = this.route.snapshot.params.id;
  }

  ngOnInit() {
  }

  public onOpenItem(item: any) {
    this.router.navigate([`tabs/exercise-details/${item}`]);
  }

}

export class List {
  Name : string;
  Number: number;
}