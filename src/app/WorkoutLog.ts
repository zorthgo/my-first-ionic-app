import { Storage } from '@ionic/storage';
import * as sampleLogs from './WorkoutLogHydration.json';
import { Injectable } from '@angular/core';

@Injectable()
export class WorkoutLog {
    public IsInitialized: boolean = false;
    public workoutData: DailyWorkout[] = new Array();
    private workoutStorageKey = "WorkoutLogs";

    constructor(private storage: Storage) {

        storage.get(this.workoutStorageKey).then(storedLogs => {

            console.log(`LOGS: ${storedLogs}`);

            if (storedLogs == null)
            {
                this.workoutData = (sampleLogs as any).default;
                console.log("Logged from the json file.")
            }
            else
            {
                this.workoutData = JSON.parse(storedLogs);
                console.log("Logged from the local storage.")
            }
            

            if (this.GetCurrentWorkoutLog() == null) {
                let newWorkout = new DailyWorkout();
                newWorkout.WorkoutDate = this.GetCurrentDateString();
                this.workoutData.push(newWorkout);
                console.log("Create a new today log.")
            }

            this.IsInitialized = true;
        });
    }

    public LogTodayWorkout(newWorkoutLog: Workout) {

        // Gets the workout log for today.
        let currentWorkout = this.GetCurrentWorkoutLog();

        // Ensures that we don't add multiple instance of the same exercise for the same day.
        if (currentWorkout.WorkoutLogged.filter(x => x.ExerciseId == newWorkoutLog.ExerciseId)[0] != null)
            return;

        // Adds the new workout to the list.
        currentWorkout.WorkoutLogged.push(newWorkoutLog);

        // Saves the new workout logs to the local storage.
        this.storage.set(this.workoutStorageKey, JSON.stringify(this.workoutData));

        return
    }

    private GetCurrentDateString(): string {

        // Gets the current date.
        let currentDate = new Date();

        // returns the date as a string in the [year-month-day] format.
        return `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;
    }

    // Retrieves the current workout from the array.
    private GetCurrentWorkoutLog(): DailyWorkout {
        return this.workoutData.filter(x => x.WorkoutDate == this.GetCurrentDateString())[0]
    }
}


export class DailyWorkout {
    WorkoutDate: string;
    WorkoutLogged: Workout[] = new Array();
}

export class Workout {
    ExerciseId: number;
    Title: string;
    BodyPartImagePath: string;
} 