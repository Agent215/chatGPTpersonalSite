import React from 'react';
import ImageCarousel from './ImageCarousel';
import ImageRow from './ImageRow';
import city from './city-1.jpg';
import bear from './bear.jpg'
import lava from './lava.jpg'
const Home = () => (
  <div style={{paddingLeft:'5%',paddingRight:'5%'}}>
    <h1 style={{padding: '1%',color:'white'}}>Welcome to my web page!</h1>
    <ImageRow images={[
    { src: city, alt: 'Image 1' },
    { src: bear, alt: 'Image 3' },
    { src: lava, alt: 'Image 2' },
    // ...
  ]}/>
    {/* <ImageCarousel /> */}
  </div>
);

export default Home;