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
