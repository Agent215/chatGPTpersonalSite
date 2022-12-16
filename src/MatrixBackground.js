import React, { useState, useEffect } from 'react';

export default function MatrixBackground (){
    const [animationIndex, setAnimationIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setAnimationIndex((animationIndex + .01) % 2);
      }, 200);
  
      return () => clearInterval(interval);
    });
  
    const keywords = ['if', 'else', 'for', 'while', 'do', 'switch', 'int', 'double', 'string' , 'boolean',];
    const operators = ['+', '-', '*', '/', '%', '&&', '||', '!', '=' , '{', '}', 'INFO:', '\n\n', '\n' , '01001'];
  
    return (
      <div
        className="matrix-code"
        style={{
          backgroundColor: '#000000',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          textAlign:'left'
        }}
      >
        {Array.from({ length: 50 }).map((_, index) => (
          <p
            key={index}
            style={{
              margin: 0,
              padding: 0,
              color: '#00ff00',
              fontFamily: 'monospace',
              fontSize: '2.5vmin',
              opacity: (1 - (animationIndex - index) / 5) * 0.05
            }}
          >
            {Array.from({ length: 100 }).map((_, charIndex) => (
              <span
                key={charIndex}
                style={{
                  fontWeight: Math.random() < 0.2 ? 'bold' : 'normal'
                }}
              >
                {
                  charIndex % 100 === 0
                    ? keywords[Math.floor(Math.random() * keywords.length)]
                    : operators[Math.floor(Math.random() * operators.length)]
                }
              </span>
            ))}
          </p>
        ))}
      </div>
    );
  };