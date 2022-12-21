import React from 'react';
import city from './../city-1.jpg';
import bear from './../bear.jpg'
import lava from './../lava.jpg'
import Title from './../Components/Title';
import ImageGallery from './../Components/ImageGallery';
import mountain2 from '../images/mountain-2.jpg'
import spacex from '../images/spacex.jpg'
import robot from '../images/robit.jpg'
import Brahm from '../images/cyberpunk-Brahm-1.jpg'
import Brahm1 from '../images/Brahm-Cyber-Punk-2.png'
import Brahm2 from '../images/Judge.png'



//TODO load this in from somewhere for christs sake
const images = [
  {
    id: 7,
    url: Brahm,
    description: 'Dreambooth Prompt: cyberpunk portrait of <DreamBooth token> as a cyborg, sci fi concept art, dramatic, artstation trending, highly detailed,'
      + '\n Negative prompt: (((extra arms))), (((extra legs))), mutated hands, (fused fingers), (too many fingers), (((long neck))), (cross-eyed), (closed eyes)'
  },
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
    id: 8,
    url: Brahm1,
    description: 'Brahm as a cyberpunk posing in a cool and confident manner, likely wearing futuristic clothing and accessories.  futuristic, edgy aesthetic, dramatic lighting and color schemes.  coolness and rebelliousness. art by greg rutkowski'
      + ', Negative prompt : (((extra arms))), (((extra legs))), mutated hands, (fused fingers), (too many fingers), ((blue eyes)),(((long neck))), (cross-eyed), (closed eyes), (mutated)'

  },
  {
    id: 3,
    url: lava,
    description: 'I found on stabilityai/stable-diffusion'
  },
  {
    id: 4,
    url: mountain2,
    description: 'ChatGpt generated this image from my prompt'
  },
  {
    id: 5,
    url: spacex,
    description: 'found on stabilityai/stable-diffusion spacex dragon rocket launch / in the upper atmosphere'
  },
  {
    id: 6,
    url: robot,
    description: 'I gave chatGPT a promt to create another prompt to generate an image of the robot Bender'
  },
  {
    id: 8,
    url: Brahm2,
    description: 'Portrait of Brahm as a Judge, concept art, dramatic, artstation trending, highly detailed'
      + ', Negative prompt : (((extra arms))), (((extra legs))), mutated hands, (fused fingers), (too many fingers), ((blue eyes)),(((long neck))), (cross-eyed), (closed eyes), (mutated)'

  },

];

const Home = () => (
  <div style={{ paddingLeft: '5%', paddingRight: '5%', paddingBottom: '5%' }}>
    <Title />
    {/* <PongGame/> */}
    {/* <TicTacToe/> */}
    <ImageGallery images={images} />
  </div>
);

export default Home;
