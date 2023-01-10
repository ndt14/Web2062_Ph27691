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
const odersSet = new Set([
    'Pasta',
    'Pizza',
    'Pizza',
    'Risotto',
    'Pizza',
'Pasta',
]);
console.log(odersSet);
console.log(new Set('Jonas'));
console.log(odersSet.has('Pizza'));
console.log(odersSet.has('Bread'));
odersSet.add('Garlic Bread');
odersSet.add('Garlic Bread');
// odersSet.delete('Risotto');
console.log(odersSet);
for( const oder of odersSet) console.log(oder);
const staff = ['Waiter','Chef','Waiter','Manager','Chef','Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
    new Set(['Waiter','Chef','Waiter','Manager','Chef','Waiter']).size
);
console.log(new Set('nguyenducthinh').size);