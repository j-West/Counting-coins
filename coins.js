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

//Add event listener to calculateButton to listen for clicks.
calculateButton.addEventListener('click', function() {
  // Resetting the resultsDiv to erase the inner elements for multiple cases
  resultDiv.innerHTML = "";
  // Resetting the coinPurse objects values to 0 for multiplpe cases
  for(var value in coinPurse) {
    coinPurse[value] = 0;
  }

  // Variable to hold the user's input from the text input in index.html.  Multiplyed by 100 to work with integers
  var amountToCalc = (userInput.value * 100);
  
  // If amountToCalc is greater than or equal to 25
  if (amountToCalc >= 25) {
    // Set coinPurse.quarters to the result of amountToCalc / 25.  Rounded down which will give the amount of quarters       
    coinPurse.quarters = Math.floor(amountToCalc / 25);
    // Multiple the amount of coinPurse.quarters by 25 to get the amount to be 
    // subtracted from amountToCalc.. (3 quarters * 25 = 75 cents)
    amountToCalc -= (coinPurse.quarters * 25);

    // If amountToCalc is greater than or equal to 10
  } if (amountToCalc >= 10) {
      // Set coinPurse.quarters to the result of amountToCalc / 10.  Rounded down which will give the amount of quarters       
      coinPurse.dimes = Math.floor(amountToCalc / 10);
      // Multiple the amount of coinPurse.quarters by 10 to get the amount to be 
      // subtracted from amountToCalc.. (3 dimes * 10 = 30 cents)
      amountToCalc -= (coinPurse.dimes * 10);

      // If amountToCalc is greater than or equal to 5
    } if (amountToCalc >= 5) {
        // Set coinPurse.quarters to the result of amountToCalc / 5.  Rounded down which will give the amount of quarters       
        coinPurse.nickels = Math.floor(amountToCalc / 5);
        // Multiple the amount of coinPurse.quarters by 5 to get the amount to be 
        // subtracted from amountToCalc.. (3 nickles * 5 = 15 cents)
        amountToCalc -= (coinPurse.nickels * 5);

        // If amountToCalc is greater than or equal to 1
      } if (amountToCalc >= 1) {
          // Set coinPurse.quarters to the result of amountToCalc / 1.  Rounded down which will give the amount of quarters       
          coinPurse.pennies = Math.floor(amountToCalc / 1);
          // Multiple the amount of coinPurse.quarters by 1 to get the amount to be 
          // subtracted from amountToCalc.. (3 pennies * 1 = 3 cents)
          amountToCalc -= (coinPurse.pennies * 1);
        }





    