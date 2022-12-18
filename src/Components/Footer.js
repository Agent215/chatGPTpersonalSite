import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles.js";
  
const Footer = () => {
  return (
    <Box>
     
      <Container>
        <Row>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="https://www.facebook.com/brahm.schultz">
              <i className="fab fa-facebook-f">
                <span >
                Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://www.instagram.com/elbrahmo/?hl=en">
              <i className="fab fa-youtube">
                <span >
                Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://www.linkedin.com/in/abraham-schultz-15099044/">
              <i className="fab fa-youtube">
                <span >
                Linkedin
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;