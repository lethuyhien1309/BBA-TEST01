//Bai 1
//Cach 1
function createCharacters() {
    let characters = [
        { name: 'hien', level: 4, health: 1200 },
        { name: 'mai', level: 1, health: 100 },
        { name: 'hoa', level: 5, health: 1500 },
    ];

    let charactersPowerUp = [];
    characters.map(character => {
        charactersPowerUp.push({
            'name': character.name.toUpperCase(),
            'level': character.level * 2,
            'health': character.health * 3
        });
    });

    console.log("Sau khi thay doi", charactersPowerUp);


    let possibleWinners = characters.filter(character => character.health > 1000);
    console.log("Sau khi loc", possibleWinners);
}
createCharacters();
//cach 2
let charactersPowerUp = [];
let characters = [
    { name: 'hien', level: 4, health: 1200 },
    { name: 'mai', level: 1, health: 100 },
    { name: 'hoa', level: 5, health: 1500 },
];

for (let character of characters) {
    charactersPowerUp.push({
        name: character.name.toUpperCase(),
        level: character.level * 2,
        health: character.health * 3
    });
}
createCharacters();
//Bai 2

//cach so 1
function printLeaderboard() {
    let player = [
        { name: "Mario", score: 1000 },
        { name: "Luigi", score: 9000 },
        { name: "Peach", score: 850 },
        { name: "Yoshi", score: 7000 },
        { name: "hien", score: 10000 },

    ]
    player.sort((a, b) => b.score - a.score);
    console.log('Sau khi sap xep mang:', player);
    for (i = 0; i <= 2; i++) {
        let huychuong = "";
        if (i === 0) {
            console.log(huychuong = "🥇")
        }
        else if (i === 1) {
            console.log(huychuong = "🥈")
        }
        else if (i === 2) {
            console.log(huychuong = "🥉")
        };
        console.log((i + 1) + ". " + player[i].name + " - " + player[i].score + " pts");
    }

}
printLeaderboard();

//cach so 2
function printLeaderboard() {
    let player = [
        { name: "Mario", score: 1000 },
        { name: "Luigi", score: 9000 },
        { name: "Peach", score: 850 },
        { name: "Yoshi", score: 7000 },
        { name: "hien", score: 10000 },

    ]
    player.sort((a, b) => b.score - a.score);
    console.log('Sau khi sap xep mang:', player);
    console.log("🥇 " + player[0].name + " - " + player[0].score + " pts");
    console.log("🥈 " + player[1].name + " - " + player[1].score + " pts");
    console.log("🥉 " + player[2].name + " - " + player[2].score + " pts");

}
printLeaderboard();


