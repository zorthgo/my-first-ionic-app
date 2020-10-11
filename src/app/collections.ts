import * as data from './rankedGameCollection.json';

export class Collections {
    public static foodList: string[] = ["Sushi", "Feijoada", "Chicken Soup", "Chicken & Okra"]
    public static familyList: string[] = ["Geruza C. Assis", "Jessica Snyder", "Ciro C. Assis", "Ruth Assis", "Kesia Assis", "Rayssa Serra", "Laryssa", "Roman"]
    public static rankedGameList: GameInfo[] = (data as any).default;
}

export class GameInfo {
    Url : string;
    GameTitle: string;
}

