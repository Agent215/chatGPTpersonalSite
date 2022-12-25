import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles.js";
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import { useMedia } from 'react-use';
const Footer = () => {

  //get theme from users prefered settings.
  const isDarkMode = useMedia('(prefers-color-scheme: dark)');

  const socialMediaIconColor = '#787b91';
  const [bgColors, setBgColors] = useState([socialMediaIconColor, socialMediaIconColor, socialMediaIconColor, socialMediaIconColor]);

 
  useEffect(() => {
   if(isDarkMode){
    const newBgColors = bgColors.map((bgColor, i) => {   
        return socialMediaIconColor;
    });
    setBgColors(newBgColors)
   }else{
    const newBgColors = bgColors.map((bgColor, i) => {   
      return "black";
  });  setBgColors(newBgColors)
   }
}, [isDarkMode]);


  const handleMouseEnter = (index) => {
    if (index === 3) {
      const newBgColors = bgColors.map((bgColor, i) => {
        if (i === index) {
          return 'white';
        }
        return bgColor;
      });
      setBgColors(newBgColors);
    } else {
      const newBgColors = bgColors.map((bgColor, i) => {
        if (i === index) {
          return null;
        }
        return bgColor;
      });
      setBgColors(newBgColors);
    }
  };

  const handleMouseLeave = async (index) => {
    await timeout(20); //for 1 sec delay
    const newBgColors = bgColors.map((bgColor, i) => {
      if (i === index) {
        return socialMediaIconColor;
      }
      return bgColor;
    });
    setBgColors(newBgColors);
  };
  function timeout( number) {
    return new Promise( res => setTimeout(res, number) );
}
  return (
    <div>
      <div className="content-container">
      </div>
      <Box>
        <Container>
          <Row>
            <Heading className="social-media">Social Media</Heading>
            <SocialIcon
              bgColor={bgColors[0]}
              className="social-media"
              network="facebook"
              url="https://www.facebook.com/brahm.schultz"
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={() => handleMouseLeave(0)}
              onClick={() => handleMouseLeave(0)}
            />
            <SocialIcon
              bgColor={bgColors[1]}
              className="social-media"
              network="instagram"
              url="https://www.instagram.com/elbrahmo/?hl=en"
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={() => handleMouseLeave(1)}
              onClick={() => handleMouseLeave(1)}
            />
            <SocialIcon
              bgColor={bgColors[2]}
              className="social-media"
              network="linkedin"
              url="https://www.linkedin.com/in/abraham-schultz-15099044/"
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={() => handleMouseLeave(2)}
              onClick={() => handleMouseLeave(2)}
            />
            <SocialIcon
              bgColor={bgColors[3]}
              className="social-media"
              network="github"  url="https://github.com/Agent215"
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={() => handleMouseLeave(3)}
              onClick={() => handleMouseLeave(3)}
            />
          </Row>
        </Container>
      </Box>
    </div>
  );
};

export default Footer;
