//1:-Creating different variables and data types and printing their dataTypes
//What is the difference between var,const and let?why have you used both??
//Use camel case for variable names.
// Check the variable declarations in JavaScript and select the one that is appropriate for your variables.

//boolean
const val = true;
console.log(typeof val);
//null
const n = null;
console.log(typeof n);
//undefined
let a;
console.log(typeof a);
//number
const age = 24;
console.log(typeof age);
//string
let mesg = "world";
console.log(typeof mesg);
//symbol
const s = Symbol(9);
console.log(typeof s);
//object
const myCar = new Object();
console.log(typeof myCar);

//2:-concatninate the strings with and without template literals
//i-with using template literals
const string1 = `hello ${mesg} ,this is for practice 
.My age is ${age}.Value of boolen is ${val}.Other types are ${n}, ${a},${myCar}`;
console.log(string1);
//ii-without using template literals
const string2 =
  "hello " +
  mesg +
  ",this is for practice \n.My age is " +
  age +
  ".Other types are " +
  n +
  "," +
  a +
  "," +
  myCar;
console.log(string2);

//3:-program to show alert message on loading of website
alert("Click ok to continue");
