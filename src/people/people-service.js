const Queue = require('../queue');
const store = require('../../store');

// Set up initial data.
// --------------------

const peopleList = new Queue();
store.people.forEach((person) => peopleList.enqueue(person));

// --------------------
function checkPeopleList() {
  let people = peopleList.all();
  if (people.length < 5) {
    peopleList.enqueue(
      store.people[Math.floor(Math.random() * store.people.length)]
    );
  }
}
module.exports = {
  getAll() {
    checkPeopleList();
    return peopleList.all();
  },

  enqueue(person) {
    return peopleList.enqueue(person);
  },

  dequeue() {
    checkPeopleList();
    return peopleList.dequeue();
  },
};
