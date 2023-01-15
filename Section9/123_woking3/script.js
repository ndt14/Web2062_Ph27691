const weekeday  =['mon','tue','wed','thu','fri','sat','sun'];
const openingHours= {
    [weekeday[3]]:{
        open:12,
        close:22,
    },
    [weekeday[4]]:{
        open:11,
        close:23,
    },
    [weekeday[5]]:{
        open:0,
        close:12+12,
    },
};
const restaurant ={
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23,Firenze, Italy',
    categories: ['Italian','Pizzeria','Vegetarian','Organic'],
    starterMenu: ['Focaccia','Bruschetta','Garlic Bread','Caprese Salad'],
    mainMenu: ['Pizza','Pasta','Risotto'],
    openingHours,
   
    order(starterIndex, mainIndex){
        return[this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery(starterIndex, mainIndex, time, address) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivery to ${address} at ${time}`);
    },
    orderPasta(ing1, ing2, ing3) {
        console.log(`Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    },
    orderPizza(mainIngredient,...otherIngredients){
console.log(mainIngredient);
console.log(otherIngredients);

    }
};
console.log('a + very+nice+string' .split('+'));
console.log('Jonas schmedtmann' .split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'. split(' ');
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const captitalizeName = function(name){
    const names = name.split(' ');
    const nameUser = [];
    for(const n of names){
      //  n[0].toUpperCase() + n.slice(1)
      nameUser.push(n.replace(n[0],n[0].toUpperCase()));
    }
    console.log(nameUser.join(' '));
};
captitalizeName('Jessica ann smith davis');
captitalizeName('Jonas schmedtmann');

// padding 
const message = 'Go to gate 23'
console.log(message.padStart(25, '+').padEnd(35,'+'));
console.log('Jonas'.padStart(25, '+').padEnd(35,'+'));

const maskCreditCard = function(number){
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart(str.length, '*');
}

console.log(maskCreditCard(2421341243124));
console.log(maskCreditCard('645645654654'));

// Repeat
const message2 = 'Bad weather... All Departues Delayed...';
console.log(message2.repeat(5));

const planesInLine = function(n){
    console.log(`There are ${n} planes in line ${repeat(n)}`);
}
planesInLine(5);
planesInLine(3);
planesInLine(12);