// setInterval(function(){
//   const messageInput = document.getElementById('message');
//   window.alert(messageInput.value);
// },4000);


// let helloMess = document.getElementById('message');
// helloMess.value = 'Вітаю';

// console.log(helloMess.value);
// // window.alert(helloMess.value);

// let name = document.getElementById('message2');
// name.value = 'Віталій';
// name.title = 'Введіть Ваше імя';
// // window.alert(name.value);
// name.className = 'temp';

// let inner = document.getElementById('inner');

// inner.innerHTML = '<h1>Text</h1>';

// let image = document.getElementById('image');
// image.src = 'https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png';
// image.title = 'ninja';



// function alertValue(){
//   let firstName = document.getElementById('first-name');
//   console.log(firstName.value);
//   }

// function alert2Value(){
//   let lastName= document.getElementById('last-name');
//   console.log(lastName.value);

// lastName.className = 'error-input';
//   }

//   alertValue();
//   alert2Value();

//   let citi = document.getElementById('cities');
//   citi.value = 'Геледжик';


//   let inner = document.getElementById('city');
//   inner.innerHTML = '<select id="citie"><option>Kyiv</option><option>Геледжик</option><option>Kyiv</option></select>';


//   function alertVelues() {

//   }


function firstNameLog() {
  let firstNameId = 'first-name';
  let firstNameEl = document.getElementById(firstNameId);
  console.log(firstNameEl.value);
}

firstNameLog();
firstNameLog();


function lastNameLog() {
  let lastNameId = 'last-name';
  let lastNameEl = document.getElementById(lastNameId);
  console.log(lastNameEl.value);
}

lastNameLog();

function logValue(id) {
  let el = document.getElementById(id);
  console.log(el.value);
  
};

let lastNameId = 'last-name';

// logValue(firstNameId);
logValue(lastNameId);

function addErrorClass(elementId){
  let element = document.getElementById(elementId);
  element.className = 'error-input';
}

function addErrorClassToAllInputs(){
  debugger; 
  addErrorClass('first-name');
  addErrorClass('last-name');
  addErrorClass('message3');
}
const button = document.getElementById('send-button');


// button.addEventListener('click',addErrorClassLastName);

function addErrorClassLastName(){
  addErrorClass('last-name');
}

// const buttonTwo = document.getElementById('send-button');
button.addEventListener('ondblcklick',addErrorClassToAllInputs);

document.getElementById("demo").addEventListener("dblclick", myFunction);

function myFunction() {
  document.getElementById("demo").innerHTML = "I was double-clicked!";
}


let message4El = document.getElementById('message4');
function onMessage4keyUp(){
  addErrorClass('message4')
}

message4El.addEventListener('keyup',onMessage4keyUp);