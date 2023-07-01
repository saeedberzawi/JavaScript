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

// => ^
// negated character sets.
// To create a negated character set, you place a caret character (^)
// after the opening bracket and before the characters you do not want to match.
// For example, /[^aeiou]/gi matches all characters that are not a vowel.
let quoteSample03 = "3 blind mice.";
let myRegex01 = /[^1-9^aioue]/gi; // Change this line
let result09 = quoteSample03.match(myRegex01);
console.log(result09);

// => +
// For example, /a+/g would find one match in abc and return ["a"].
// Because of the +, it would also find a single match in aabc and return ["aa"].
let difficultSpelling = "Mississippi";
let myRegex02 = /s+/g; // Change this line
let result010 = difficultSpelling.match(myRegex02);
console.log(result010);

// => *
// matches characters that occur zero or more times
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
console.log(soccerWord.match(goRegex));
console.log(gPhrase.match(goRegex));
console.log(oPhrase.match(goRegex));

let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/;
let result011 = chewieQuote.match(chewieRegex);
console.log(result011);

// => ?
// lazy matching.
//  you can use the ? character to change it to lazy matching.
//"titanic" matched against the adjusted regex of /t[a-z]*?i/ returns ["ti"].
let text = "<h1>Winter is coming</h1>";
let myRegex03 = /<.*?>/; // Change this line
let result012 = text.match(myRegex03);
console.log(result012);

// ===========
// Match Beginning String Patterns
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
console.log(firstRegex.test(firstString));
let notFirst = "You can't find Ricky now.";
console.log(firstRegex.test(notFirst));
// The first test call would return true, while the second would return false.

// => $
// You can search the end of strings using the dollar sign character $ at the end of the regex.

let theEnding = "This is a never ending story";
let storyRegex = /story$/;
console.log(storyRegex.test(theEnding));
let noEnding = "Sometimes a story will have to end";
console.log(storyRegex.test(noEnding));
// The first test call would return true, while the second would return false.

// => \w
// Match All Letters and Numbers
// The closest character class in JavaScript to match the alphabet is \w. This shortcut is equal to [A-Za-z0-9_].
//This character class matches upper and lowercase letters plus numbers.
//Note, this character class also includes the underscore character (_).
//  /[A-Za-z0-9_]+/ => /\w+/

let quoteSample04 = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g;
let result013 = quoteSample.match(alphabetRegexV2).length;
console.log(result013);

// => \W
// Match Everything But Letters and Numbers
// the opposite pattern uses a capital letter. This shortcut is the same as [^A-Za-z0-9_].
let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
console.log(numbers.match(shortHand));
console.log(sentence.match(shortHand));
// The first match call would return the value ["%"] and the second would return ["!"].

let quoteSample05 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g;
let result014 = quoteSample05.match(nonAlphabetRegex).length;
console.log(result014);
let result015 = quoteSample05.match(nonAlphabetRegex);
console.log(result015);

// \d
// Match All Numbers
// The shortcut to look for digit characters is \d, with a lowercase d. This is equal to the character class [0-9],
//which looks for a single character of any number between zero and nine.
