import * as d3 from 'd3-selection';

const encoderOpts = [
  {
    id: 'alpha',
    txt: 'Alfabètic (A=01, ..., Z=26)',
    validator: (str: string) => {
      // validate only letters, lowercase
      if (str !== null) {
        return str.replace(/[^a-zA-Z]/g, '').toUpperCase();
      }
    },
    encoder: (str: string) =>
      str
        .toUpperCase()
        .split('')
        .map((c) => (c.charCodeAt(0) - 64).toLocaleString().padStart(2, '0'))
        .join(''),
  },
  {
    id: 'alphaNoZeroes',
    txt: 'Alfabètic (A=1, ..., Z=26)',
    validator: (str: string) => {
      // validate only letters, lowercase
      if (str !== null) {
        return str.replace(/[^a-zA-Z]/g, '').toUpperCase();
      }
    },
    encoder: (str: string) =>
      str
        .toUpperCase()
        .split('')
        .map((c) => (c.charCodeAt(0) - 64).toLocaleString())
        .join(''),
  },
  {
    id: 'unicode',
    txt: 'Unicode',
    validator: (str: string) => str,
    encoder: (str: string) =>
      str
        .split('')
        .map((c) => c.charCodeAt(0).toLocaleString())
        .join(''),
  },
];

function createTextEncodeApp() {
  const container = document.createElement('div');

  const inputSide = d3.select(container).append('span');
  const outputSide = d3.select(container).append('span');

  const inputEl = inputSide
    .append('div')
    .append('input')
    .attr('id', 'textEncodeInput');

  const outputEl = outputSide.append('div').attr('id', 'textEncodeOutput');

  outputSide
    .append('div')
    .append('button')
    .classed('btn btn-secondary', true)
    .html(`Cerca'l`)
    .on('click', () => {
      const str = outputEl.html();
      (d3.select('#searchInput').node() as HTMLInputElement).value = str;
      d3.select('#searchInput').dispatch('input');
      (d3.select('#searchApp').node() as HTMLElement).scrollIntoView();
    });

  const options = inputSide
    .append('div')
    .selectAll('div')
    .data(encoderOpts)
    .enter()
    .append('div');

  const opRadios = options
    .append('input')
    .attr('type', 'radio')
    .attr('id', (d) => d.id)
    .attr('name', 'encodeOption')
    .attr('value', (d) => d.id)
    .on('change', (ev, d) => {
      //   console.log(d);
      let str = inputEl.node()?.value as string;
      str = d.validator(str) as string;
      (inputEl.node() as HTMLInputElement).value = str;

      outputEl.html(d.encoder(str));

      inputEl.on('input', () => {
        let str = inputEl.node()?.value as string;
        str = d.validator(str) as string;
        (inputEl.node() as HTMLInputElement).value = str;

        outputEl.html(d.encoder(str));
      });
    });

  options
    .append('label')
    .attr('for', (d) => d.id)
    .html((d) => d.txt);

  const defaultOp = opRadios.filter((d) => d.id === 'alphaNoZeroes');
  defaultOp.attr('checked', true);
  defaultOp.dispatch('change');

  return container;
}

export { createTextEncodeApp };
