'use strict';

const ulEl = document.createElement('ul');
ulEl.innerHTML = `
  <li> toad </li>
  <li>Frog</li>
  <li>salad</li>
`;
console.log(ulEl.nodeName, ulEl.cloneNode(true));

// --- write some code ---
const toady = ulEl.querySelector('li');
console.log(toady);
toady.innerHTML= 'toad';

const froggy = ulEl.querySelectorAll('li')[1];
console.log(froggy);
froggy.innerHTML= 'frog';

const salado = ulEl.querySelectorAll('li')[2];
console.log(salado);
salado.innerHTML= 'salamander';
// --- --- --- --- --- ---

console.log(ulEl.nodeName, ulEl.cloneNode(true));

const expectedInnerHTMLs = ['toad', 'frog', 'salamander'];
for (let i = 0; i < expectedInnerHTMLs.length; i++) {
  const actual = ulEl.children[i].innerHTML;
  const expected = expectedInnerHTMLs[i];
  console.assert(actual === expected, `Test child ${i}`);
}
