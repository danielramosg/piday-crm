import ready from 'document-ready';
import { renderKaTeX, makeHeader } from './helpers';
import { createSearchApp } from './pisearch';
import { createTextEncodeApp } from './textEncode';

ready(() => {
  (document.getElementById('searchApp') as HTMLElement).appendChild(
    createSearchApp(),
  );

  (document.getElementById('textEncodeApp') as HTMLElement).appendChild(
    createTextEncodeApp(),
  );

  makeHeader();
  renderKaTeX(document.body);
});
