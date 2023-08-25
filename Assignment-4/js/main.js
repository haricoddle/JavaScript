/* eslint-disable linebreak-style */
// 1
// a:-Function to calculate screen height of the browser screen.
function screenHeight() {
  const scrnHeight = window.screen.height;
  console.log(`Height of the screen is ${scrnHeight}`);
}
screenHeight();
// b:- To console the name of the web host.
function hostName() {
  const host = window.location.hostname;
  console.log(`The web host is ${host}`);
}
hostName();
//c:-To show warning message if no hhtps protocol used in the website.
function proctol() {
  const isProtocl = window.location.protocol;
  if (isProtocl === 'https') {
    console.log('Website uses HTTPS protocol.');
  } else {
    console.warn('Website dosen\'t contain https');
  }
}
proctol();
// d:-Show an alert message after 10 seconds.
// eslint-disable-next-line no-restricted-globals
addEventListener('load', () => {
  setTimeout(() => {
    alert('The page has been refreshed');
  }, 10000);
});

// 2:-Store the basic details in localStorage and delete them after 60seconds.
const myobj = {
  name: 'hari',
  age: 24,
};
const myobjString = JSON.stringify(myobj);
localStorage.setItem('myObj', myobjString);
const myObjConverted = JSON.parse(localStorage.getItem('myObj'));
console.log(myObjConverted);
setTimeout(() => {
  localStorage.removeItem('myObj');
  console.log('Details deleted from local storage');
}, 60000);

//3:-Creating a form and on submit store the details in form of cookies.
const form = document.getElementById('reg-form');
// eslint-disable-next-line prefer-arrow-callback
form.addEventListener('submit', (event) => {
  event.preventDefault();
  // eslint-disable-next-line no-unused-vars
  const username = document.getElementById('name').value;
  const userAge = document.getElementById('age').value;
  // eslint-disable-next-line no-undef
  const userDetails = {
    username: username,
    userAge: userAge,
  };
  const userDetailsJSON = JSON.stringify(userDetails);
  document.cookie = `userData=${userDetailsJSON}`;
  console.log(document.cookie);
});

//4:- Redirecting to the homepage of google from console.
console.log(window.location.assign = 'https://www.google.com/');

//5:-Create a div with background color red and buttons
//a:-To hide the div.
const mainDiv = document.getElementById('main-div');
const hideButton = document.getElementById('hide-div-btn');
hideButton.addEventListener('click', () => {
  if (mainDiv.style.display === 'block') {
    // eslint-disable-next-line no-unused-expressions
    mainDiv.style.display = 'none';
  } else {
    mainDiv.style.display = 'block';
  }
});

//b:To change the background color of the div
const changeColor = document.getElementById('change-color-btn');
changeColor.addEventListener('click', () => {
  // if (mainDiv.style.backgroundColor === 'default') {
  mainDiv.style.backgroundColor = 'yellow';
  // } else {
  //   mainDiv.style.backgroundColor = 'none';
  // }
});

//c:-To show the basic details on the div.
const displayInfo = document.getElementById('display-info-btn');
const infoPara = document.getElementById('info-para');
displayInfo.addEventListener('click', () => {
  if (mainDiv.style.display === 'none') {
    infoPara.style.display = 'none';
  } else if (mainDiv.style.display === 'block') {
    infoPara.style.display = 'block';
  }
});

//6:-Creating the select box with value 1-10, and when selected 9 display a message.
// eslint-disable-next-line no-unused-vars
function selectNumber(value) {
  if (value === '9') {
    document.getElementById('number-select').value = '10';
    document.getElementById('message').innerHTML = '9 is fully occupied. Please select another number.';
  } else {
    document.getElementById('message').innerHTML = `You selected ${value}`;
  }
}
// eslint-disable-next-line no-unused-vars
function colorChange() {
  document.getElementById('message-div').style.backgroundColor = 'yellow';
}
// eslint-disable-next-line no-unused-vars
function defaultColor() {
  document.getElementById('message-div').style.backgroundColor = 'white';
}

//7:- Creating an array with 10 elements and making 10 array by itterating the array.
const progLanguage = ['Java', 'HTML', 'CSS', 'Python', 'JavaScript', 'SQL', 'GO', 'PHP', 'C++', 'C#'];
// eslint-disable-next-line no-plusplus, no-restricted-syntax, guard-for-in
for (const i in progLanguage) {
  const newButton = document.createElement('button');
  newButton.textContent = progLanguage[i];
  document.body.appendChild(newButton);
}

//8:- Create a from in which when entered a value will change the name of the page to the same.
document.getElementById('titleForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const titleInput = document.getElementById('titleInput');
  const errorText = document.getElementById('errorText');
  const newTitle = titleInput.value.trim();
  if (newTitle.length <= 50) {
    document.title = newTitle;
  } else {
    errorText.textContent = 'Title must be 50 characters or fewer.';
  }
});

//9:-To show an alert when pressed cntrl + enter.
document.addEventListener('keydown', (event) => {
  if (event.ctrlKey && event.keyCode === 13) {
    alert('Control + Enter pressed!');
  }
});
