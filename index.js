 'use strict';

function logger() {
    console.log('My name is Najaf');
} 

// WHEN WE NEED TO CALL/ OR INVOKE WE JUST WRITE//

// logger();


function fruitProcessor(apples, oranges) {
    const juice =`juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(6, 3);
console.log(appleOrangeJuice);

//FUNCTION DECLARATION

function calcAge1(birthYear) {
    return 2035 - birthYear;
}
const age1 = calcAge1(2001);

//FUNCTION EXPRESSION

const calcAge2 = function(birthYear) {
    return 2035 - birthYear;
}
const age2 = calcAge2(2001);
console.log(age1, age2);

// ARROW FUNCTION 

const calcAge3 = birthYear => 2035 - birthYear;
const age3 = calcAge3(2001);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 50 - age;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1999, harry));
console.log(yearsUntilRetirement(1980, jonas));

// FUNCTION IN FUNCTION

function cutFruitPieces(fruit) {
    return fruit * 5;
}

function fruitProcessor(apples, oranges) {
    const applePiece = cutFruitPieces(apples);
    const orangePiece = cutFruitPieces(oranges);

    const juice = `juice with ${applePiece} piece of apple and ${orangePiece} pice of orange.`;
    return juice; 
}
console.log(fruitProcessor(5, 3));