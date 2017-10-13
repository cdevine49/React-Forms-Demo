import './style.css';
import webpackIcon from './webpackIcon.png';
function component() {
  var element = document.createElement('div');
  element.innerHTML = "Hello Webpack";
  element.classList.add('hello');

  var image = new Image();
  image.src = webpackIcon;
  element.appendChild(image);
  return element;
};

document.body.appendChild(component());