/* eslint-disable linebreak-style */
// 1
// a
function screenHeight() {
  const scrnHeight = window.screen.height;
  console.log(`Height of the screen is ${scrnHeight}`);
}
screenHeight();
// b
function hostName() {
  const host = window.location.hostname;
  console.log(`The web host is ${host}`);
}
hostName();
function proctol() {
  const isProtocl = window.location.protocol;
  if (isProtocl === 'https') {
    console.log('Website is safe');
  } else {
    console.warn('Website dosen\'t contain https');
  }
}
proctol();
// d
// eslint-disable-next-line no-restricted-globals
addEventListener('load', () => {
  setTimeout(() => {
    alert('The page has been refreshed');
  }, 10000);
});
// 2
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
//3
const form = document.getElementById('reg-form');
// eslint-disable-next-line prefer-arrow-callback
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const username = document.getElementById('name').value;
  const userAge = document.getElementById('age').value;
  // eslint-disable-next-line no-undef
  document.cookie = username;
  document.cookie = userAge.toString();
  console.log(document.cookie);
});
//4
console.log(window.location.assign = 'https://www.google.com/');

//5
//a
const mainDiv = document.getElementById('main-div');
const hideButton = document.getElementById('hide-div');
hideButton.addEventListener('click', () => {
  if (mainDiv.style.display === 'block') {
    // eslint-disable-next-line no-unused-expressions
    mainDiv.style.display = 'none';
  } else {
    mainDiv.style.display = 'block';
  }
});

//b
const changeColor = document.getElementById('change-color');
changeColor.addEventListener('click', () => {
  // if (mainDiv.style.backgroundColor === 'default') {
  mainDiv.style.backgroundColor = 'yellow';
  // } else {
  //   mainDiv.style.backgroundColor = 'none';
  // }
});

//c
const displayInfo = document.getElementById('display-info');
const infoPara = document.getElementById('info-para');
displayInfo.addEventListener('click', () => {
  if (mainDiv.style.display === 'none') {
    infoPara.style.display = 'none';
  } else {
    infoPara.style.display = 'block';
  }
});

//6
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
function highColor() {
  document.getElementById('messageDiv').style.backgroundColor = 'yellow';
}
// eslint-disable-next-line no-unused-vars
function defaultColor() {
  document.getElementById('messageDiv').style.backgroundColor = 'white';
}

//7
const progLanguage = ['Java', 'HTML', 'CSS', 'Python', 'JavaScript', 'SQL', 'GO', 'PHP', 'C++', 'C#'];
// eslint-disable-next-line no-plusplus, no-restricted-syntax, guard-for-in
for (const i in progLanguage) {
  const newButton = document.createElement('button');
  newButton.textContent = progLanguage[i];
  document.body.appendChild(newButton);
}

//8
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

//9
document.addEventListener('keydown', (event) => {
  if (event.ctrlKey && event.key === 'Enter') {
    alert('Control + Enter pressed!');
  }
});
