/* eslint-disable linebreak-style */
// eslint-disable-next-line no-var
var count = 0;
const pp = document.getElementById('message');

const div1 = document.getElementById('div1');
div1.addEventListener('click', onClick);

const div2 = document.getElementById('div2');
div2.addEventListener('click', onClick);

const div3 = document.getElementById('div3');
div3.addEventListener('click', onClick);

const div4 = document.getElementById('div4');
div4.addEventListener('click', onClick);

const div5 = document.getElementById('div5');
div5.addEventListener('click', onClick);

const div6 = document.getElementById('div6');
div6.addEventListener('click', onClick);

const div7 = document.getElementById('div7');
div7.addEventListener('click', onClick);

const div8 = document.getElementById('div8');
div8.addEventListener('click', onClick);

const div9 = document.getElementById('div9');
div9.addEventListener('click', onClick);

function printXO(div) {
  if (count <= 9) {
    if (count % 2 !== 0) {
      div.innerHTML = 'X';
      test();
    } else {
      div.innerHTML = 'O';
      test();
    }
  }
}

function test() {
  // eslint-disable-next-line no-mixed-operators
  if (div1.textContent === 'X' && div2.textContent === 'X' && div3.textContent === 'X' || div1.textContent === 'X' && div4.textContent === 'X' && div7.textContent === 'X' || div7.textContent === 'X' && div8.textContent === 'X' && div9.textContent === 'X' || div9.textContent === 'X' && div6.textContent === 'X' && div3.textContent === 'X' || div1.textContent === 'X' && div5.textContent === 'X' && div9.textContent === 'X' || div3.textContent === 'X' && div5.textContent === 'X' && div7.textContent === 'X' || div2.textContent === 'X' && div5.textContent === 'X' && div8.textContent === 'X') {
    pp.innerHTML = '***The winner is X***';

  // eslint-disable-next-line no-mixed-operators
  } else if (div1.textContent === 'O' && div2.textContent === 'O' && div3.textContent === 'O' || div1.textContent === 'O' && div4.textContent === 'O' && div7.textContent === 'O' || div7.textContent === 'O' && div8.textContent === 'O' && div9.textContent === 'O' || div9.textContent === 'O' && div6.textContent === 'O' && div3.textContent === 'O' || div1.textContent === 'O' && div5.textContent === 'O' && div9.textContent === 'O' || div3.textContent === 'O' && div5.textContent === 'O' && div7.textContent === 'O' || div2.textContent === 'O' && div5.textContent === 'O' && div8.textContent === 'O') {
    pp.innerHTML = '****O is the Winner****';
  }
}
function onClick() {
  // eslint-disable-next-line no-plusplus
  count++;
  printXO(this);
  console.log(count);
  this.removeEventListener('click', onClick);
}
