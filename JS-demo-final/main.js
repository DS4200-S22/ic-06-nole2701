
// JS File for class demo 
// Ab Mosca 
// Last moditifed: 02.10.2022 


//########################################################################
// This is an external js file that I've added to my html 
//      it's added with the <script> tag. 
//########################################################################

//########################################################################
// Printing to the developer console 
//      How do we print values for debugging? 
//########################################################################
console.log("Hello World");  //note the semicolon to end my statement

//########################################################################
// Variables 
//      There are three ways to declare variables in JS (var, const, let)
//      Types of vaiables are string, number, boolean 
//########################################################################

// var -- DON'T USE THIS! It's depricated. 
var varVar = "Don't use var to declare variables!"; 

// const -- This is for constant (unchangeable) variables
const myCourse = "DS4200"; 
console.log(myCourse); 

// myCourse = "DS2000"; // this will cause an error in the console

// let -- This is for variables with values that can change 
let season = "Winter";
console.log(season); 

season = "Spring"; 
console.log(season); 

// Variables can be strings like those above, or numbers, or boolean 
console.log(typeof(season)); 

let favoriteNum = 6; 
console.log(favoriteNum); 
console.log(typeof(favoriteNum));

let hwDue = true; 
console.log(hwDue); 
console.log(typeof(hwDue));

// JavaScript is loosely typed, that means it will not stop you from 
//  changing variable type with an assignment
favoriteNum = "six"; 
console.log(favoriteNum);
console.log(typeof(favoriteNum)); 

//########################################################################
// Built in JS Functions  
//      Functions built into the language and from Libraries.  
//########################################################################

// console.log 
console.log("console.log is a built in function");

// typeof
let typeHwDue = typeof(hwDue);   
console.log("typeof is a built in function that returns var type. " + 
            "Ex. hwDue is a " + typeHwDue);

// Math.random 
let randNum = Math.random(); 
console.log("Math.random is a built in function that returns " + 
            "a random number. Ex. " + randNum);

// Math.round 
let roundedRandNum = Math.round(randNum); 
console.log("Math.round is a built in function that returns " + 
            "a rounded number. Ex. " + roundedRandNum);

//########################################################################
// User defined JS Functions  
//      Functions you (the coder) define   
//########################################################################

// We define function with the key word function, name of the function
// parameters, and a body. 
// The function does not have to take parameters. 
function printBiggerRand() {
    let myRand = Math.random()*100; 
    console.log(myRand); 
}

// Note that the scope of myRand is only within printRoundedRand()
// In other words, this will cause an error. 
// console.log(myRand); 

// Call or invoke a user defined function with its name and parameters
printBiggerRand(); 

// Functions usually return something
function returnBiggerRand() {
    let myRand = Math.random()*100; 
    return myRand; 
}

let myBiggerRand = returnBiggerRand(); 
console.log(myBiggerRand); 

// Function with parameters
function namePlusFaveoriteNum(name, num) {
    let nameAndNum = name + "'s favorite number is " + num + "."; 
    return nameAndNum; 
}

// Note the parameters 
let nameNumSentence = namePlusFaveoriteNum("Prof. Mosca", favoriteNum);
console.log(nameNumSentence); 

//########################################################################
// Anonymous JS Functions  
//      We can also use functions we define but do not name
//      Because they do not have a name, we call them anonymous 
//      This will become more important when we start using D3  
//########################################################################

// Note the syntax -- the () at the end automatically invokes the function
(function() {
    console.log("My anonymous function was automatically invoked!"); 
})(); 

// We can also write these functions with => notation 
let funcX = (x) => console.log(x);
funcX("Hi"); 

// We will come back to anonymous function when we start D3

//########################################################################
// Interactivity with JS
//      We use JS to make our webpages interactive.
//      To do this we use functions that respond to "events" or things
//      we expect from the user like clicks, hovers, drags, etc.  
//########################################################################

// Update the text in button-div when the button is clicked 

// First, let's define a function 
function buttonClicked() {
    let newText = "Button was clicked!"; 
    // we need to select the button-div (using its id) 
    let buttonDiv = document.getElementById("button-div"); 
    // then we buttonDiv's content
    buttonDiv.innerHTML = newText; 
}

// Next, we need to update our html so this function is called 
// when the button is clicked 

//########################################################################
// Big hint for your next homework
//      You will want to look into how to add Event Listeners to svg's
//      This will involve document.getElementById, and then using the 
//      function .addEventListener(event, func)
//########################################################################

// Resources: 
// https://developer.mozilla.org/en-US/docs/Web/API/EventListener
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener




























