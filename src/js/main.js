import ready from 'document-ready';
import renderMathInElement from '../../node_modules/katex/dist/contrib/auto-render';
import { createSearchApp, loadPi } from './pisearch';
import { createTextEncodeApp } from './textEncode';

function main() {
  Array.from(document.getElementsByClassName('num-printed-digits')).forEach(
    (element) => {
      element.innerHTML = 'NUM-DIGITS';
    },
  );

  renderMathInElement(document.body, {
    // customised options
    // • auto-render specific keys, e.g.:
    delimiters: [
      { left: '$$', right: '$$', display: true },
      { left: '$', right: '$', display: false },
      { left: '\\(', right: '\\)', display: false },
      { left: '\\[', right: '\\]', display: true },
    ],
    // • rendering keys, e.g.:
    throwOnError: false,
  });

  // loadPi();

  document.getElementById('searchApp').appendChild(createSearchApp());
  document.getElementById('textEncodeApp').appendChild(createTextEncodeApp());
}

ready(main);
