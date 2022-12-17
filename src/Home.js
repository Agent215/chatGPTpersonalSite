import React from 'react';
import ImageCarousel from './ImageCarousel';
import ImageRow from './ImageRow';
import city from './city-1.jpg';
import bear from './bear.jpg'
import MyCardCarousel from './MyCardCarousel';
import lava from './lava.jpg'
import Title from './Title';
import ImageGallery from './ImageGallery';

const images = [
    {
      id: 1,
      url: city,
      description: 'Image 1'
    },
    {
      id: 2,
      url: bear,
      description: 'Image 2'
    },
    {
      id: 3,
      url: lava,
      description: 'Image 3'
    },
  ];

const Home = () => (
  <div style={{paddingLeft:'5%',paddingRight:'5%'}}>
    <Title/>
    {/* <h1 style={{padding: '1%',color:'white'}}>Welcome to my web page!</h1> */}
    {/* <MyCardCarousel/> */}

  <ImageGallery images={images} />
    {/* <ImageRow images={[
    { src: city, alt: 'Image 1' },
    { src: bear, alt: 'Image 3' },
    { src: lava, alt: 'Image 2' },
    // ...
  ]}/> */}
    {/* <ImageCarousel /> */}
  </div>
);

export default Home;
