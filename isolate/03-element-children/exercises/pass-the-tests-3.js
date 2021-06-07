'use strict';

const divEl = document.createElement('ul');
divEl.innerHTML = `
  <table>
    <tbody>
      <tr>
        <td>w</td>
        <td>x</td>
      </tr>
      <tr>
        <td>y</td>
        <td>z</td>
      </tr>
    </tbody>
  </table>
`;
console.log(divEl.nodeName, divEl.cloneNode(true));

// --- write some code ---
//  you will need to access and update each <td> element
let newVals = ['a', 'b', 'c', 'd'];
const valuesArray = Array.from(divEl.getElementsByTagName('td'))
console.log(valuesArray);
// good old loop
for (let i = 0; i < valuesArray.length; i++){ //iterate through 'td'
  for(let j = 0; j < newVals.length; j ++){//iterate through new values
    valuesArray[i].innerHTML = newVals[i];// attach to 'td' a new value
  }
}
// --- --- --- --- --- ---


console.log(divEl.nodeName, divEl.cloneNode(true));

const expectedInnerHTMLs = ['a', 'b', 'c', 'd'];
for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 2; j++) {
    const tbodyEL = divEl.children[0].children[0];
    const trEl = tbodyEL.children[i];
    const tdEl = trEl.children[j];
    const actual = tdEl.innerHTML;
    const expected = expectedInnerHTMLs.shift();
    console.assert(actual === expected, `expected "${expected}"`);
  }
}
