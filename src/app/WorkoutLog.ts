import * as sampleLogs from './WorkoutLogHydration.json';


export class WorkoutLog {
    public workoutData: DailyWorkout[] = new Array();

    constructor() {
        let currentWorkoutLog = this.GetCurrentWorkoutLog();

        this.workoutData = (sampleLogs as any).default;

        if(currentWorkoutLog == null)
        {
            let newWorkout = new DailyWorkout();
            newWorkout.WorkoutDate = this.GetCurrentDateString();
            this.workoutData.push(newWorkout);
        }
    }

    public LogTodayWorkout(newWorkoutLog: Workout) {
        let currentWorkout = this.GetCurrentWorkoutLog();
        currentWorkout.WorkoutLogged.push(newWorkoutLog);
        console.log(JSON.stringify(this.workoutData));
        return
    }

    private GetCurrentDateString() : string {
        let currentDate = new Date();
        let currentDateString = `${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDay()}`;
        
        console.log(currentDateString);
        return currentDateString;
    }

    private GetCurrentWorkoutLog() : DailyWorkout {
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
    BodyPartImagePath : string;
} 