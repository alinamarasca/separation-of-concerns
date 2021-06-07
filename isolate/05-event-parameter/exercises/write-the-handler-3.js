'use strict';

// https://www.w3schools.com/jsref/prop_checkbox_checked.asp
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input/checkbox
// https://stackoverflow.com/a/8206578



const inputEl = document.createElement('input');
inputEl.type = 'checkbox';
// console.log('initial input:', inputEl.cloneNode(true));


// console.log(Boolean('input'))
// console.log(inputEl.checked); <-- need to change
const toggleCheckedHandler = (event) => {
// if (inputEl.checked == true){ //sravnenie
//   inputEl.checked = false // ravno
//  } else {
//    inputEl.checked = true;
//  }
inputEl.checked = !inputEl.checked
};
console.log(inputEl.checked)
inputEl.addEventListener('click', toggleCheckedHandler);


// "click" the button once
const clickEvent1 = new Event('click');
inputEl.dispatchEvent(clickEvent1);
console.log('after 1st click:', inputEl.cloneNode(true));
console.assert(inputEl.checked === true, 'Test 1: after first click');

console.log(inputEl.checked) //<---log after 1st click

// "click" the button again
const clickEvent2 = new Event('click');
inputEl.dispatchEvent(clickEvent2);
console.log('after 2nd click:', inputEl.cloneNode(true));
console.assert(inputEl.checked === false, 'Test 2: after second click');

console.log(inputEl.checked) 

const clickEvent3 = new Event('click');
inputEl.dispatchEvent(clickEvent2);
console.log('after 3nd click:', inputEl.cloneNode(true));
console.assert(inputEl.checked === true, 'Test 3: after 3rd click');
console.log(inputEl.checked) 