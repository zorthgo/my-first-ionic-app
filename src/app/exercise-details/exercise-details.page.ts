import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Collections, WorkoutData } from '../collections';
import { DomSanitizer } from '@angular/platform-browser';
import { NativeStorage } from '@ionic-native/native-storage';
import { WorkoutLog, Workout } from '../WorkoutLog';

@Component({
  selector: 'app-exercise-details',
  templateUrl: './exercise-details.page.html',
  styleUrls: ['./exercise-details.page.scss'],
})
export class ExerciseDetailsPage implements OnInit {

  public workoutData: WorkoutData; //= Collections.workoutData;
  public id: number = 1;

  constructor(public route: ActivatedRoute, private router: Router, private sanitizer: DomSanitizer, private workoutLog: WorkoutLog) {
    this.id = this.route.snapshot.params.id;
    this.workoutData = Collections.workoutData.filter(x => x.Id == this.id)[0];
  }

  ngOnInit() {
  }

  public onBackClick(item: any) {
    // Creates a new log for this workout.
    let newWorkoutLog = new Workout();
    newWorkoutLog.ExerciseId = this.workoutData.Id;
    newWorkoutLog.Title = this.workoutData.Title;
    newWorkoutLog.BodyPartImagePath = this.workoutData.BodyPartImagePath;

    // Logs the workout to today's log.
    this.workoutLog.LogTodayWorkout(newWorkoutLog);

    // Returns to the main excercise screen.
    this.router.navigate([`tabs/exercises/${item}`]);
  }

  public sanatizeUrl(url: any){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
