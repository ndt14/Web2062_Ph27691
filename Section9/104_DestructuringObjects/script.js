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
};

restaurant.orderDelivery({
    time: '22:30',
    address: "Via del Sole, 21",
    mainIndex: 2,
    starterIndex: 2,
});
restaurant.orderDelivery({
    address: 'Via del Sole, 21',
    starterIndex: 1,
})
const {name , openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);
// Các giá trị mặc định
const {menu = [], starterMenu: starters = [1]} = restaurant;
console.log(menu, starters);
// Các biến đột biến
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};
({a,b} = obj);
console.log(a,b);
// Các đối tượng lồng nhau
const {fri:{open: o, close: c},} = openingHours;
console.log(o, c);