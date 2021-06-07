'use strict';

const divEl = document.createElement('ul');
divEl.innerHTML = `
  <p></p>
  <section></section>
  <h1></h1>
`;
console.log(divEl.nodeName + ' (before)', divEl.cloneNode(true));

// --- write some code ---
//  replace the <p>
const nav = document.createElement('nav');
// console.log(nav);
const p = divEl.children[0];
// console.log(p)
divEl.replaceChild(nav, p);

//  insert something before the <section>

const h2 =  document.createElement('h2');
const section = divEl.children[1];
divEl.insertBefore(h2, section)
//  remove the <h1>

const newSection = divEl.children[3];
divEl.removeChild(newSection);

//  append something to the end
const newP = document.createElement('p');
divEl.appendChild(newP)
// --- --- --- --- --- ---

console.log(divEl.nodeName + ' (after)', divEl.cloneNode(true));

console.assert(divEl.childElementCount === 4,
  'Test: .childElementCount');

console.assert(divEl.children[0].nodeName === 'NAV',
  'Test: 1st child');
console.assert(divEl.children[1].nodeName === 'H2',
  'Test: 2nd child');
console.assert(divEl.children[2].nodeName === 'SECTION',
  'Test: 3rd child');
console.assert(divEl.children[3].nodeName === 'P',
  'Test: 4th child');
