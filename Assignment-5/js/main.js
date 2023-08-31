/* eslint-disable linebreak-style */
// 1:- Make a form with fields name, phone number, place, company name, pin code.
/* a:- if any of the fields are empty on submitting it should show corresponding
error messages below all the required fields*/
const form = document.getElementById('myform');
const submitBtn = document.getElementById('submitbtn');
const populateBtn = document.getElementById('prepopulateBtn');
const errorMesgName = document.getElementById('errorMessagesName');
const errorMesgPhone = document.getElementById('errorMessagesPhone');
const errorMesgPlace = document.getElementById('errorMessagesPlace');
const errorMesgCompany = document.getElementById('errorMessagesCompany');
const errorMesgPin = document.getElementById('errorMessagesPin');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const place = document.getElementById('place').value;
  const company = document.getElementById('company').value;
  const pincode = document.getElementById('pincode').value;

  errorMesgName.innerHTML = '';
  errorMesgPhone.innerHTML = '';
  errorMesgPlace.innerHTML = '';
  errorMesgCompany.innerHTML = '';
  errorMesgPin.innerHTML = '';
  let errors = false;

  if (name === '') {
    errorMesgName.innerHTML = 'Name is required<br>';
    errors = true;
  }
  const phoneCheck = Number(phone);
  if (!phone.trim()) {
    errorMesgPhone.innerHTML = 'Phone number is required<br>';
    errors = true;
  }
  // c:- The minimum length of the phone number should be 10
  if (phone.trim().length < 10) {
    errorMesgPhone.innerHTML = 'Enter proper phone number (minimum 10 digits)<br>';
    errors = true;
  }
  // b:-pin code and mobile number fields should not be submitted with non-integer values
  if (isNaN(phoneCheck)) {
    errorMesgPhone.innerHTML = 'Phone number should be an integer<br>';
    errors = true;
  }

  if (!place.trim()) {
    errorMesgPlace.innerHTML = 'Place is required<br>';
    errors = true;
  }

  if (!company.trim()) {
    errorMesgCompany.innerHTML = 'Company name is required<br>';
    errors = true;
  }
  const pinCheck = Number(pincode);
  if (!pincode.trim()) {
    errorMesgPin.innerHTML = 'Pincode is required<br>';
    errors = true;
  }
  if (isNaN(pinCheck)) {
    errorMesgPin.innerHTML = 'Pincode should be an integer<br>';
    errors = true;
  }
  // d:- On submission of the form, store the details in the local storage and clear the form
  if (!errors) {
    const formData = {
      name,
      phone,
      place,
      company,
      pincode,
    };
    localStorage.setItem('formData', JSON.stringify(formData));
    form.reset();
    populateBtn.disabled = false;
  }
});

if (localStorage.getItem('formData')) {
  populateBtn.disabled = false;
}
/* e:-Make a prepopulate button, which when clicked will populate the
form with values in the local storage if it exists*/
populateBtn.addEventListener('click', () => {
  const formData = JSON.parse(localStorage.getItem('formData'));
  if (formData) {
    document.getElementById('name').value = formData.name;
    document.getElementById('phone').value = formData.phone;
    document.getElementById('place').value = formData.place;
    document.getElementById('company').value = formData.company;
    document.getElementById('pincode').value = formData.pincode;
  }
});

//2:- creating a div and button using JS only.
const secDiv = document.createElement('div');
secDiv.style.display = 'none';
document.body.appendChild(secDiv);
const thirdBtn = document.createElement('button');
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
