import { Component, OnInit } from '@angular/core';
import { WorkoutLog, DailyWorkout } from '../WorkoutLog';

@Component({
  selector: 'app-excercise-log',
  templateUrl: './excercise-log.page.html',
  styleUrls: ['./excercise-log.page.scss'],
})
export class ExcerciseLogPage implements OnInit {

  sortedWorkouLogs: DailyWorkout[];

  constructor(private workoutLog: WorkoutLog) { }

  ngOnInit() {
    
  }

  ionViewDidEnter() {
    this.sortedWorkouLogs = this.GetSortedList();
  }

  // Returns the list of workout in descending order.
  public GetSortedList(): DailyWorkout[] {

    // Create a sort function.
    let comparisonFunc = function compare(a: DailyWorkout, b: DailyWorkout) {

      const bandA = parseInt(a.WorkoutDate.split('-').join(''));
      const bandB = parseInt(b.WorkoutDate.split('-').join(''));

      let comparison = 0;
      if (bandA > bandB) {
        comparison = -1;
      } else if (bandA < bandB) {
        comparison = 1;
      }
      return comparison;
    }

    // Sort array.
    let sortedArray = this.workoutLog.workoutData.sort(comparisonFunc)

    console.log(JSON.stringify(sortedArray));

    // Return sorted array.
    return sortedArray;
  }

}
