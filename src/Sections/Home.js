import React from 'react';
import city from './../city-1.jpg';
import bear from './../bear.jpg'
import lava from './../lava.jpg'
import Title from './../Components/Title';
import ImageGallery from './../Components/ImageGallery';
import PongGame from '../Components/Pong';
import TicTacToe from '../Components/TicTacToe';

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
