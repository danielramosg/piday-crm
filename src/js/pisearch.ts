import * as d3 from 'd3-selection';

function loadPi() {
  fetch(new URL('../digits/pi1000000.txt', import.meta.url).href)
    .then((response) => response.text())
    .then((txt) => {
      console.log(txt);
      let i = txt.indexOf('999999');
      console.log(i - 1);
    })
    .catch((err) => {
      console.error(err);
    });
}

function createSearchApp() {
  const R = 1; // number of digits before and after

  const container = document.createElement('div');
  const inputEl = d3.select(container).append('input');
  const outputEl = d3
    .select(container)
    .append('div')
    .attr('id', 'searchOutput')
    .html('Loading...');

  fetch(new URL('../digits/pi1000000.txt', import.meta.url).href)
    .then((response) => response.text())
    .then((digits) => {
      outputEl.html('');

      const searchItUp = (str: string) => {
        const i = digits.indexOf(str);
        const nbh = digits.slice(i - 1 - R, i + R + str.length);
        return { str: str, index: i - 1, neighborhood: nbh }; // keep in mind that the file starts with '3.'
      };

      inputEl.on('input', () => {
        const str = inputEl.node()?.value as string;
        const found = searchItUp(str);
        outputEl.html('Posició: ' + found.index.toString());
      });
    })
    .catch((err) => {
      console.error(err);
    });

  return container;
}

export { createSearchApp, loadPi };
