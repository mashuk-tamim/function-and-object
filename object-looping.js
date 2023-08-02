var shoppingCart={
    laptopStand: 2000,
    keyboard: 5400,
    mouse: 1000,
    watch: 1500,
    mousePad: 300,
    keyboardProtector: 50
}

const objectNames= Object.keys(shoppingCart);
// console.log(objectNames);

const objectValues= Object.values(shoppingCart);
// console.log(objectValues);

// for(var i=0; i<objectNames.length; i++){
//     console.log(objectNames[i]);
// }
// for(var i=0; i<objectNames.length; i++){
//     console.log(objectValues[i]);
// }

// for(var i=0; i<objectNames.length; i++){
//     console.log(objectNames[i],'price :', objectValues[i]);
// }

for(var i=0; i<objectNames.length; i++){
    var propertyName=objectNames[i];
    // console.log(propertyName);
    const propertyValue=shoppingCart[propertyName];
    // console.log(propertyValue);
    // console.log(propertyName, propertyValue);
}

//'for in' loop
for(propertyName in shoppingCart){
    const propertyValue=shoppingCart[propertyName];
    console.log(propertyName, propertyValue);
}


