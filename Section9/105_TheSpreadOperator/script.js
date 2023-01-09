const restaurant ={
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23,Firenze, Italy',
    categories: ['Italian','Pizzeria','Vegetarian','Organic'],
    starterMenu: ['Focaccia','Bruschetta','Garlic Bread','Caprese Salad'],
    mainMenu: ['Pizza','Pasta','Risotto'],
    order: function(starterIndex, mainIndex){
        return[this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
};
const arr =[7,8,9];
const badNewArr = [1,2,arr[0],arr[1],arr[2]];
console.log(badNewArr);
const newArr = [1,2,...arr];
console.log(newArr);

console.log(...newArr);
console.log(1,2,3,7,8,9);

const newMenu = [...restaurant.mainMenu,'Gnocci'];
console.log(newMenu); 

// copy array
const mainMenuCopy = [...restaurant.mainMenu];
// join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets.not objects
const str = 'Jonas';
const letters = [...str,' ','S.'];
console.log(letters);
console.log(...str);
//console.log('${...str} Schmedtmann');
const newRestaurant = {foundedIn: 1998,...restaurant, founder:'gusieppe'};
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);