/* eslint-disable no-console */
/* eslint-disable no-shadow */
// 1:-Using switch with map
const arr = ['car', 1, 5, 'js', 'node js', 'mysql', 'sql'];
const newArray = arr.map((arr) => arr);
switch (newArray.length === arr.length) {
  case true:
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i <= newArray.length; i++) {
      console.log(newArray[i]);
    }
    break;
  default:
    console.log('not able to print');
}
// 2:-Closure-function
function second(a, b) {
  const array = [1, 2, 3, 4, 5, 6];
  // eslint-disable-next-line no-use-before-define
  innerFunction();
  function innerFunction() {
    array.splice(a, 1);
    array.splice(b, 1);
    console.log(array);
  }
}
second(5, 2);

// 3:-Using Constructor method
function constructor(arrayThird) {
  // eslint-disable-next-line no-unused-expressions
  this.arrayThird;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i <= arrayThird.length; i++) {
    console.log(arrayThird[i]);
  }
}
constructor([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// 4:-Function taking two arguments ,one array and one element to delete or add to array.
function checking(arrayFour, item) {
  // eslint-disable-next-line no-unused-expressions
  this.arrayFour;
  // eslint-disable-next-line no-unused-expressions
  this.item;
  let count;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i <= arrayFour.length; i++) {
    if (arrayFour[i] === item) {
      count = i;
    }
  }
  if (typeof count !== 'undefined') {
    arrayFour.splice(count, 1);
  } else {
    arrayFour.push(item);
  }
  console.log(arrayFour);
}
checking([11, 22, 33, 44, 55, 66], 77);

// 5:-Self invoking function
// eslint-disable-next-line func-names
(function () {
  console.log('hari');
}());

// 6:-Printing keys in reverse order
const obj = {
  a: 'one', b: '2', f: '5', c: '33', p: 'do', q: 'one',
};
const secondObject = Object.keys(obj).reverse();
console.log(secondObject);

// 7:-Deleting element with id=24
const data = [{ a: 'one', id: '22' }, { a: 'four', id: '7' }, { a: 'six', b: '2' }, { a: 'sixty', id: '24' }, { a: 'five', id: '212' }];
console.log('before removing the element');
// eslint-disable-next-line no-plusplus
for (let i = 0; i < data.length; i++) {
  console.log(data[i]);
}
// eslint-disable-next-line no-plusplus
for (let i = 0; i < data.length; i++) {
  if (data[i].id === '24') {
    data.splice(i, 1);
    break;
  }
}
console.log(data);

// 8:- Strings
const string = 'Javascript is the King of the web.';

// a:-length of the string
console.log(string.length);

// b:-8th character of the string.
console.log(string[8]);

// c:Console the above code in browser console.
console.log(string[8]);

// d:-Position of a word.
console.log(string.indexOf('King'));

// e:-replace words in string.
const stringReplace = string.replace('King', 'Emperor');
console.log(stringReplace);

// f:- insert a word before king in the string.
const index = string.indexOf('King');
const newString = `${string.slice(0, index)}new ${string.slice(index, 34)}`;
console.log(newString);

// g:-Getting the words in string as array.
const stringArray = string.split(' ');
console.log(stringArray);

// h:-Extracting and printing a part of the string.
const isIndex = string.indexOf('is');
const partString = string.substr(isIndex, 11);
console.log(partString);

// i:-Getting the count of occurence of the words
const stringSplit = string.split(' ');
console.log(stringSplit);
let count1 = 0;
let count2 = 0;
function countChecker(arrary, item1, item2) {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i <= arrary.length; i++) {
    if (arrary[i] === item1) {
      // eslint-disable-next-line no-plusplus
      count1++;
    } else if (arrary[i] === item2) {
      // eslint-disable-next-line no-plusplus
      count2++;
    }
  }
}
countChecker(stringSplit, 'the', 'of');
console.log(`Count of the words "the"=${count1} and "of"=${count2}`);

// j:Padding the string with "*".
console.log(string.padEnd(30, '*')); // Actual length of the string is 30 so '*'are not padded at the end.
