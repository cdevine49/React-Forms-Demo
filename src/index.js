import printMe from './print.js';
function component() {
  var element = document.createElement('div');
  var button = document.createElement('button');

  element.innerHTML = "Hello Webpack";

  button.innerHTML = 'Console log';
  button.onclick = printMe;

  element.appendChild(button);

  return element;
};

document.body.appendChild(component());