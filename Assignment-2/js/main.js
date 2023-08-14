//1:-

//a:-Removing an element and printing the length of the array.
let arr = ["1", "2", "3", "4", "5", "6", "7"];
// Don't hardcode the position of 6. find it.
for(let i=0;i<=arr.length;i++){
  if(arr[i]==='6')
  {
    arr.splice(i, 1);
    console.log(arr, arr.length);
  }
}

//b:-Converting all the array items to data type numbers
//Update the values of the same array(arr1).no need to create 2 arrays. Console datatype of each element in the array.
let arr1 = ["1", "2", "3", "4", "5", "6", "7"];
arr1 = arr1.map((str) => {
  return Number(str);
});
console.log(arr1);

//c:-removing last 3 elements from an array and then adding two string elements to start of the array
let arr3 = ["1", "2", "3", "4", "5", "6", "7"];
//Don't hardcode the value 4.
arr3.splice(arr3.length-3, 3);
console.log(arr3);
//Check other methods.
arr3.unshift('one','two');
// arr3.splice(0, 0, "one", "two");
console.log(arr3);

//d:-String concatination and console sum of array.
//use single loop and do both task
let arr4 = ["1", "2", "3", "4", "5", "6", "7"];
console.log(arr4.join());
let sum = 0;
const arr4_a = arr4.map((str) => {
  return sum += Number(str);
});
console.log(sum);

//e:-filter out item and console the array
//Add proper names
let arr5 = ["1", "2", "3", "4", "5", "6", "7"];
console.log(`array before removing the element ${arr5}`);
//what is the advantage of 'for' in filtering elements compare to other methods?
for (let i = 0; i <= arr5.length; i++) {
  //console the array elements and describe the working
  if (arr5[i] === "3") {
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
let arr6 = ["1", "2", "3", "4", "5", "6", "7"];
let arr7 = [1, 2, "3", 4, 5, 6, "7"];
let countt = 0;
//why length comparison
// read the qn properly
if (arr6.length === arr7.length) {
  for (let i = 0; i < arr6.length; i++) {
    if (typeof arr7[i] === typeof arr6[i]) {
      console.log(`${arr7[i]} has same datatype in the Array-2`);
      countt++;
    }
  }
}
console.log(`Only ${countt} elements are equal`);

//h:-iterating the array and multiplying the element with its index value
//check the qn and output
let arr8 = [0, 2, 3, 7, 5, 6, 8];
for (let j = 0; j < arr8.length; j++) {
  let sum1 = arr8[j] * j;
  if (sum1 > 40) {
    console.log(`Result greater than 40`);
  } else {
    console.log(`Result not greater than 40`);
  }
}


//i:- merge two array and console it
let arr9 = [2, 3, 4, 5, 6];
let arr10 = [7, 8, 9, 10, 11];
console.log(arr9.concat(arr10));

//check the output
//2:-Star pattern
var k=0;
do{
  let space = ' '.repeat(5-k);
  let star = '* '.repeat(k);
  console.log(space + star);
  k++;
}while(k<=5);
