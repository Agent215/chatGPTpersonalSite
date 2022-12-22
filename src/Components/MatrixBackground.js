import React, { useEffect, useRef } from 'react';

 /*
 we want to make the text fall in columns. Each column will be 20px wide. 
 And in each frame of the animation, we will put a single character at the end of each column. 
 Initially the end (y coordinate) of each column is at 0. 
 I adapted this code from https://dev.to/gnsp/making-the-matrix-effect-in-javascript-din
 and here https://pablo.gg/en/blog/coding/creating-a-matrix-source-code-effect-background-for-my-website-with-react/
  */
export default function MatrixBackground ({ timeout }) {
  const canvas = useRef();

  useEffect(() => {
    const context = canvas.current.getContext('2d');

    const width = document.body.offsetWidth;
    const height = document.body.offsetHeight;
    canvas.current.width = width;
    canvas.current.height = height;

    // context.fillStyle = '#000';
    // context.fillRect(0, 0, width, height);

    // calculate how many 'lines' to show and animate
    const columns = Math.floor(width / 20) + 1;
    const yPositions = Array.from({ length: columns }).fill(0);

    context.fillStyle = '#000';
    context.fillRect(0, 0, width, height);

    const matrixEffect = () => {
        // Draw a semitransparent black rectangle on top of previous drawing
        context.fillStyle = '#0002';
        context.fillRect(0, 0, width, height);

        // Set color to green and font to 15pt monospace in the drawing context
        context.fillStyle = "rgba(0, 240, 0, 0.5)";
        context.font = '15pt monospace';

   
         // for each column put a random character at the end
        yPositions.forEach((y, index) => {
            // generate a random character
            const text = String.fromCharCode(Math.random() * 128);
            // x coordinate of the column, y coordinate is already given
            const x = index * 20;
            // render the character at (x, y)
            context.fillText(text, x, y);
            // randomly reset the end of the column if it's at least 100px high
            if (y > 100 + Math.random() * 10000) {
                yPositions[index] = 0;
            } else {
                // otherwise just move the y coordinate for the column 20px down,
                yPositions[index] = y + 20;
            }
        });
    };

    const interval = setInterval(matrixEffect, timeout);
    return () => {
        clearInterval(interval);
    };
    //timeout cant bes passed as a prop.
  }, [canvas, timeout]);

  return (
      <div
          style={{
              // custom styles to make it show up in the background
              background: '#000000',
              overflow: 'hidden',
              position: 'fixed',
              height: '100%',
              width: '100%',
              zIndex: -1,
              left: '0',
              top: '0',
          }}
      >
          <canvas
              ref={canvas}
          />
      </div>
  );
}
