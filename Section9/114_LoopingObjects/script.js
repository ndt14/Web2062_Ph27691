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
        console.log(`Order received! ${this.starterMenu[starterIndex]} and {this.mainMenu[mainIndex]} will be delivery to ${address} at ${time}`);
    },
    orderPasta(ing1, ing2, ing3) {
        console.log(`Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    },
    orderPizza(mainIngredient,...otherIngredients){
console.log(mainIngredient);
console.log(otherIngredients);

    }
};
const properties = Object.keys(openingHours);
console.log(properties);
let openStr=`We are open on ${properties.lenghth}day`;
for (const day of properties){
   openStr += `${day},`;
}
console.log(openStr);

// Property Values
const values = Object.values(openingHours);
console.log(values);

// entire object
const entire = Object.entries(openingHours);
//console.log(entire);
// [key, values]
for(const [key, {open , close}]of entire){
    console.log(`On ${key} we open at ${open} and close at ${close}`);
}