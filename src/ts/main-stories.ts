import ready from 'document-ready';
import { renderKaTeX, makeHeader } from './helpers';

ready(() => {
  makeHeader('stories');
  renderKaTeX(document.body);
});
