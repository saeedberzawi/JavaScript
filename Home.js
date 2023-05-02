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

const addAndRemove = (arr, newElement, index) => {
  arr.shift();
  arr.splice(index, 0, newElement);
  return arr;
};

const newElement = [1, 9, 9, 2];
const index = 2;

truck;
console.log(addAndRemove(truck, newElement, index));
console.log(addAndRemove(truck, [1, 9, 9, 6], 0));

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
  top: "hat",
  bottom: "pants",
};

console.log(myObj.hasOwnProperty("top"));
console.log(myObj.hasOwnProperty("middle"));
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

// --------------------

function mokUP(num) {
  answer = ''
  switch (num) {
    case 1:
      num < 5;
      return "The Number more than 5";
    case 2:
      num == 5;
      return "The Number equal 5";
    default:
      "The Number less than 5";
  }

  // if (num < 5) {
  //   return "I is less than 5";
  // } else if (num == 5) {
  //   return "I is Equal";
  // } else {
  //   return "I is Bigger";
  // }
}

console.log(mokUP(6));
console.log(mokUP(5));
console.log(mokUP(4));
console.log(mokUP());
