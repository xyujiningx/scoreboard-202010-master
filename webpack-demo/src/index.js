//CommonJS spec require, export
//webpack --> browser가 읽을 수 있도록 컴파일러해줌.
//import _ from 'lodash';
const _ =require('lodash');
import './style.css';
import './hello.scss';

function component() {
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack!!!'], ' ');

  return element;
}

document.body.appendChild(component());
