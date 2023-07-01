// Regular Expressions
// -------------------
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
// --
// .test()
let result = codingRegex.test(extractStr);
console.log(result);
//  .match()
let result01 = extractStr.match(codingRegex);
console.log(result);

//  => i -  between uppercase letters and lowercase
let codingRegex01 = /CODING/i;
let result02 = extractStr.match(codingRegex01);
console.log(result02);

// => g -  global search flag
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let result03 = twinkleStar.match(starRegex);
console.log(result03);

// => . - Wildcard Period
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr);
console.log();
huRegex.test(hugStr);
