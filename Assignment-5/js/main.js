/* eslint-disable linebreak-style */
//1:- Validate the form and check for empty feilds.
const form = document.getElementById('form');
const names = document.getElementById('name');
const phone = document.getElementById('phone');
const place = document.getElementById('place');
const company = document.getElementById('company');
const pin = document.getElementById('pin');

// eslint-disable-next-line arrow-parens
form.addEventListener('submit', e => {
  e.preventDefault();

  // eslint-disable-next-line no-use-before-define
  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
};

// eslint-disable-next-line arrow-parens
const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

const validateInputs = () => {
  const nameValue = names.value.trim();
  const phoneValue = phone.value.trim();
  const placeValue = place.value.trim();
  const companyValue = company.value.trim();
  const pinValue = pin.value.trim();
  //a:-Checking for empty feilds
  if (nameValue === '') {
    setError(names, 'Name is required');
  } else {
    setSuccess(names);
  }

  if (phoneValue === '') {
    setError(phone, 'Phone is required');
  } else if (phoneValue.length > 10) {
    //c:minimum length of phone number
    setError(phone, 'Enter only 10 digits');
  } else {
    setSuccess(phone);
  }

  if (placeValue === '') {
    setError(place, 'Enter your place');
  } else {
    setSuccess(place);
  }

  if (companyValue === '') {
    setError(company, 'Enter your company name');
  } else {
    setSuccess(company);
  }
  if (pinValue === '') {
    setError(pin, 'Enter your Pincode');
  } else {
    setSuccess(pin);
  }
};
//d:-Stroring the entered details to localStrorage.
// eslint-disable-next-line arrow-parens
form.addEventListener('submit', e => {
  e.preventDefault();
  const myobj = {
    name: names.value,
    phone: phone.value,
    place: place.value,
    company: company.value,
    pin: pin.value,
  };
  const myobjString = JSON.stringify(myobj);
  localStorage.setItem('myObj', myobjString);
});
//e:-Prepopulate the form with value stored in localstorage.
const prePopulateBtn = document.getElementById('prePopulate');
// eslint-disable-next-line arrow-parens
prePopulateBtn.addEventListener('submit', e => {
  e.preventDefault();
  const localData = localStorage.getItem('myObj');
  if (localData) {
    // eslint-disable-next-line no-unused-vars
    const myObj = JSON.parse(localData);
    // document.getElementById('name') = myObj.name;
    // document.getElementById('phone') = myObj.name;
    // document.getElementById('place') = myObj.name;
    // document.getElementById('company') = myObj.name;
    // document.getElementById('pin') = myObj.name;
    // eslint-disable-next-line no-restricted-globals
    document.form[form][name].value = myObj.name;
    document.form[form][phone].value = myObj.phone;
    document.form[form][company].value = myObj.company;
    document.form[form][place].value = myObj.place;
    document.form[form][pin].value = myObj.pin;
  }
});
//2:- creating a div and button using JS only.
const secDiv = document.createElement('div');
secDiv.style.display = 'none';
document.body.appendChild(secDiv);
const thirdBtn = document.createElement('btn');
thirdBtn.textContent = 'Basic details';
document.body.appendChild(thirdBtn);

// eslint-disable-next-line arrow-parens
thirdBtn.addEventListener('click', e => {
  e.preventDefault();
  const details = 'Name: Hari \n Age: 24';
  secDiv.textContent = details;
  secDiv.style.display = 'block';
});
//3:- Creating a private variable and consoling it by accessing it.
// eslint-disable-next-line no-unused-vars
const obj = (function () {
  let favMovie = 'Shutter Island';
  return {
    get favMovie() {
      return favMovie;
    },
    set favMovie(value) {
      favMovie = value;
    },
  };
}());
console.log(obj.favMovie);
obj.favMovie = 'Interstellar';
console.log(obj.favMovie);
//4:- Creating a Static Variable and consoling it by accessing it.
class statExample {
  static myBike = 'Yamaha';
}
console.log(statExample.myBike);
