import * as sampleLogs from './WorkoutLogHydration.json';


export class WorkoutLog {
    public workoutData: DailyWorkout[] = new Array();

    constructor() {
        let currentWorkoutLog = this.GetCurrentWorkoutLog();

        this.workoutData = (sampleLogs as any).default;

        if (currentWorkoutLog == null) {
            let newWorkout = new DailyWorkout();
            newWorkout.WorkoutDate = this.GetCurrentDateString();
            this.workoutData.push(newWorkout);
        }
    }

    public LogTodayWorkout(newWorkoutLog: Workout) {

        // Gets the workout log for today.
        let currentWorkout = this.GetCurrentWorkoutLog();

        // Ensures that we don't add multiple instance of the same exercise for the same day.
        if (currentWorkout.WorkoutLogged.filter(x => x.ExerciseId == newWorkoutLog.ExerciseId)[0] != null)
            return;
        
            // Adds the new workout to the list.
        currentWorkout.WorkoutLogged.push(newWorkoutLog);
        
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