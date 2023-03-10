import gallery_assets from '../gallery/gallery_assets';
import * as d3 from 'd3-selection';

export default function createGallery() {
  const container = document.createElement('div');

  d3.select(container)
    .selectAll('span')
    .data(gallery_assets)
    .enter()
    .append('span')
    .classed('gallery-item', true)
    .append('a')
    .attr('target', '_blank')
    .attr('href', (d) => d)
    .append('img')
    .attr('src', (d) => d);

  return container;
}
