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
        console.log('Order received! ${this.starterMenu[starterIndex]} and {this.mainMenu[mainIndex]} will be delivery to ${address} at ${time}');
    },
    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    },
    orderPizza:function(mainIngredient,...otherIngredients){
console.log(mainIngredient);
console.log(otherIngredients);

    }
};
const arr = [1, 2, ...[3, 4]];
const [a,b , ...others] = [1,2,3,4,5];
console.log(a,b, others);
const [Pizza, ,Risotto,...otherFood]=[...restaurant.mainMenu,...restaurant.starterMenu] ;
console.log(Pizza,Risotto,otherFood);
//ojects
const {sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays);
// function
const add = function (...numbers) {
    // console.log(numbers);
    let sum =0;
    for (let i = 0; i < numbers.length; i++) 
        sum+= numbers[i];
       console.log(sum);
        
    
};
add(2,3);
add(5,3,7,2);
add(8,2,5,3,2,1,4);
const x = [23, 5, 7];
add(...x);
restaurant.orderPizza('mushrooms','onion','olives','spinach');
restaurant.orderPizza('mushrooms');
