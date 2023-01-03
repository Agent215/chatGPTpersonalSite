import React from 'react';
import { Fade } from 'react-bootstrap';
import { keyframes } from 'styled-components';

function Title() {
  return (
    <div >
      <h1 className='home-title'> ⚗️ BRAHM SCHULTZ 👽</h1>
      
    </div>
  );
}

export default Title;

const styles = {
  title: {
    fontSize: 55,
    fontFamily: 'Luckiest Guy, cursive',
    textAlign: 'center',
    background: 'linear-gradient(to bottom, white, pink, red)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    PointerEvent:'none',
    opacity: '0',
    marginTop: '15%',
    marginBottom: '15%',
    WebkitTextStroke: '.1vw black',
    maxWitdh: '100%'


  },
};
