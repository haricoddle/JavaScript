/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
//1:-
//a:-Removing an element and printing the length of the array.
const arr = ['1', '2', '3', '4', '5', '6', '7'];
arr.splice(5, 1);
console.log(arr, arr.length);

//b:-Converting all the array items to data type numbers
const arr1 = ['1', '2', '3', '4', '5', '6', '7'];
const arr2 = arr1.map((str) => Number(str));
console.log(arr2);

/*c:-removing last 3 elements from an array and
then adding two string elements to start of the array*/
const arr3 = ['1', '2', '3', '4', '5', '6', '7'];
arr3.splice(4, 3);
console.log(arr3);
arr3.splice(0, 0, 'one', 'two');
console.log(arr3);

//d:-String concatination and console sum of array.
const arr4 = ['1', '2', '3', '4', '5', '6', '7'];
console.log(arr4.join());
// eslint-disable-next-line camelcase
const arr4_a = arr4.map((str) => Number(str));
let sum = 0;
for (let i = 0; i < arr4_a.length; i++) {
  sum += arr4_a[i];
}
console.log(sum);

//e:-filter out item and console the array
const arr5 = ['1', '2', '3', '4', '5', '6', '7'];
console.log(`array before removing the element ${arr5}`);
for (let i = 0; i <= arr5.length; i++) {
  if (arr5[i] === '3') {
    arr5.splice(i, 1);
  }
}
console.log(`Array after removing the element ${arr5}`);

//f:- console the item when the items are "3,5,7"
for (let i = 0; i < arr4_a.length; i++) {
  if (arr4_a[i] === 3 || arr4_a[i] === 5 || arr4_a[i] === 7) {
    console.log(arr4_a[i]);
  }
}

//g:-compare two arrays and console if they same datatypes
const arr6 = ['1', '2', '3', '4', '5', '6', '7'];
const arr7 = [1, 2, '3', 4, 5, 6, '7'];
let countt = 0;
if (arr6.length === arr7.length) {
  for (let i = 0; i < arr6.length; i++) {
    if (arr7[i] === arr6[i]) {
      console.log(arr7[i]);
      countt++;
    }
  }
}
console.log(`Only ${countt} elements are equal`);

//h:-iterating the array and multiplying the element with its index value
const arr8 = [0, 2, 3, 7, 5, 6, 8];
let sum1 = 0;
for (let j = 0; j < arr8.length; j++) {
  sum1 += arr8[j] * j;
}
if (sum1 > 40) {
  console.log('Result greater than 40');
} else {
  console.log('Result not greater than 40');
}

//i:- merge two array and console it
const arr9 = [2, 3, 4, 5, 6];
const arr10 = [7, 8, 9, 10, 11];
console.log(arr9.concat(arr10));

//2:-Star pattern
for (let i = 1; i <= 5; i++) {
  // eslint-disable-next-line no-plusplus
  for (let j = 1; j <= (5 - i); j++) {
    console.log('');
  }
  // eslint-disable-next-line no-plusplus
  for (let k = 1; k <= i; k++) {
    console.log(' * ');
  }
  console.log();
}
