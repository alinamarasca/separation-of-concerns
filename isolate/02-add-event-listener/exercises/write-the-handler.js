'use strict';

// fill in the _s

const buttonEl = document.createElement('button');
buttonEl.innerHTML = 'are you honest?';
console.log(buttonEl.nodeName, buttonEl.cloneNode(true));


const truthTestHandler = () => {
  const honest = confirm('are you honest?')
 if(honest == true){
   console.log('thank you')
    }else{
   console.log('that\'s ok too')
 }

};

buttonEl.addEventListener('click', truthTestHandler);


// "click" the button once
const clickEvent1 = new Event('click');
buttonEl.dispatchEvent(clickEvent1);

// // "click" the button again
// const clickEvent2 = new Event('click');
// buttonEl.dispatchEvent(clickEvent2);
