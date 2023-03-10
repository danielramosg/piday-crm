import ready from 'document-ready';
import { renderKaTeX, makeHeader } from './helpers';
import createGallery from './photos';

ready(() => {
  makeHeader('photos');
  renderKaTeX(document.body);
  (document.getElementById('gallery') as HTMLElement).appendChild(
    createGallery(),
  );
});
