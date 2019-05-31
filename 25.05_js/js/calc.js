"use strict";

// const buttonPlus = document.getElementById('buttonPlus');
// const buttonMinus = document.getElementById('buttonMinus');
// const buttonMultiplay = document.getElementById('buttonMultiplay');
// const buttonDevide = document.getElementById('buttonDevide');

// let arrayOfButtons = [buttonPlus,buttonMinus,buttonDevide,buttonMultiplay];

let arrayOfButtons = document.getElementsByClassName('peration-button');

function makeOperation(operationCode) {

  let number1 = Number((document.getElementById('number1')).value);
  let number2 = Number((document.getElementById('number2')).value); 

  let result;
  if(operationCode === '+'){
  result = number1 + number2;
  }  
  else if(operationCode=== '-'){
    result = number1 - number2;
  }
  else if(operationCode=== '*'){
    result = number1 * number2;
  } 
  else if(operationCode=== '/'){
    result = number1 / number2;
  }
 
  window.alert(result);
}

function onOperationButtonClick(eventObject){

  let clickElement = eventObject.currentTarget;
  let operation = clickElement.innerHTML;

  makeOperation(operation)  
};


for (let i = 0; i < arrayOfButtons.length; i++) {
  arrayOfButtons[i].addEventListener('click',onOperationButtonClick);
  (i);
  }