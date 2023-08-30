/* eslint-disable linebreak-style */
// eslint-disable-next-line vars-on-top, no-var
let htmlContent = '';
const resultMesg = document.getElementById('tbody');
const xhr = new XMLHttpRequest();
xhr.open('get', 'https://jsonplaceholder.typicode.com/users', false);
xhr.send();
const result = JSON.parse(xhr.responseText);
// eslint-disable-next-line no-plusplus
for (let i = 0; i < result.length; ++i) {
  const arrData = result[i];
  /* eslint-disable-next-line prefer-template, no-unused-expressions,
   no-sequences, no-useless-concat*/
  htmlContent = htmlContent + '<tr><td>' + arrData.id + '<td>' + '<td>' + arrData.name + '<td>' + arrData.username + '<td></tr><br>';
}
resultMesg.innerHTML = htmlContent;
