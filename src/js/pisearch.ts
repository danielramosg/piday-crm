import * as d3 from 'd3-selection';

// function loadPi() {
//   fetch(new URL('../digits/pi1000000.txt', import.meta.url).href)
//     .then((response) => response.text())
//     .then((txt) => {
//       //   console.log(txt);
//       //   let i = txt.indexOf('999999');
//       //   console.log(i - 1);
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// }

function createSearchApp() {
  const nbhRadius = 50; // number of digits before and after
  const width = 4000;
  const height = 450;

  const container = document.createElement('div');

  const canvas = d3
    .select(container)
    .append('div')
    .attr('id', 'canvasContainer')
    .append('canvas')
    .attr('width', width)
    .attr('height', height)
    .style('width', width)
    .style('height', height);

  const inputEl = d3
    .select(container)
    .append('div')
    .append('input')
    .attr('id', 'searchInput');
  const outputEl = d3
    .select(container)
    .append('div')
    .attr('id', 'searchOutput')
    .html('Loading...');

  const ctx = canvas.node()?.getContext('2d') as CanvasRenderingContext2D;
  ctx.font = '50px monospace';
  const charWidth = ctx.measureText('3').width;
  //   const charHeight = ctx.measureText('3').fontBoundingBoxAscent; // breaks on Firefox
  const charHeight = ctx.measureText('3').actualBoundingBoxAscent + 14;
  //   console.log('charWidth: ', charWidth);
  // console.log('charHeight: ', charHeight);

  const drawClear = () => {
    ctx.clearRect(0, 0, width, height);
  };

  const drawDefault = () => {
    const piece =
      '3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104';
    draw(piece.slice(0, 7).padStart(50, ' '), '', piece.slice(7, 57), 6);
    // ctx.clearRect(0, 0, width, height);
    // ctx.fillText('3.1415926535897932384...', 10, 60);
  };

  const draw = (prev: string, str: string, post: string, strIndex: number) => {
    ctx.clearRect(0, 0, width, height);
    // const padLeft = 10;
    const padTop = 280;
    const tickLength = 150;
    const startIndex = strIndex - prev.length;
    const displayedDigits = prev.length + str.length + post.length;
    const padLeft = (width - displayedDigits * charWidth) / 2;

    // draw previous digits
    ctx.fillText(prev, padLeft, padTop);

    // draw string of searched digits
    ctx.fillStyle = 'limegreen';
    ctx.fillRect(
      padLeft + charWidth * prev.length,
      padTop + 5,
      charWidth * str.length,
      -50,
    );
    ctx.fillStyle = '#000000';
    ctx.fillText(str, padLeft + charWidth * prev.length, padTop);

    //draw posterior digits
    ctx.fillText(
      post,
      padLeft + charWidth * (prev.length + str.length),
      padTop,
    );

    // draw ticks
    for (let d = startIndex; d < startIndex + displayedDigits; d++) {
      let t = d - startIndex;
      if (d % 10 === 0 && d >= 0) {
        const tickpos = padLeft + charWidth * (0.5 + t);
        ctx.beginPath();
        ctx.moveTo(tickpos, padTop - charHeight - 5);
        ctx.lineTo(tickpos, padTop - charHeight - tickLength - 5);
        ctx.stroke();
        ctx.font = '30px monospace';
        ctx.setTransform(0, -1, 1, 0, tickpos - 10, padTop - charHeight - 20);
        ctx.fillText(d.toLocaleString('fr'), 0, 0);
        ctx.resetTransform();
        ctx.font = '50px monospace';
      }
    }

    if (str.length) {
      ctx.beginPath();
      ctx.moveTo(padLeft + charWidth * (prev.length + 0.5), padTop + 20);
      ctx.lineTo(padLeft + charWidth * (prev.length + 0.5), padTop + 60);
      ctx.stroke();
      ctx.font = '30px monospace';
      ctx.fillText(
        strIndex.toLocaleString('fr'),
        padLeft + charWidth * (prev.length + 0.5) + 10,
        padTop + 60,
      );
      ctx.font = '50px monospace';
    }
  };

  drawDefault();

  // Load digits
  fetch(new URL('../digits/pi1000000.txt', import.meta.url).href)
    .then((response) => response.text())
    .then((digits) => {
      outputEl.html('Cerca alguns dígits...');

      const searchItUp = (str: string) => {
        const R = nbhRadius;
        const i = digits.indexOf(str);
        if (i < 0) {
          return { found: false, str: str };
        }

        const nbh = digits.slice(
          Math.max(i - R, 0),
          Math.min(i + str.length + R, digits.length),
        );
        const prev = digits.slice(Math.max(i - R, 0), i).padStart(R, ' ');
        const post = digits
          .slice(i + str.length, Math.min(i + str.length + R, digits.length))
          .padEnd(R, ' ');

        return {
          found: true,
          str: str,
          index: i - 1,
          neighborhood: nbh,
          prev: prev,
          post: post,
        }; // keep in mind that the file starts with '3.'
      };

      inputEl.on('input', () => {
        let str = inputEl.node()?.value as string;

        // validate only numbers
        if (str !== null) {
          str = str.replace(/[^0-9]/g, '');
          (inputEl.node() as HTMLInputElement).value = str;
        }

        if (str === '') {
          outputEl.html('Cerca alguns dígits...');
          drawDefault();
        } else {
          const location = searchItUp(str);
          //   console.log(location);
          if (location.found) {
            outputEl.html(`La seqüència ${location.str.toString()} es troba al 
            decimal ${location.index?.toLocaleString('fr')}.`);
            draw(
              location.prev as string,
              location.str as string,
              location.post as string,
              location.index as number,
            );
          } else {
            outputEl.html(
              'La seqüència no es troba entre els primers 1 000 000 dígits',
            );
            drawClear();

            // outputEl.html('Buscant...');
            // fetch(`http://localhost:3000/search/${str}`)
            //   .then((response) => response.json())
            //   .then((location) => {
            //     if (location.found) {
            //       outputEl.html(`La seqüència ${location.str} es troba al
            //     decimal ${Number(location.index).toLocaleString('fr')}.`);
            //       draw(
            //         location.prev as string,
            //         location.str as string,
            //         location.post as string,
            //         Number(location.index) as number,
            //       );
            //     } else {
            //       outputEl.html(
            //         'La seqüència no es troba entre els primers 1 000 000 000 dígits',
            //       );
            //       drawClear();
            //     }
            //   })
            //   .catch((err) => {
            //     console.error(err);
            //   });
            // //
          }
        }
      });
    })
    .catch((err) => {
      console.error(err);
    });

  return container;
}

export { createSearchApp };
