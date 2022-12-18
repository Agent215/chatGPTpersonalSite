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
      description: 'I generated this image on stabilityai/stable-diffusion'
    },
    {
      id: 2,
      url: bear,
      description: 'I found on stabilityai/stable-diffusion'
    },
    {
      id: 3,
      url: lava,
      description: 'I found on stabilityai/stable-diffusion'
    },   {
      id: 1,
      url: mountain2,
      description: 'ChatGpt generated this image from my prompt'
    },
    {
      id: 2,
      url: spacex,
      description: 'found on stabilityai/stable-diffusion spacex dragon rocket launch / in the upper atmosphere'
    },
    {
      id: 3,
      url: robot,
      description: 'I gave chatGPT a promt to create another prompt to generate an image of the robot Bender'
    },
  ];

const Home = () => (
  <div style={{paddingLeft:'5%',paddingRight:'5%', paddingBottom:'5%'}}>
    <Title/>
    {/* <PongGame/> */}
    {/* <TicTacToe/> */}
  <ImageGallery images={images} />
  </div>
);

export default Home;
