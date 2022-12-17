import React from 'react';

function Title() {
  return (
    <div  style={styles.titleContainer}>
      <h1 style={styles.title}> ⚗️ BRAHM SCHULTZ 👽</h1>
      
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
    marginTop: '15%',
    marginBottom: '15%',
    WebkitTextStroke: '.1vw black',
    maxWitdh: '100%'

  },
};
