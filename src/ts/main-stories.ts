import ready from 'document-ready';
import { renderKaTeX, makeHeader } from './helpers';

ready(() => {
  makeHeader();
  renderKaTeX(document.body);
});
