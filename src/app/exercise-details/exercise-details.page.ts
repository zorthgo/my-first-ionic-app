import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Collections, WorkoutData } from '../collections';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-exercise-details',
  templateUrl: './exercise-details.page.html',
  styleUrls: ['./exercise-details.page.scss'],
})
export class ExerciseDetailsPage implements OnInit {

  public workoutData: WorkoutData; //= Collections.workoutData;
  public id: number = 1;

  constructor(public route: ActivatedRoute, private router: Router, private sanitizer: DomSanitizer) {
    this.id = this.route.snapshot.params.id;
    this.workoutData = Collections.workoutData.filter(x => x.Id == this.id)[0];
  }

  ngOnInit() {
  }

  public onBackClick(item: any) {
    this.router.navigate([`tabs/exercises/${item}`]);
  }

  public sanatizeUrl(url: any){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
