'use strict';

// LAB 2: SORTING AND CAMPY SCI-FI

// Welcome to Lab 2 =)

// Be sure to read all the comments!

// All of the instructions are inline with the assignment below.
// Look for the word TODO in comments.  Each TODO will have a
// description of what is required.

// To run this file (in the terminal) use: node lab2.js

//*********************************************************
// SETUP
//*********************************************************

// We're going to use this special assert method again to
// test our code
function assert(expression, failureMessage) {
  if (!expression) {
    console.log('assertion failure: ', failureMessage);
  }
}

//*********************************************************
// PROBLEM 1: The Blob. 20 points
//*********************************************************

/* Dowington, PA had 1000 citizens on the night the blob escaped
 its meteorite. At first, the blob could only find and consume
 Pennsylvanians at a rate of 1/hour. However, each time it digested
 someone, it became faster and stronger: adding to its consumption
 rate by 1 person/hour.

    for the...      | starting rate of | persons consumed |
                    |  consumption     |    that hour     |
--------------------|------------------|------------------|
    first hour      |    1/hour        |        1         |
    second hour     |    2/hour        |        2         |
    third hour      |    3/hour        |        3         |
    fourth hour     |    4/hour        |        4         |

 TODO: First, make a constructor function, called Blob, that makes blobs. */
var Blob = function(name, color) {
  this.name = name;
  this.color = color;
};

   /*TODO: Next, create an instance of Blob named blob.*/
var blob = new Blob('blob', 'blue');

/* TODO: Then, use a loop to calculate how long it took the blob to finish
 with Dowington.
*/
var downingtonPeople = 1000;
var hour = 0;
var peoplePerHour = 1;

while (downingtonPeople > 0) {
  downingtonPeople = downingtonPeople - peoplePerHour;
  hour = hour + 1;
  peoplePerHour++;
}
var hoursSpentInDowington = hour;

// TODO: assign me the value of the
                           // above calculation (how long it took
                           // the blob to eat Dowington)

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

Blob.prototype.hoursToOoze = function(population, peoplePerHour) {
  for (var i = 0; population > 0; i++) {
    population = population - peoplePerHour;
    peoplePerHour++;
  }
  return i;
};

  // TODO: implement me based on the instructions above.
  // Be sure to then assign me to the Blob's prototype.

assert(blob.hoursToOoze(0, 1) === 0, 'no people means no time needed.');
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  'hoursSpentInDowington should match hoursToOoze\'s result for 1000');
// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.
assert(blob.hoursToOoze(300, 10) === 17);
assert(blob.hoursToOoze(10, 1) === 4);
assert(blob.hoursToOoze(60000, 100) === 261);

//*********************************************************
// PROBLEM 2: Universal Translator. 20 points
//*********************************************************

var hello = {
  klingon: 'nuqneH',  // home planet is Qo'noS
  romulan: 'Jolan\'tru', // home planet is Romulus
  'federation standard': 'hello' // home planet is Earth
};

// TODO: define a constructor that creates objects to represent
// sentient beings. They have a home planet, a language that they
// speak, and method (that you'll place on the prototype) called
// sayHello.

function SentientBeing(planet, language) {
  // TODO: specify a home planet and a language
  // you'll need to add parameters to this constructor
  this.planet = planet;
  this.language = language;
}

// sb is a SentientBeing object

    // TODO: say hello prints out (console.log's) hello in the
    // language of the speaker, but returns it in the language
    // of the listener (the sb parameter above).
    // use the 'hello' object at the beginning of this exercise
    // to do the translating

    //TODO: put this on the SentientBeing prototype

SentientBeing.prototype.sayHello = function(sb) {
  console.log(hello[this.language]);
  return hello[sb.language];
};

// TODO: create three subclasses of SentientBeing, one for each
// species above (Klingon, Human, Romulan).
function Klingon() {}
function Romulan() {}
function Human() {}

Klingon.prototype = new SentientBeing('Qo\'noS', 'klingon');
Romulan.prototype = new SentientBeing('Romulus', 'romulan');
Human.prototype = new SentientBeing('Earth', 'federation standard');

assert((new Human()).sayHello(new Klingon()) === 'nuqneH',
  'the klingon should hear nuqneH');
assert((new Klingon()).sayHello(new Romulan()) === 'Jolan\'tru', 'the Romulan should hear Jolan\'tru');
assert((new Klingon()).sayHello(new Human()) === 'hello', 'the Human should hear hello');
assert((new Romulan()).sayHello(new Human()) === 'hello', 'the Human should hear hello');
assert((new Romulan()).sayHello(new Klingon()) === 'nuqneH', 'the Klingon should hear Jolan\'tru');
assert((new Human()).sayHello(new Romulan()) === 'Jolan\'tru', 'the Romulan should hear Jolan\'tru');
// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.

//*********************************************************
// PROBLEM 3: Sorting. 20 points.
//
// Implement the following functions. Write at least 2
// assertions for each one (the assertions are how you
// will test your code)
//*********************************************************
function lastLetterSort(stringArray) {
  function byLastLetter(word, otherWord) {
    //TODO: implement me. sort the strings in alphabetical
    // order using their last letter
    // Read this about how the sort function works:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    // this byLastLetter function is a "compare function"
    // And check out the "comparing strings" section  here:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
    if (word[word.length - 1] < otherWord[otherWord.length - 1])
      return -1;
    else if (word[word.length - 1] > otherWord[otherWord.length - 1])
      return 1;
    return 0;
  }
  stringArray.sort(byLastLetter);
}

function sumArray(numberArray) {
  var sum = 0;

  numberArray.forEach(function(element) {
    sum += element;
  });

  // TODO: implement me using forEach
  // function forEach(element, position)
  return sum;
}

var arrayOfArrays =
[
  [1, 2, 3, 4, 5, 6, 7],
  [2, 3, 4, 5, 6],
  [3, 4, 5, 6, 7]
];

function sumSort(arrayOfArrays) {
  arrayOfArrays.sort(function(item, secondItem) {
    // TODO: implement me using sumArray
    //  order the arrays based on the sum of the numbers
    //  inside each array
    var itemSum = sumArray(item);
    var secondSum = sumArray(secondItem);
    if (itemSum < secondSum)
      return -1;
    else if (itemSum > secondSum)
      return 1;
    return 0;
  });
}

//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************
