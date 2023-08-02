// var student={
//     id: 1603113,
//     name: 'Mashuk Tamim',
//     dept: 'CSE',
//     varsity: 'RUET'
// }

// var mobile={
//     model: 'Pocophone f1',
//     company: 'Xiaomi',
//     releaseYear: 2018
// }

// var computer={
//     model: 'elitebook 840 G3',
//     company: 'HP',
//     processor: 'core i5 gen 6',
//     ram: '8GB'
// }
// //altering the value in a object
// computer.ram='16GB';

// console.log(computer.ram);
// console.log(mobile.company);
// console.log(student.id);

var shoppingCart={
    laptopStand: 2000,
    keyboard: 5400,
    mouse: 1000,
    watch: 1500,
    mousePad: 300,
    keyboardProtector: 50
}
//here, shoppingCart is the object name. laptopStand, keyboard, mouse etc are keys or properties. 2000, 5400, 1000 etc the key values.
// console.log(shoppingCart);

var sum=shoppingCart.keyboard + shoppingCart.laptopStand + shoppingCart.watch;
// console.log(sum);
var keyboardPrice=shoppingCart.keyboard;
// console.log(keyboardPrice);
var mousePrice=shoppingCart['mouse'];
// console.log(mousePrice);

var objectProperties = Object.keys(shoppingCart); //this will return the properties or keys of an object as an ARRAY of strings
// console.log(objectProperties);

var objectValues = Object.values(shoppingCart); //this will return the values of the keys of an object as an ARRAY
// console.log(objectValues);

var propertyName='keyboard';
var propertyValue=shoppingCart[propertyName];
// console.log(propertyName,'price:', propertyValue);

//set property values
shoppingCart.mouse=900;
console.log(shoppingCart);

shoppingCart['mouse']=800;
console.log(shoppingCart);

var mousePrice2='mouse';
shoppingCart[mousePrice2]=1000;
console.log(shoppingCart);

for(var i=0, i<obje)