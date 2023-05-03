const a = [
  [1, 2, 4],
  [3, 5, 6],
  [8, 0, 6],
];

const name = (arr, item) => {
  arr.push(item);
  arr.shift();
  return arr;
};
a;
console.log(name(a, 4));
console.log(name(a, [1, 2, 3]));

// ---------------------------


const b = [
  [1, 2, 4],
  [3, 5, 6],
  [8, 0, 6],
];

const add = (arr, toAdd, toRemove) => {
  arr[0].push(toAdd);
  arr[0].shift(toRemove);
  return arr;
};
b;
console.log(add(b, [1, 9, 2]));

// -------------------------

const truck = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const addAndRemove = (matrix, newElement, index) => {
  matrix.shift();
  matrix.splice(index, 0, newElement);
  return matrix;
};

const newElement = [1, 9, 9, 2];
const index = 2;

truck;
console.log(addAndRemove(truck, newElement, index));
console.log(addAndRemove(truck, [1, 9, 9, 6], 1));

// -----------------------

const arr3d = [
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
  [
    [7, 8, 9],
    [10, 11, 12],
  ],
];

function addAndRe(arr, item, index) {
  const newArray = arr.slice();
  for (let i = 0; i < newArray.length; i++) {
    for (let j = 0; j < newArray[i].length; j++) {
      newArray[i][j].splice(index, 1);
      newArray[i][j].splice(index, 0, item[i][j]);
    }
  }
  return newArray;
}

arr3d;

const newItem3d = [
  [
    [13, 14, 15],
    [16, 17, 18],
  ],
  [
    [19, 20, 21],
    [22, 23, 24],
  ],
];
const index3d = 1;
const result3d = addAndRemove(arr3d, newItem3d, index3d);

console.log(result3d);

// ----------------------------------------------------------------   --     ---     --       ------
// ---------------------------------------------------------------   --     ---  --          -- -- --
// --------------------------------------------------------------   --     ---    --        --      --

const myObj = {
  top: 'hat',
  bottom: 'pants',
};

console.log(myObj.hasOwnProperty('top'));
console.log(myObj.hasOwnProperty('middle'));
// ---
console.log(Array.isArray(newItem3d));

// --------

const phone = [];

for (i = 9; i > 0; i -= 2) {
  phone.push(i);
}

i = 9;
while (i > 0) {
  phone.push(i);
  i--;
}

console.log(phone);
console.log(phone.length);

// -----------------------------------

const myArr = [2, 3, 4, 5, 6];
let total = 0;

for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

total;

// -----------------------------------

function multiplyAll(arr) {
  var product = 0;

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product += arr[i][j];
    }
  }
  
  return product;
}

var product = multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);

console.log(product);

// --------------------

const sumAll = (arr) => {
  var total = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      total += arr[i][j];
    }
  }
  return total;
};

const Taha = [
  [1, 2],
  [3, 4],
  [5, 6, 7],
];

console.log(sumAll(Taha));

function minus(arr) {
  let prince = 0;
  for (let i = 0; i < arr.length; i++) {
    prince += arr[i];
  }
  return prince;
}

console.log(minus(Taha));

function mohmad(arr) {
  let total = 0;
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) {
      for (n = 0; n < arr[i][j].length; n++) {
        total += arr[i][j][n];
      }
    }
  }
  return total;
}

const Tah = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
];

console.log(mohmad(Tah));

function sumArray(arr) {
  return arr.flat(2).reduce((total, curr) => total + curr, 0);
}

console.log(sumArray(Tah));

const dada = Tah.flat(2);
dada;

// ===========================

const ab = [
  [
    [1, 2],
    [3, 4, 5],
  ],
  [[2, 3], [5]],
];

const sumAb = (arr) => {
  let result = 0;
  for (i = 0; i < arr.length; i += 1) {
    for (j = 0; j < arr[i].length; j++) {
      for (n = 0; n < arr[i][j].length; n++) {
        result += arr[i][j][n];
      }
    }
  }
  return result;
};

console.log(sumAb(ab));


// ========================================
// ========================================

const abs = [1,2,3,4,5,6]

let abs1 =abs.slice(2,4)
abs1
abs
// -
let abs2="how are you"
let abs22 = abs2.split()
abs2
abs22
// -
let abs3= abs.splice(0,0,7,8,9)
abs3
abs
// -
let abs4= abs.join("1,2")
abs4
abs

// ==================================

// join ======

const fruits = ['apple', 'banana', 'orange'];
const joinedString = fruits.join(', ');
console.log(joinedString);
// Output: "apple, banana, orange"

const numbers = [1, 2, 3, 4, 5];
const joinedNumbers = numbers.join(' ');
console.log(joinedNumbers);
// Output: "1-2-3-4-5"

// split ======

const fruitsString = "apple, banana, orange";
const fruitsArray = fruitsString.split(', ');
console.log(fruitsArray);
// Output: ["apple", "banana", "orange"]

const numbersString = "1-2-3-4-5";
const numbersArray = numbersString.split('-');
console.log(numbersArray);
// Output: ["1", "2", "3", "4", "5"]
