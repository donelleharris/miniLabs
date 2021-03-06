"use strict";

console.log("hello from conditionals lec.js!");

// // ================ REAL WORLD SCENARIO ================
// // If a user is an admin,show a specific navbar
// // If weather is rainy, show rain icon
// // If number of lives is 0, game is over
//
// // ================ IF STATEMENT SYNTAX ================
//
// // if(condition){
// // code here runs if condition evaluates to true
// // }
//
// // ================ IF STATEMENT EXAMPLES ================
// //TODO Together: Show a specific navbar if user is admin
// var isAdmin = false
// if(isAdmin === true) {
//     //show nav bar
// }
// //TODO Together: Send a 20% off coupon if its users birthday
// var birthday = true;
// if(birthday) {
//     //send coupon
// }
// //TODO Together: Write an if statement that alerts "It's raining" if isRainy is true
// var isRainy = true;
// if(isRainy) {
//     alert("It's raining");
// }
// //TODO Together: Write an if statement that alerts the user whether or not they have enough money to buy a new item.
// // Assume there are no hidden fees or taxes.
// var itemCost = 300;
// var currentBalance = 200;
//
// if(itemCost <= currentBalance) {
//     alert("You have enough money.");
// } else {alert("You do not have enough money.")}
//
//
// //TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0
// var numberOfLives = 10;
// if(numberOfLives === 0){
//     alert("Sorry, game over")
// }
//
// //TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing"
// var weather = "snowing"
// if(weather === "snowing"){
//     alert("It's snowing!")
// }
//
// //TODO: Write an if statement that alerts true if numberInput is greater than but not equal to 10
// var numberInput = 5;
// if(numberInput > 10){
//     alert("true")
// }
//
// //TODO: EXTRA BONUS - Refactor each of the previous statements as functions.
//
// // =============== IF / ELSE SYNTAX ================
//
// if(condition){
//     // code here runs if condition evaluates to true
// } else {
//     // code here runs if condition evaluates to false
// }
//
// // =============== IF / ELSE STATEMENT EXAMPLES ================
// //TODO Together: Show a specific navbar if user is admin, else show a different navbar
// var isAdmin = false;
// if(isAdmin){
//     alert("showing admin bar")
//     } else {
//         alert("showing non-admin navbar")
//     }
//
// //TODO Together: Write an if statement that alerts "It's raining" if isRainy is true, else return "have a nice day!"
// var isRainy = true;
// if(isRainy){
//     alert("It's raining");
//     } else {
//         alert("Have a nice day!");
//     }
//
// //TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0, else alert "Next Level!"
//
// var numberOfLives = 5;
// if(numberOfLives <= 0){
//     alert("Sorry, game over");
//     } else {
//         alert("Next Level");
//     }
//
// //TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing", else alert
// // "Check back later for more details!"
// var weather = "snowing";
//
// if(weather === "snowing"){
//         alert("It's snowing");
//     } else {
//         alert("Check back later for more details!");
//     }
//
// //TODO: Write an if statement that alerts true if numberInput is greater than 10, else alert "the number is less
// // than 10"
// var numberInput = 11;
// if(numberInput > 10){
//     alert("true")
//     } else {
//         alert("number is less than 10")
//     }
//
// //TODO: Refactor todo#1 as a function named checkIfGameIsOver, that accepts numberOfLives and returns
// // "Sorry, game over" if numberOfLives is 0, else return "Next Level!.
// var numberOfLives = 5;
// function gameOver(numberOfLives) {
//     if (numberOfLives === 0) {
//         alert("Sorry, game over");
//     } else {
//         alert("Next Level");
//     }
// }
// gameOver(numberOfLives);
//
// //TODO: Write a confirm asking the user if they are 13 years of age or older. If they are, alert "You may proceed",
// // if they are not, alert "Sorry, you are not able to proceed"
//
// var user = confirm("Are you 13 years or older?");
// if(user){
//     alert("You may proceed.");
//     } else {
//         alert("Sorry, you are not able to proceed");
//     }
//
// // ================ IF / ELSE IF / ELSE STATEMENT SYNTAX ===============
// // if(condition1){
// //     // code here runs if condition evaluates to true
// // }else if (condition2){
// //     // code here runs if condition1 is false *and* condition2 evaluates to true
// // }else {
// //     // code here gets executed if condition1 nor condition2 evaluate to true
// // }
//
//
// // =============== IF / ELSE IF/ELSE STATEMENT EXAMPLES ================
// //TODO Together: Write an if/else if/else statement that alerts "It's snowing!" if weather is equal to "snowing",
// // alerts "It's raining" if weather is equal to "raining", alerts "have a nice day" for all other cases
// var weather = "snowing";
//
// if(weather === "snowing"){
//     alert("It's snowing");
//     } else if(weather === "raining"){
//     alert("It's raining");
//     }
//     else {
//         alert("Check back later for more details!");
//     }
//
// //TODO Together: refactor the above statement as a function
// function whatsTheWeather(weather){
//    if(weather === "snowing"){
//         alert("It's snowing");
//         } else if(weather === "raining"){
//             alert("It's raining");
//         }
//         else {
//             alert("Check back later for more details!");
//         }
// }
//
// // whatsTheWeather(weather);
//
// //TODO: Write a function that accepts a string that is a traffic light color as an input. When this function is called,
// // it should return a message informing the user what to do when approaching that color light at an intersection.
//
// function trafficLight(lightColor){
//         if(lightColor === "red"){
//             alert("Light is red. Stop at intersection.")
//         } else if (lightColor === "yellow"){
//             alert("Light is yellow. Be prepared to stop.")
//         } else {
//             alert("Light is green. Proceed with caution.")
//         }
// }
//
// // trafficLight("yellow");
//
//
// // ================ NESTED STATEMENTS ===============
// //TODO Together: If user is under 15, they are not eligible for a learners permit, else they are. If they are eligible,
// // check age. If they are 15 they are eligible for a learners permit, if they are 16 or older and have a permit,
// // they are eligible for license, if they are 16 or older and do not have a permit, they are not eligble for a license.
// function validateEligibility() {
//     var age = prompt("please enter your age in years");
//
//     if (age < 15) {
//         alert("you are not eligible for a learner's permit")
//     } else {
//         var hasPermit = confirm("do you currently have a permit?")
//         if (age === 15) {
//             alert("you are eligible for a learner's permit")
//         } else if (age >= 16 && hasPermit === true) {
//             alert("you are eligible for a license")
//         } else if (age >= 16 && hasPermit === false) {
//             alert("you are not eligible for a license")
//         }
//     }
// }
// // validateEligibility();
// // ================ TERNARY STATEMENT ================
// //TODO Together: Regular way - rewrite as ternary
//
//
// var message;
// var success = true;
// //
// // if (success) {
// //     message = "Operation was successful.";
// // } else {
// //     message = "Oops, something went wrong.";
// // }
// // console.log(message);
//
//
// //WRITE YOUR TERNARY STATEMENT HERE!
//
// (success) ? message = "Operation was successful." : message = "Oops, something went wrong.";
// console.log(message);
//
//
// //TODO: Refactor the following conditional as a ternary
//
//
// var weather = "sunny";
// var weatherMessage;
//
//
// if(weather === "rainy"){
//    weatherMessage = "It's raining!";
// } else {
//     weatherMessage = "Have a nice day!";
// }
// console.log(weatherMessage);


//WRITE YOUR TERNARY STATEMENT HERE!

// (weatherMessage) = (weather === "rainy") ? "it's raining" : "have a nice day";
// console.log(weatherMessage);
// var numberOfLives = 0;
// function checkIfGameIsOver(numberOfLives){
//     alert(numberOfLives === 0) ? "Sorry, game over." : "Next Level."
// }
// checkIfGameIsOver(numberOfLives);
// =============== SWITCH STATEMENT ================
//TODO Together:


// var pizzaPreference = prompt("What kind of pizza do you like?");
// console.log("User pizza input: " + pizzaPreference);

// if (pizzaPreference === "pineapple and hot sauce") {
//     alert("What a coincidence, that's my favorite!");
// } else if (pizzaPreference === "cheese") {
//     alert("Just plain cheese? Okay...");
// } else if (pizzaPreference === "ham") {
//     alert("Ham is easy to spell and awesome!");
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }
// switch (pizzaPreference) {
//     case "pineapple and hot sauce":
//         alert("What a coincidence, that's my favorite!");
//         break;
//     case "cheese":
//         alert("Just plain cheese? Okay...");
//         break;
//     case "ham":
//         alert("Ham is easy to spell and awesome!");
//         break;
//     default:
//         alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }

//TODO: Write a switch statement that evaluates weather as the condition. Check for "rainy", "sunny", "snow", and a default case.
var weather = ['rainy', 'sunny', 'snowy', "hotter than hell"];
var randomWeather = weather[Math.floor(Math.random() * weather.length)];


switch (randomWeather) {
    case "rainy":
        alert("It's raining!")
        break;
    case "sunny":
        alert("It's a beautiful sunny day!")
        break;
    case "snowy":
        alert("It's snowing!")
        break;
    default:
        alert( "It's " + randomWeather + " outside. Have a nice day!")
}

//TODO: Rewrite the intersection function from earlier as a switch statement.

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'yellow', 'green', 'flashing'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

switch (randomColor){
    case "red":
        alert("Light is red. Stop at intersection.")
        break;
    case "yellow":
        alert("Light is yellow. Be prepared to stop.")
        break;
    case "green":
        alert("Light is green. Proceed with caution.")
        break;
    default:
        alert("Light is flashing, please come to a complete stop and then proceed with caution.")
}

// ================ REVERSE ENGINEERING =================
// Visit each of these links; outline the steps required to achieve each of these demonstrations. You can write code or just write the logic steps that would achieve each output


// 1) https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html


// 2) https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html


// 3) https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html
