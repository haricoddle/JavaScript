/* eslint-disable linebreak-style */
const a = ['1.jpg', '2.jpg', '3.jpg'];
let selectedIndex = 0;

// eslint-disable-next-line no-unused-vars
function updateImg(type) {
  if (type === 0) {
    // eslint-disable-next-line no-plusplus
    selectedIndex--;
  } else {
    // eslint-disable-next-line no-plusplus
    selectedIndex++;
  }

  if (selectedIndex < 0) {
    selectedIndex = a.length - 1;
  } else if (selectedIndex >= a.length) {
    selectedIndex = 0;
  }

  document.getElementById('imgs').src = `images/${a[selectedIndex]}`;
}
