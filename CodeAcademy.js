var names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];
function golfScore(par, strokes) {
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par - 1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else if (strokes >= par + 3) {
    return names[6];
  }
}

// Change these values to test
console.log(golfScore(5, 2));
console.log(golfScore(0, 1));
console.log(golfScore(2, 3));

/*
Strokes	     Return
1	          "Hole-in-one!"
<= par - 2	"Eagle"
par - 1	    "Birdie"
par	        "Par"
par + 1	    "Bogey"
par + 2	    "Double Bogey"
>= par + 3	"Go Home!"
*/

// ---------------------------------------

function caseInSwitch(val) {
  var answer = "";
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }

  return answer;
}

console.log(caseInSwitch(2));

// ---------------------------------------------

function switchOfStuff(val) {
  var answer = "";
  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break;
  }
  return answer;
}

// Change this value to test
console.log(switchOfStuff("p"));

// --------------------------

// Setup
const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (value === "") {
    delete records[id][prop];
  } else if (prop === "tracks") {
    records[id][prop] = records[id][prop] || []; // short circuit evaluation
    records[id][prop].push(value);
  } else {
    records[id][prop] = value;
  }
  return records;
}

console.log(updateRecords(recordCollection, 5439, "artist", "ABBA"));

// --------------------------------

const ourArray = [];
let i = 0;

while (i < 5) {
  ourArray.push(i);
  i++;
}

i;
ourArray

// --------------------------------------

function sumAll(arr) {
  var product = 0;

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product += arr[i][j];
    }
  }

  return product;
}

var product = sumAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);

console.log(product);

// ------------------------------

var sell = [1, 2, 3];

var howawi = 0;

for (i = 0; i < sell.length; i++) {
  howawi += sell[i];
}

howawi;

// --

// function sumArray(arr) {
//   return arr.reduce(function (acc, curr) {
//     return acc + curr;
//   });
// }

function sumArray(arr) {
  return arr.reduce(function (a, b) {
    return a + b;
  });
}

var sell = [1, 2, 3];
var dc = sumArray(sell);
console.log(dc);

const sumSome = (a, b) => {
  return a + b;
};

console.log(sumSome(1, 2));

// ==================================================================

const average = (array) => {
  let numberOfElements = array.length;
  let total = 0;
  for (i = 0; i < array.length; i++) {
    total += array[i];
  }
  let result = total / numberOfElements;
  return result;
};

array = [2, 4, 5, 5, 7, 0];

console.log(average(array));

// =========================

function multiply(arr, n) {
  if (n <= 0) {
    return 1;
  } else {
    return multiply(arr, n - 1) * arr[n - 1];
  }
}

console.log(multiply([1, 2, 3, 4, 5, 6], 6));

// ================================

//Setup
var contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
<<<<<<< HEAD
      return contacts[i][prop] || "No such property";
=======
      return ` your search is : ${contacts[i][prop]}` || 'No such property';
>>>>>>> 41adee3817f25c9d04c2e297b5fd26e6332d370b
    }
  }
  return "No such contact";
}

// Change these values to test your function
var data = lookUpProfile("Sherlock", "likes");

console.log(data);

// =============

function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}

console.log(randomWholeNum());

// -------------------------------------------------

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

var myRandom = randomRange(4, 10);

console.log(myRandom);

// ====================================

// The following function uses an if/else statement to check a condition:

function findGreater(a, b) {
  if (a > b) {
    return "a is greater";
  } else {
    return "b is greater or equal";
  }
}

console.log(findGreater(1, 2));

// This can be re-written using the conditional operator:

function findGreater2(a, b) {
  return a > b ? "a is greater" : "b is greater or equal";
}

console.log(findGreater2(2, 1));

// ---

function checkEqual(a, b) {
  return a == b ? "Equal" : "Not Equal";
}

console.log(checkEqual(1, 2));

// ===============

// The following function uses if, else if, and else statements to check multiple conditions:

function findGreaterOrEqual(a, b) {
  if (a === b) {
    return "a and b are equal";
  } else if (a > b) {
    return "a is greater";
  } else {
    return "b is greater";
  }
}
// The above function can be re-written using multiple conditional operators:

function findGreaterOrEqual(a, b) {
  return a === b
    ? "a and b are equal"
    : a > b
    ? "a is greater"
    : "b is greater";
}

function findGreaterOrEqual(a, b) {
  return a === b
    ? "a and b are equal"
    : a > b
    ? "a is greater"
    : "b is greater";
}

function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

console.log(checkSign(1));
console.log(checkSign(0));
console.log(checkSign(-1));

// =====================

function countUp(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countUp(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countUp(5));

// -----

function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.unshift(n);
    return arr;
  }
}

console.log(countdown(5));

// ---------

function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}

console.log(rangeOfNumbers(1, 5));

// ==================

let obj = {
  name: "FreeCodeCamp",
  review: "Awesome",
};
Object.freeze(obj);
<<<<<<< HEAD
obj.review = "bad";
obj.newProp = "Test";
=======
obj.review = 'bad';
obj.newProp = 'Test';
>>>>>>> 41adee3817f25c9d04c2e297b5fd26e6332d370b
console.log(obj);

// =================================

function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14,
  };
  // Only change code below this line
  Object.freeze(MATH_CONSTANTS);
  MATH_CONSTANTS;
  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }

  MATH_CONSTANTS;
  return MATH_CONSTANTS.PI;
}

const PI = freezeObj();

// ============

const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr);

function removeFirstTwo(list) {
  // Only change code below this line
  const [a, b, ...shorterList] = list; // Change this line
  // Only change code above this line
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
source;
sourceWithoutFirstTwo;
<<<<<<< HEAD
=======

// ------------------

const result = {
  success: ['max-length', 'no-amd', 'prefer-arrow-functions'],
  failure: ['no-var', 'var-on-top', 'line-break'],
  skipped: ['no-extra-semi', 'no-dup-keys'],
};
function makeList(arr) {
  'use strict';
  // change code below this line
  const failureItems = [];
  for (let i = 0; i < arr.length; i++) {
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
  }
  // change code above this line
  return failureItems;
}

const failuresList = makeList(result.failure);
failuresList;

// ==========

function makeList2(obj) {
  'use strict';
  // change code below this line
  const failureItems = [];
  for (let prop in obj) {
    failureItems.push(`${prop}: <li class="text">${obj[prop]}</li>`);
  }
  // change code above this line
  return failureItems;
}
const failuresList2 = makeList2(result);
failuresList2;
result

//---------------------------------




>>>>>>> 41adee3817f25c9d04c2e297b5fd26e6332d370b
