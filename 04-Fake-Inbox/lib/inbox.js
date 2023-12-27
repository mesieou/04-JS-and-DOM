/* eslint-disable no-multiple-empty-lines */
/* eslint-disable prefer-const */
/* eslint-disable import/extensions */
// import { faker } from '@faker-js/faker';
import runChallenges from "../spec/inbox_examiner.js";

const hasNewMessage = () => {
  // TODO: return true with a probability of 20%.
  const randomNumber = Math.random()
  if(randomNumber < 0.2) {
    return true
  } else {
    return false
  }
};

const newMessage = () => {
  // TODO: return a random message as an object with two keys, subject and sender
  const object = {
    sender: 'GitHub Team',
    subject: 'Welcome to GitHub'
  };
  return object;
};

const appendMessageToDom = (message) => {
  // TODO: append the given message to the DOM (as a new row of `#inbox`)
  const inbox = document.querySelector('#inbox');
  inbox.insertAdjacentHTML('afterbegin', `
    <div class="row message read">
     <div class="col-3">${message.sender}</div>
     <div class="col-9">${message.subject}</div>
    </div>
  `);
};

const refresh = () => {
  // TODO: Implement the global refresh logic. If there is a new message,
  //       append it to the DOM. Update the unread counter in title as well.
  if (newMessage()) {
    const countResult = document.querySelector('#count').textContent
    const countString = countResult.match(/\d+/)[0]
    let countInt = parseInt(countString, 10)
    let newCountInt = countInt + 1

    appendMessageToDom()
    countResult.textConent = `(${newCountInt})`
  }
};

// Do not remove these lines.
if (typeof window === "object") {
  document.addEventListener("DOMContentLoaded", () => {
    setInterval(refresh, 1000); // Every 1 second, the `refresh` function is called.
  });
}

// Checking exercise answers. DO NOT MODIFY THIS LINE.
runChallenges(hasNewMessage, newMessage);
export { hasNewMessage, newMessage };
