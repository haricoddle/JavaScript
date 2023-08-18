/* eslint-disable linebreak-style */
// eslint-disable-next-line no-var
var count = 0;
const pp = document.getElementById('message');
const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const div3 = document.getElementById('div3');
const div4 = document.getElementById('div4');
const div5 = document.getElementById('div5');
const div6 = document.getElementById('div6');
const div7 = document.getElementById('div7');
const div8 = document.getElementById('div8');
const div9 = document.getElementById('div9');

div1.addEventListener('click', () => {
// eslint-disable-next-line no-plusplus
  count++;
  printXO(div1);
  console.log(count);
});
div2.addEventListener('click', () => {
// eslint-disable-next-line no-plusplus
  count++;
  printXO(div2);
  console.log(count);
});

div3.addEventListener('click', () => {
// eslint-disable-next-line no-plusplus
  count++;
  printXO(div3);
  console.log(count);
});

div4.addEventListener('click', () => {
// eslint-disable-next-line no-plusplus
  count++;
  printXO(div4);
  console.log(count);
});

div5.addEventListener('click', () => {
// eslint-disable-next-line no-plusplus
  count++;
  printXO(div5);
  console.log(count);
});

div6.addEventListener('click', () => {
  // eslint-disable-next-line no-plusplus
  count++;
  printXO(div6);
  console.log(count);
});

div7.addEventListener('click', () => {
// eslint-disable-next-line no-plusplus
  count++;
  printXO(div7);
  console.log(count);
});

div8.addEventListener('click', () => {
  // eslint-disable-next-line no-plusplus
  count++;
  printXO(div8);
  console.log(count);
});

div9.addEventListener('click', () => {
// eslint-disable-next-line no-plusplus
  count++;
  printXO(div9);
  console.log(count);
});
function printXO(div) {
  if (count <= 9) {
    if (count % 2 !== 0) {
      div.innerHTML = 'X';
      test();
    } else {
      div.innerHTML = 'O';
      test();
    }
  } else {
    alert('game has ended');
    pp.innerHTML = '***Its a Draw.***';
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
