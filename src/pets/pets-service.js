const Queue = require('../queue');
const store = require('../../store');

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue(),
};

store.cats.forEach((cat) => pets.cats.enqueue(cat));
store.dogs.forEach((dog) => pets.dogs.enqueue(dog));

// --------------------
function checkPetList() {
  let petList = {
    cat: pets.cats.nextUp(),
    dog: pets.dogs.nextUp(),
  };

  if (!petList.cat) {
    store.cats.forEach((cat) => pets.cats.enqueue(cat));
  }

  if (!petList.dog) {
    store.dogs.forEach((dog) => pets.dogs.enqueue(dog));
  }
}
module.exports = {
  get() {
    let petList = {
      cat: pets.cats.nextUp(),
      dog: pets.dogs.nextUp(),
    };
    checkPetList();
    return petList;
  },

  adopt(petType) {
    checkPetList();
    return pets[petType].dequeue();
  },
};
