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
  // const form = document.getElementById('reg-form');
  // // eslint-disable-next-line prefer-arrow-callback
  // form.addEventListener('submit', function (event) {
  //   event.preventDefault();
  //   const username = document.getElementById('name').value;
  //   console.log(username);
  //   const userAge = document.getElementById('age').value;
  //   console.log(userAge);
  // });
  //4
  // eslint-disable-next-line no-unused-vars
  // function directFunc() {
  //   window.location.href = 'https://www.google.com/';
  // }
  //4
  console.log(window.location.assign.href = 'https://www.google.com/');
  
  const form = document.getElementById('reg-form');
  // eslint-disable-next-line prefer-arrow-callback
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('name').value;
    const userAge = document.getElementById('age').value;
    // eslint-disable-next-line no-undef
    document.cookie = username.toString();
    document.cookie = userAge.toString();
    console.log(document.cookie);
    console.log(document.cookie);
  });
  //5
  //a
  const hideBtn = document.getElementById('hide-div');
  hideBtn.addEventListener('onclick', () => {
    const hideDiv = document.getElementById('main-div');
    if (hideDiv.style.display !== 'none') {
      hideDiv.style.display = 'none';
    } else {
      hideDiv.style.display = 'block';
    }
  });
  //b
  const changeBtn = document.getElementById('change-color');
  changeBtn.addEventListener('onclick', () => {
    const hideDiv = document.getElementById('main-div');
    if (hideDiv.style.color !== 'yellow') {
      hideDiv.style.display = 'yellow';
    } else {
      hideDiv.style.display = 'red';
    }
  });
  //c
  const paraDispBtn = document.getElementById('display-info');
  paraDispBtn.addEventListener('onclick', () => {
    const divPara = document.getElementById('para');
    if (divPara.style.color !== 'none') {
      divPara.style.display = 'none';
    } else {
      divPara.style.display = 'block';
    }
  });
  //6
  // eslint-disable-next-line no-unused-vars
  function selectNumber(value) {
    if (value === '9') {
      document.getElementById('numberSelect').value = '10';
      document.getElementById('message').innerHTML = '9 is fully occupied. Please select another number.';
    } else {
      document.getElementById('message').innerHTML = `You selected ${value}`;
    }
  }
  
  // eslint-disable-next-line no-unused-vars
  function colorChange() {
    document.getElementById('messageDiv').style.backgroundColor = 'yellow';
  }
  
  // eslint-disable-next-line no-unused-vars
  function resetColor() {
    document.getElementById('messageDiv').style.backgroundColor = 'white';
  }
  //7
  document.getElementById('titleForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const titleInput = document.getElementById('titleInput');
    const errorText = document.getElementById('errorText');
    
    const newTitle = titleInput.value.trim();
    
    if (newTitle.length <= 50) {
      document.title = newTitle;
      errorText.textContent = ''; 
    } else {
      errorText.textContent = 'Title must be 50 characters or fewer.';
    }
  });
  //9
  document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'Enter') {
        alert('Control + Enter pressed!');
    }
  });