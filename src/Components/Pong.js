import React, { useState, useEffect } from 'react';

const PongGame = () => {
  // Set the dimensions of the game area
  const gameWidth = 400;
  const gameHeight = 300;

  // State variables to track the position of the ball and paddles
  const [ballX, setBallX] = useState(gameWidth / 2);
  const [ballY, setBallY] = useState(gameHeight / 2);
  const [paddle1Y, setPaddle1Y] = useState(gameHeight / 2);
  const [paddle2Y, setPaddle2Y] = useState(gameHeight / 2);

  // Use the mouse movement to control the position of paddle1
  useEffect(() => {
    const handleMouseMove = (event) => {
      setPaddle1Y(event.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Function to update the position of the ball
  const updatePosition = () => {
    // Update the position of the ball using some dummy logic for now
    setBallX((prevX) => prevX + 5);
    setBallY((prevY) => prevY + 5);

    // If the ball hits the top or bottom of the game area, reverse its direction
    if (ballY < 0 || ballY > gameHeight) {
      setBallY((prevY) => gameHeight - prevY);
    }
  };

  // Set up an interval to update the position of the ball every 10 milliseconds
  useEffect(() => {
    const interval = setInterval(updatePosition, 10);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'blue',
      }}
    >
      <div
        style={{
          border: '1px solid black',
          width: gameWidth,
          height: gameHeight,
          position: 'relative',
        }}
      >
        {/* Display the ball and paddles using the state variables */}
        <div
          style={{
            position: 'absolute',
            left: ballX,
            top: ballY,
            width: 10,
            height: 10,
            backgroundColor: 'white',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: paddle1Y,
            width: 10,
            height: 50,
            backgroundColor: 'green',
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: paddle2Y,
            width: 10,
            height: 50,
            backgroundColor: 'green',
          }}
        />
      </div>
    </div>
  );
};

export default PongGame;
