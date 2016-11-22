/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/

// Add the button with an ID of "calcButton" to the variable calculateButton
var calculateButton = document.getElementById("calcButton");
// Add input with an ID of 'amountToCalc' to the variable userInput
var userInput = document.getElementById("amountToCalc");
// Add div with ID of 'results' to the variable resultsDiv
var resultDiv = document.getElementById("results");
// Initialize a JavaScript object to hold the coins
var coinPurse = {
                quarters : 0,
                dimes : 0,
                nickels : 0,
                pennies : 0
                };


