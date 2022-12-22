import React from 'react';
import Title from './../Components/Title';
import ImageGallery from './../Components/ImageGallery';
import TicTacToe from '../Components/TicTacToe';
import { images } from './images';


const Home = () => (
  <div style={{ paddingLeft: '5%', paddingRight: '5%', paddingBottom: '5%' }}>
    <Title />
    {/* <PongGame/> */}
    {/* <TicTacToe/> */}
    <ImageGallery images={images} />
  </div>
);

export default Home;
