const restaurant ={
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23,Firenze, Italy',
    categories: ['Italian','Pizzeria','Vegetarian','Organic'],
    starterMenu: ['Focaccia','Bruschetta','Garlic Bread','Caprese Salad'],
    mainMenu: ['Pizza','Pasta','Risotto'],
    openingHours: {
        thu:{
            open:12,
            close:22,
        },
        fri:{
            open:11,
            close:23,
        },
        sat:{
            open:0,
            close:24,
        },
    },
    order: function(starterIndex, mainIndex){
        return[this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery: function(starterIndex, mainIndex, time, address) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivery to ${address} at ${time}`);
    },
    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    },
    orderPizza:function(mainIngredient,...otherIngredients){
console.log(mainIngredient);
console.log(otherIngredients);

    }
};
const rest1 = {
    name : 'Capri',
    numGuests :0,
};
const rest2 = {
    name : 'La Piazza',
    owner : 'Giovanni Rossi',
};
// rest1.numGuests = rest1.numGuests ||10;
// rest2.numGuests = rest2.numGuests ||10;
// rest1.numGuests ||=10;
// rest2.numGuests ||=10;
rest1.numGuests ??=10;
rest2.numGuests ??=10;

// rest1.owner = rest1.owner && '<hi>';
// rest2.owner = rest2.owner && '<hi>';
rest1.owner ??=  '<hi>';
rest2.owner ??=  '<hi>';
console.log(rest1);
console.log(rest2);