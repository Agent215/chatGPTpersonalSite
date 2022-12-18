import React from 'react';
import city from './../city-1.jpg';
import bear from './../bear.jpg'
import lava from './../lava.jpg'
import Title from './../Components/Title';
import ImageGallery from './../Components/ImageGallery';
import mountain2 from '../images/mountain-2.jpg'
import spacex from '../images/spacex.jpg'
import robot from '../images/robit.jpg'

//TODO load this in from somewhere for christs sake
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
    },   {
      id: 1,
      url: mountain2,
      description: 'Image 1'
    },
    {
      id: 2,
      url: spacex,
      description: 'Image 2'
    },
    {
      id: 3,
      url: robot,
      description: 'Image 3'
    },
  ];

const Home = () => (
  <div style={{paddingLeft:'5%',paddingRight:'5%'}}>
    <Title/>
    {/* <PongGame/> */}
    {/* <TicTacToe/> */}
  <ImageGallery images={images} />
  </div>
);

export default Home;
