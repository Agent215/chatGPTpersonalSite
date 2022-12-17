import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h2 className="text-white" style ={{textAlign:'center'}}>About the Website💻</h2>
          <p className="text-white"  style ={{textAlign:'center'}}>
            This website was built using AI-generated code and art. The code was created using a large language model trained by OpenAI, and the art was generated using a deep learning model that specializes in creating images.
          </p>
        </Col>
      </Row>
      <Row>
      <Col>
          <h3 className="text-white">About Brahm🤓</h3>
          <p className="text-white">
          Brahm Schultz is a 32 year old software engineer and artist with a passion for creating and problem solving. With a background in computer science, Brahm has a strong foundation in programming and a keen eye for detail. In addition to his technical skills, Brahm is also an artist with a love for visual expression and storytelling. Whether he is developing software or creating art, Brahm is driven by a desire to make a positive impact and bring new ideas to life. In his free time, Brahm enjoys exploring new technologies and techniques, as well as spending time with his friends and family.
          </p>
        </Col>
        <Col>
          <h3 className="text-white">GitHub Repository👩🏾‍💻</h3>
          <p className="text-white">
            The source code for this website is available on GitHub at the following link: <a href="https://github.com/Agent215/chatGPTpersonalSite" className="text-white">https://github.com/Agent215/chatGPTpersonalSite</a>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
