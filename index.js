const element = document.getElementById('myElement');

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark **2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);



// Switch Case Condition
const day = 'monday';

switch(day) {
    case 'monday':
        console.log('plan to learn coding');
        console.log('plan for coding meetup');
        break;

        case 'tuesday':
            console.log('going to gym');
            break;

        case 'wednesday':
            console.log('preparation for exams');
            console.log('do homework at home');
            break;

        case 'thursday':
            console.log('go outing with friends');
            break;

            case 'friday':
            case 'saturday':
                console.log('ready to complete coding challenge');
                break;
                   
                default: 
                 console.log('not a valid day'); 

}
// if else condition//
const day1 = 'wednesday';
const day2 = 'thursday';
if(day1 === 'wednesday') {
    console.log('Preparation for Exams');
} else {
    console.log('Not A Valid Day');
}
if(day2 === 'thursday') {
    console.log('Coding Challenge');
} else {
    console.log('Not A Valid Day');
}

// elseif condition// with logical operator: OR

if(day === 'monday') {
        console.log('plan to learn coding'); 
        console.log('plan for coding meetup');
} else if(day === 'tuesday') {
        console.log('going to gym');
} else if(day === 'wednesday' || day === 'thursday') {
        console.log('preparation for exams');
        console.log('do homework at home');
} else if(day === 'thursday') {
        console.log('go outing with friends');
} else if(day === 'friday' || day === 'saturday') {
        console.log('ready to complete coding challenge');
} else if(day === 'sunday') {
        console.log('not a valid day');
}


//Ternary Operators

const age = 22;

const drink = age >= 18? 'drink wine' : 'drink water';
console.log(drink);

console.log(`you can drink ${age >= 18 ? 'wine' : 'water'}`);

//coding challenge

const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 :
bill * 0.2;
console.log(`The bill was ${bill} the tip was ${tip} 
    and the total value ${bill + tip}`);

    //TOTAL VALUE WILL BE CHANGE IF THE BILL VALUE WILL BE CHANGED....

    