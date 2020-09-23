/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
//Done!

let votingAge = 50;

if (votingAge > 18) {
    console.log("votingAge" , true );
} else {
    console.log("votingAge", false )
}

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
//Done!

let variable1 = 15;
let variable2 = 25;
if (variable1 < 21) {
	let = variable2;
} else {
	console.log("Enter");
}

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
//Done!

let string = "1999";
console.log("String to Number", Number(string)); 

//Task d: Write a function to multiply a*b 
//Done!

let a = 5;
let b = 10;
let c = a * b;
console.log(c);

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 
//Done!

let myAge = 50;
let dogYears = myAge / 7;
console.log(dogYears);

/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
//Done!  

function dogFeeder (age, weight) {
    if (age >= 1) {
        if (weight <= 5) {
            return weight * 0.05;
        } else if (weight >= 6 && weight <= 10) {
            return weight * 0.04;
        } else if (weight >= 11 && weight <= 15) {
            return weight * 0.03;
        } else if (weight > 15) {
            return weight * 0.02;
    }
    } else if (age >= 0.1667 && age < 0.25) {
        return weight * 0.10;
    } else if (age >= 0.25 && age < 0.5833) {
        return weight * 0.05;
    } else if (age >= 0.5833 && age < 1) {
        return weight * 0.04;
    }
}
console.log(dogFeeder(1, 15));

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 
//Done!

function rpcGame (userChoice) {
    const rpc = Math.random();

if (rpc < 0.34) {
    compChoice = "Rock";
} else if (rpc < 0.67) {
    compChoice = "Paper";
} else {
    compChoice = "Scissors";
}
    if (userChoice === "Rock" && compChoice === "Scissors" || userChoice === "Paper" && compChoice === "Rock" || userChoice === "Scissors" && compChoice === "Paper") {
        return "you win!";
    } else if (userChoice === "Rock" && compChoice === "Paper" || userChoice === "Scissors" && compChoice === "Rock" || userChoice === "Paper" && compChoiceq === "Scissors"){
        return "You lose.";
    } else if (userChoice === "Rock" && compChoice === "Rock" || userChoice === "Paper" && compChoice === "Paper" || userChoice === "Scissors" && compChoice === "Scissors") {
        return "It's a tie.";
    }
}

console.log(rpcGame("Rock"));
  
/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
//Done!

var kilometers = parseInt(prompt("How many kilometers?"));
var miles = kilometers / 1.60934;
console.log(miles + " Miles");

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
//Done!

var feet = parseInt(prompt("How many feet?"));
var centimeters = feet * 30.48;
console.log(centimeters + " Centimeters");

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
//Done!

function annoyingSong (bottles) {
    for (let i = bottles; i > 0; i--) {
        console.log(`${i} bottles of soda on the wall, ${i} bottles of soda, take one down pass it around ${i - 1} bottles of soda on the wall`)
    }
}

annoyingSong(99);

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
// Done!
  
function myGrade (grade) {
    if (grade >= 90) {
        console.log("Your grade is an A!");
    } else if (grade < 90 && grade >= 80) {
        console.log("Your grade is a B!");
    } else if (grade < 80 && grade >= 70) {
        console.log("Your grade is a C.");
    } else if (grade < 70 && grade >= 60) {
        console.log("Your grade is a D.");
    } else {
        console.log("Your grade is an F.")
    }
}

myGrade(99);
  
/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method
//Done!

const vowels = ['a','e','i','o','u','A','E','I','O','U'];

function countVowels(sentence) {
  let counts = 0;
  for(let i = 0; i < vowels.length; i++) {
    if(vowels.includes(sentence[i])) {
      counts++;
    }
  }
  return console.log(counts);
}

countVowels('Hello World!');

/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object
//Done!



