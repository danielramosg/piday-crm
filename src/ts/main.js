import ready from 'document-ready';
import { renderKaTeX, makeHeader } from './helpers';

function main() {
  // Array.from(document.getElementsByClassName('num-printed-digits')).forEach(
  //   (element) => {
  //     element.innerHTML = 'NUM-DIGITS';
  //   },
  // );

  makeHeader();
  renderKaTeX(document.body);
  console.log(__filename);

  // loadPi();
}

ready(main);
