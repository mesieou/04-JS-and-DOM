/* eslint-disable no-multiple-empty-lines */
/* eslint-disable prefer-const */
/* eslint-disable import/extensions */

import runChallenges from "../spec/split_the_bill_examiner.js";

const splitTheBill = (group) => {
  // TODO 1: Implement the function and return an Object
  const arrayOfValues = Object.values(group);
  const payableAmount = arrayOfValues.reduce((accum, value) => accum + value, 0)
  const payableAmountPerPerson = payableAmount / arrayOfValues.length

  let arrayGroup = Object.entries(group).map(([key, value]) => {
    return [key, value - payableAmountPerPerson]
  })
  return Object.fromEntries(arrayGroup)
};

const updatePriceList = () => {
  // TODO 2: Call the `splitTheBill(group)` function and display the results of what everyone needs to pay in the HTML
  const group = {
    "john"  : 120,
    "paul"  :  30,
    "ringo" : 150,
  }

  const result = splitTheBill(group)
  console.log(result)
  const rows = document.querySelectorAll('.amount-payable tr')
  console.log(rows)
  console.log(rows)

  console.log(Object.keys(result)[0])
  console.log(Object.values(result)[0])

  rows.forEach((row, index) => {
    row.innerHTML = `
    <tr>
     <th scope="row">${Object.keys(result)[index]}</th>
     <td>${-Object.values(result)[index]}</td>
    </tr>
    `
  });
}
// Do not remove these lines:
if (typeof window === "object") {
  document.addEventListener("DOMContentLoaded", () => {
    updatePriceList();
  });
}

// module.exports = splitTheBill; // Do not remove this line.
runChallenges(splitTheBill);
export { splitTheBill };
