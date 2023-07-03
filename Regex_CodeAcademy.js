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

// => \d
// Match All Numbers
// The shortcut to look for digit characters is \d, with a lowercase d. This is equal to the character class [0-9],
//which looks for a single character of any number between zero and nine.
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g;
let result016 = movieName.match(numRegex).length;
console.log(result016);

// => \D
// Match All Non-Numbers
// This is equal to the character class [^0-9],
//which looks for a single character that is not a number between zero and nine.
let movieName01 = "2001: A Space Odyssey";
let noNumRegex = /\D/g;
let result017 = movieName01.match(noNumRegex);
console.log(result017);

// ========================

//Restrict Possible Usernames
// Usernames are used everywhere on the internet. They are what give users a unique identity on their favorite sites.
// You need to check all the usernames in a database.
// Here are some simple rules that users have to follow when creating their username.
// 1- Usernames can only use alpha-numeric characters.
// 2- The only numbers in the username have to be at the end.
// There can be zero or more of them at the end. Username cannot start with the number.
// 3- Username letters can be lowercase and uppercase.
// 4- Usernames have to be at least two characters long.
// A two-character username can only use alphabet letters as characters.
let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let result018 = userCheck.test(username);
console.log(result018);
// Code Explanation
// ^ - start of input
// [a-z] - first character is a letter
// [a-z]+ - following characters are letters
// \d*$ - input ends with 0 or more digits
// | - or
// ^[a-z] - first character is a letter
// \d\d+ - following characters are 2 or more digits
// $ - end of input
// i - ignore case of input

// => \s
// Match Whitespace
// You can search for whitespace using \s, which is a lowercase s. This pattern not only matches whitespace.
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
let result019 = sample.match(countWhiteSpace);
console.log(result019);

// => \S
// Match Non-Whitespace Characters
// Search for non-whitespace using \S, which is an uppercase s. This pattern will not match whitespace.
let sample01 = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result020 = sample01.match(countNonWhiteSpace);
console.log(result020);

// => {}
// Specify Upper and Lower Number of Matches
// You can specify the lower and upper number of patterns with quantity specifiers.
// Quantity specifiers are used with curly brackets ({ and }).
// You put two numbers between the curly brackets - for the lower and upper number of patterns.

// For example, to match only the letter a appearing between 3 and 5 times in the string ah, your regex would be /a{3,5}h/.
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
console.log(multipleA.test(A4));
console.log(multipleA.test(A2));
// The first test call would return true, while the second would return false.
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; // Change this line
let result021 = ohRegex.test(ohStr);
console.log(result021);

// ============

// Specify Only the Lower Number of Matches
// To only specify the lower number of patterns, keep the first number followed by a comma.
// For example, to match only the string hah with the letter a appearing at least 3 times,
// your regex would be /ha{3,}h/.
let A401 = "haaaah";
let A201 = "haah";
let A100 = "h" + "a".repeat(40) + "h";
console.log(A100);
let multipleA01 = /ha{3,}h/;
console.log(multipleA01.test(A401));
console.log(multipleA01.test(A201));
console.log(multipleA01.test(A100));
// In order, the three test calls would return true, false, and true.

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/;
let result022 = haRegex.test(haStr);
console.log(result022);

// ================

// Specify Exact Number of Matches
// To specify a certain number of patterns, just have that one number between the curly brackets.
// For example, to match only the word hah with the letter a 3 times, your regex would be /ha{3}h/.
let A402 = "haaaah";
let A302 = "haaah";
let A10002 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;
console.log(multipleHA.test(A402));
console.log(multipleHA.test(A302));
console.log(multipleHA.test(A10002));
// In order, the three test calls would return false, true, and false.

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result023 = timRegex.test(timStr);
console.log(result023);

// ================
// Check for All or None
// You can specify the possible existence of an element with a question mark, ?.
//  This checks for zero or one of the preceding element.
// You can think of this symbol as saying the previous element is optional.
// -
// For example, there are slight differences in American and British English and you can use
// the question mark to match both spellings.
let american = "color";
let british = "colour";
let rainbowRegex = /colou?r/;
console.log(rainbowRegex.test(american));
console.log(rainbowRegex.test(british));
// Both uses of the test method would return true.

let favWord = "favorite";
let favRegex = /favou?rite/;
let result024 = favRegex.test(favWord);
console.log(result024);

// ================

// Positive and Negative Lookahead
// There are two kinds of lookaheads: positive lookahead and negative lookahead.
// A positive lookahead will look to make sure the element in the search pattern is there,
// but won't actually match it. A positive lookahead is used as (?=...) where the ... is the required
// part that is not matched.
// -
// On the other hand, a negative lookahead will look to make sure the element in the search pattern is not there.
//  A negative lookahead is used as (?!...) where the ... is the pattern that you do not want to be there.
// The rest of the pattern is returned if the negative lookahead part is not present.
// Lookaheads are a bit confusing but some examples will help.
let quit = "qu";
let noquit = "qt";
let quRegex = /q(?=u)/;
let qRegex = /q(?!u)/;
console.log(quit.match(quRegex));
console.log(noquit.match(qRegex));
// Both of these match calls would return ["q"].
// -
// A more practical use of lookaheads is to check two or more patterns in one string.
// Here is a (naively) simple password checker that looks for between 3 and 6 characters and at least one number:
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
console.log(checkPass.test(password));

let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/;
let result025 = pwRegex.test(sampleWord);
console.log(result025);

// => ()
// Check For Mixed Grouping of Characters
// Sometimes we want to check for groups of characters using a Regular Expression
// and to achieve that we use parentheses ().
// If you want to find either Penguin or Pumpkin in a string,
// you can use the following Regular Expression: /P(engu|umpk)in/g
let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
console.log(testRegex.test(testStr));
// The test method here would return true.

let myString = "Eleanor Roosevelt";
let myRegex04 = /(Franklin|Eleanor) (([A-Z]\.?|[A-Z][a-z]+) )?Roosevelt/;
let result026 = myRegex.test(myString);
console.log(result026);

function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];
  let row = [];
  for (let i = 0; i < m; i++) {
    // Adds the m-th row into newArray

    for (let j = 0; j < n; j++) {
      // Pushes n zeroes into the current row to create the columns
      row.push(0);
    }
    // Pushes the current row, which now has n zeroes in it, to the array
    newArray.push(row);
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);

function zeroArray01(m, n) {
  let newArray = [];
  for (let i = 0; i < m; i++) {
    let row = []; /* <-----  row has been declared inside the outer loop. 
     Now a new row will be initialised during each iteration of the outer loop allowing 
     for the desired matrix. */
    for (let j = 0; j < n; j++) {
      row.push(0);
    }
    newArray.push(row);
  }
  return newArray;
}
let matrix02 = zeroArray01(3, 2);
console.log(matrix02);