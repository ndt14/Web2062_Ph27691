const game = {
    team1: 'Bayern Munich',
    team2: "Borrussia Dortmund",
    players:[
    [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
    ],
    [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
    ],
],
socre: '4:0',
scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
date: 'Nov 9th,2017',
odds:{
    team1:1.33,
    x: 3.25,
    team2: 6.5,
},
};
//caau1 
const [players1, players2] = game.players;
console.log(players1);
console.log(players2);
//cau2
const [gk, ...fieldPlayers] = players1;
console.log(gk,fieldPlayers);
//cau3
const allPlayers=[...players1, ...players2];
console.log(allPlayers);
// cau4
const players1Final =[...players1, 'Thiago','Coutinho','Perisic'];
console.log(players1Final);
// câu5
const {odds: {team1, x:draw , team2}} =game;
console.log(team1,draw,team2);
// cau6
const printGoals = function(...players){
    console.log(players);
    console.log(`${players.length} goals were scored`);
}
// printGoals('Davies','Muller','Lewandowski','Kimmich');
// printGoals('Davies','Muller');
printGoals(...game.scored);
//7
team1>team2 && console.log('team2 is more likely to win');
team1<team2 && console.log('team1 is more likely to win');
