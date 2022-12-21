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
import SpaceShips from '../images/SpaceShips.png'
import godBurrito from '../images/god-burrito.png'
import mars from '../images/Mars.png'


//TODO load this in from somewhere for christs sake
const images = [
  {
    id: 1,
    url: Brahm,
    description: 'Dreambooth Prompt: cyberpunk portrait of <DreamBooth token> as a cyborg, sci fi concept art, dramatic, artstation trending, highly detailed,'
      + '\n Negative prompt: (((extra arms))), (((extra legs))), mutated hands, (fused fingers), (too many fingers), (((long neck))), (cross-eyed), (closed eyes)'
  },
  {
    id: 2,
    url: SpaceShips,
    description: 'Midjourney Prompt : very big space fortress in jupiter orbit, lots of smaller ships in transit, hard lighting'

  },


  {
    id: 3,
    url: bear,
    description: 'I found on stabilityai/stable-diffusion'

  },
   {
    id: 4,
    url: godBurrito,
    description: 'Midjourney prompt: at the dawn of time god created the burrito, epic cosmic screenshot ,ultra detail, HDR rendered in unreal'

  },
  {
    id: 5,
    url: mars,
    description: 'Midjourney prompt: me on mars seeing seven moon'
  },
  {
    id: 6,
    url: Brahm1,
    description: 'Brahm as a cyberpunk posing in a cool and confident manner, likely wearing futuristic clothing and accessories.  futuristic, edgy aesthetic, dramatic lighting and color schemes.  coolness and rebelliousness. art by greg rutkowski'
      + ', Negative prompt : (((extra arms))), (((extra legs))), mutated hands, (fused fingers), (too many fingers), ((blue eyes)),(((long neck))), (cross-eyed), (closed eyes), (mutated)'

  },
  {
    id: 7,
    url: city,
    description: 'I generated this image on stabilityai/stable-diffusion'
  },
  {
    id: 8,
    url: lava,
    description: 'I found on stabilityai/stable-diffusion'
  },
  {
    id: 9,
    url: mountain2,
    description: 'ChatGpt generated this image from my prompt'
  },
  {
    id: 10,
    url: spacex,
    description: 'found on stabilityai/stable-diffusion spacex dragon rocket launch / in the upper atmosphere'
  },
  {
    id: 11,
    url: robot,
    description: 'I gave chatGPT a promt to create another prompt to generate an image of the robot Bender'
  },
  {
    id: 12,
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
