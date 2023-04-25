var names = [
  'Hole-in-one!',
  'Eagle',
  'Birdie',
  'Par',
  'Bogey',
  'Double Bogey',
  'Go Home!',
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
  var answer = '';
  switch (val) {
    case 1:
      answer = 'alpha';
      break;
    case 2:
      answer = 'beta';
      break;
    case 3:
      answer = 'gamma';
      break;
    case 4:
      answer = 'delta';
      break;
  }

  return answer;
}

console.log(caseInSwitch(2));

// ---------------------------------------------

function switchOfStuff(val) {
  var answer = '';
  switch (val) {
    case 'a':
      answer = 'apple';
      break;
    case 'b':
      answer = 'bird';
      break;
    case 'c':
      answer = 'cat';
      break;
    default:
      answer = 'stuff';
      break;
  }
  return answer;
}

// Change this value to test
console.log(switchOfStuff('p'));

// --------------------------

// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name'],
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette'],
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: [],
  },
  5439: {
    albumTitle: 'ABBA Gold',
  },
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (value === '') {
    delete records[id][prop];
  } else if (prop === 'tracks') {
    records[id][prop] = records[id][prop] || []; // short circuit evaluation
    records[id][prop].push(value);
  } else {
    records[id][prop] = value;
  }
  return records;
}

console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));

// --------------------------------

const ourArray = [];
let i = 0;

while (i < 5) {
  ourArray.push(i);
  i++;
}

i;

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

function sumArray(arr) {
  return arr.reduce(function (acc, curr) {
    return acc + curr;
  });
}

var sell = [1, 2, 3];
var dc = sumArray(sell);
console.log(dc);

const sumSome = (a, b) => {
  return a + b;
};

console.log(sumSome(1, 2));
