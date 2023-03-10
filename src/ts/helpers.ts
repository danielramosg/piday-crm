import renderMathInElement from 'katex/dist/contrib/auto-render';

const renderKaTeX = (element: HTMLElement) => {
  renderMathInElement(document.body, {
    // customised options
    // • auto-render specific keys, e.g.:
    delimiters: [
      { left: '$$', right: '$$', display: true },
      { left: '$', right: '$', display: false },
      // { left: '\\(', right: '\\)', display: false },
      // { left: '\\[', right: '\\]', display: true },
    ],
    // • rendering keys, e.g.:
    throwOnError: false,
  });
};

const makeHeader = (opt: string) => {
  fetch(new URL('../html/header.html', import.meta.url).href)
    .then((resp) => resp.text())
    .then((txt) => {
      const elem = document.getElementById('header') as HTMLElement;
      console.log(txt);
      elem.innerHTML = txt;
      renderKaTeX(elem);

      const navElem = document.getElementById(`nav-${opt}`) as HTMLElement;
      navElem.classList.add('active');
      navElem.setAttribute('href', '#');
    });
};

export { renderKaTeX, makeHeader };
