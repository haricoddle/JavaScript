/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable no-shadow */

// 1:Using switch statement inside a map function, console each item by using switch statement
const arr = ['car', 1, 5, 'js', 'node js', 'mysql', 'sql'];
// eslint-disable-next-line array-callback-return
arr.map((value) => {
  switch (value) {
    case value: console.log(value);
      break;
    default: console.log('error');
  }
});

// 2:-Closure-function to delete indexes 5 and 2 of the array.
function second(a, b) {
  const array = [1, 2, 3, 4, 5, 6];
  function innerFunction() {
    array.splice(a, 1);
    array.splice(b, 1);
    console.log(array);
  }
  innerFunction();
}
second(5, 2);

// 3:- Using constructor method to console all elements of the passed array.
class Three {
  constructor(arrayThird) {
    for (let i = 0; i < arrayThird.length; i += 1) {
      console.log(arrayThird[i]);
    }
  }
}
// eslint-disable-next-line no-unused-vars
const third = new Three([1, 2, 3, 4, 5, 6, 7, 8, 9]);

/* 4:-Function taking two arguments ,an array and an element,
  search the array for the element and delete if element is present or add if not present*/
function checking(arrayFour, item) {
  let count;
  for (let i = 0; i <= arrayFour.length; i += 1) {
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

// 5:-Self invoking function to console a name.
(function name() {
  console.log('hari');
}());

/* 6:-Using this object make an array consisting of all the
keys of the given object in reverse order.*/
const obj = {
  a: 'one', b: '2', f: '5', c: '33', p: 'do', q: 'one',
};
const secondObject = Object.keys(obj).reverse();
console.log(secondObject);

// 7:-From the given object remove the data array item with id as '24'.
const data = [{ a: 'one', id: '22' }, { a: 'four', id: '7' }, { a: 'six', b: '2' }, { a: 'sixty', id: '24' }, { a: 'five', id: '212' }];
console.log('before removing the element');
for (let i = 0; i < data.length; i += 1) {
  console.log(data[i]);
}
for (let i = 0; i < data.length; i += 1) {
  if (data[i].id === '24') {
    data.splice(i, 1);
    break;
  }
}
console.log(data);

// 8:- working with Strings.
const string = 'Javascript is the King of the web.';

// a:-To get the length of the string
console.log(string.length);

// b:-Printing 8th character of the string.
console.log(string[7]);

// c:-Console the above code in browser console.
console.log(string[7]);

// d:-To get the position of word "King".
console.log(string.indexOf('King'));

// e:-Replace the words "king" with "Emperor" in the string.
const stringReplace = string.replace('King', 'Emperor');
console.log(stringReplace);

// f:- Insert a word before king in the string.
const index = string.indexOf('King');
const newString = `${string.slice(0, index)}new ${string.slice(index, 34)}`;
console.log(newString);

// g:-Getting the words in string as array.
const stringArray = string.split(' ');
console.log(stringArray);

// h:-Extract and print the words "is the King" from string.
const isIndex = string.indexOf('is');
const partString = string.substr(isIndex, 11);
console.log(partString);

// i:-Getting the count of occurrences of the strings "the" and "of" in string.
const stringSplit = string.split(' ');
let count1 = 0;
let count2 = 0;
function countChecker(arrary, item1, item2) {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i <= arrary.length; i += 1) {
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

// j:Pad string with "*" and set the total length of the string as 30, displayed at right side.
console.log(string.slice(0, 30).padEnd(string.length, '*'));
