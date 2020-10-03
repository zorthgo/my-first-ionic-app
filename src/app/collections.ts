export class Collections {
    public static foodList: string[] = ["Sushi", "Feijoada", "Chicken Soup", "Chicken & Okra"]
    public static familyList: string[] = ["Geruza C. Assis", "Jessica Snyder", "Ciro C. Assis", "Ruth Assis", "Kesia Assis", "Rayssa Serra", "Laryssa", "Roman"]
    public static rankedGameList: GameInfo[] = [
        {
            Url: "https://gamepreorders.com/wp-content/uploads/2020/04/cover-art-2.jpg",
            GameTitle: "Assasin's Creed"
        },
        {
            Url: "https://upload.wikimedia.org/wikipedia/en/1/18/Age_of_Empires_Coverart.jpg",
            GameTitle: "Age of Empires"
        },
        {
            Url: "https://assets.vg247.com/current/2018/05/red_dead_redemption_2_cover_art_1.jpg",
            GameTitle: "Red Dead Redemption"
        },
        {
            Url: "http://static4.gamespot.com/uploads/scale_medium/mig/6/8/8/7/2226887-box_halo4.png",
            GameTitle: "Halo"
        },
        {
            Url: "http://gatekeeperreviews.weebly.com/uploads/8/3/3/2/83325628/517909140.jpg",
            GameTitle: "Doom"
        }
    ];
}

export class GameInfo {
    Url : string;
    GameTitle: string;
}