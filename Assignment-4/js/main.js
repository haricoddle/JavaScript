/* eslint-disable linebreak-style */
// 1:- Create a function to-
function firstQestion() {
  // a:-Calculate the height of the end user's browser screen.
  const scrnHeight = window.screen.height;
  console.log(`Height of the screen is ${scrnHeight}`);

  // b:-To console the name of the web host
  const host = window.location.hostname;
  console.log(`The web host is ${host}`);

  // c:-To show a warning message if there is no https protocol used in the visited website.
  const isProtocl = window.location.protocol;
  if (isProtocl === 'https') {
    console.log('Website uses HTTPS protocol.');
  } else {
    console.warn('Website dosen\'t contain https');
  }

  // d:-To show an alert message after 10sec while the page is refreshed.
  // eslint-disable-next-line no-restricted-globals
  addEventListener('load', () => {
    setTimeout(() => {
      alert('The page has been refreshed');
    }, 10000);
  });
}
firstQestion();

/* 2:-Store your basic details in local storage of the browser every time the page loads,
then console them and finally delete them after 1 minute of the page load*/
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

/* 3:- Create a form and submit button, on click of the button
store your basic details from the form in the cookies.*/
const form = document.getElementById('reg-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const username = document.getElementById('name').value;
  const userAge = document.getElementById('age').value;
  const userDetails = {
    username: username,
    userAge: userAge,
  };
  const userDetailsJSON = JSON.stringify(userDetails);
  document.cookie = `userData=${userDetailsJSON}`;
  console.log(document.cookie);
});

// 4:-Redirect to the homepage of google from the console.
console.log(window.location.assign = 'https://www.google.com/');

// 5:-Create a div with background color red, create buttons
// a:-to hide the div
const mainDiv = document.getElementById('details-block');
const hideBtn = document.getElementById('hide-btn');
hideBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (mainDiv.style.display === 'block') {
    mainDiv.style.display = 'none';
  } else {
    mainDiv.style.display = 'block';
  }
});

// b:-to change the background color of the div
const colorBtn = document.getElementById('color-btn');
colorBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (mainDiv.style.backgroundColor === 'red') {
    mainDiv.style.backgroundColor = 'yellow';
  } else {
    mainDiv.style.backgroundColor = 'red';
  }
});

// c:- to show your basic details on the div, the details should hide/show, on the click.
const detailsPara = document.getElementById('details-para');
const detailsBtn = document.getElementById('details-btn');
detailsBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (detailsPara.style.display === 'block') {
    detailsPara.style.display = 'none';
  } else {
    detailsPara.style.display = 'block';
  }
});

/* 6:-Create a select box with numbers 1 to 10,  when selected 9,you should change
the selection to 10and show a message that 9 is fully occupied please select another number",
 on hovering the div it should change the background color of the div into a highlighting shade*/
// eslint-disable-next-line no-unused-vars
function selectNumber(value) {
  if (value === '9') {
    document.getElementById('number-select').value = '10';
    document.getElementById('message').innerHTML = '9 is fully occupied. Please select another number.';
  } else {
    document.getElementById('message').innerHTML = `You selected ${value}`;
  }
}
const messageArea = document.getElementById('message-div');
messageArea.addEventListener('mouseover', () => {
  messageArea.style.backgroundColor = 'yellow';
});
messageArea.addEventListener('mouseout', () => {
  messageArea.style.backgroundColor = 'white';
});

/* 7:- Consider an array with names of 10 programming languages, make 10 buttons by iterating
this array, when clicked on each button the name of the programming language should be shown
in a corresponding div*/
const progLanguage = ['Java', 'HTML', 'CSS', 'Python', 'JavaScript', 'SQL', 'GO', 'PHP', 'C++', 'C#'];
// eslint-disable-next-line no-restricted-syntax, guard-for-in
for (const i in progLanguage) {
  const newButton = document.createElement('button');
  newButton.textContent = progLanguage[i];
  document.body.appendChild(newButton);
  clickListener(newButton, progLanguage[i]);
}
const progMesg = document.getElementById('sev-mesg');
function clickListener(button, language) {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    progMesg.innerHTML = `You clicked on ${language}`;
  });
}
/* 8:-Create a form with a text field which when submitted, will change the tab title to whatever
is entered, limit the field to 50 characters*/
const titleForm = document.getElementById('titleForm');
titleForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const titleInput = document.getElementById('titleInput');
  const errorText = document.getElementById('errorText');
  const newTitle = titleInput.value.trim();
  if (newTitle.length <= 50) {
    document.title = newTitle;
  } else {
    errorText.textContent = 'Title must be 50 characters or fewer.';
  }
});

// 9:-When the control+enter key is pressed show an alert message.
document.addEventListener('keydown', (event) => {
  if (event.ctrlKey && event.keyCode === 13) {
    alert('Control + Enter pressed!');
  }
});
