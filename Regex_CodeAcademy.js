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
// if you wanted to match hug, huh, hut, and hum, you can use the regex /hu./ to match all four words.
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
let result04 = humStr.match(huRegex);
console.log(result04);
let result05 = hugStr.match(huRegex);
console.log(result05);

// => []
// For example, you want to match bag, big, and bug but not bog.
// You can create the regex /b[aiu]g/ to do this.
// The [aiu] is the character class that will only match the characters a, i, or u.
let quoteSample =
  "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[bi]/gi;
let result06 = quoteSample.match(vowelRegex);
console.log(result06);

// => -
// Inside a character set, you can define a range of characters to match using a hyphen character: -.
let quoteSample01 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-d]/gi;
let result07 = quoteSample01.match(alphabetRegex);
console.log(result07);

// Using the hyphen (-) to match a range of characters is not limited to letters.
// It also works to match a range of numbers.
// For example, /[0-5]/ matches any number between 0 and 5, including the 0 and 5
let quoteSample02 = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi;
let result08 = quoteSample02.match(myRegex);
console.log(result08);
