import * as data from './rankedGameCollection.json';
import * as workoutData from './workoutData.json';

export class Collections {
    public static foodList: string[] = ["Sushi", "Feijoada", "Chicken Soup", "Chicken & Okra"]
    public static familyList: string[] = ["Geruza C. Assis", "Jessica Snyder", "Ciro C. Assis", "Ruth Assis", "Kesia Assis", "Rayssa Serra", "Laryssa", "Roman"]
    public static rankedGameList: GameInfo[] = (data as any).default;
    public static workoutData: WorkoutData[] = (workoutData as any).default;
}

export class GameInfo {
    Url : string;
    GameTitle: string;
}

export class WorkoutData {
    Id: number;
    Title : string;
    BodyPartImagePath : string;
    Description : string;
    YouTubeVideoUrl : string;
    WorkoutSetps : string[];
}

export class LoggedWorkout {
    ExerciseId : number;
    Title : string;
    WorkoutDate : Date;
}