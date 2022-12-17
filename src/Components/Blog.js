import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';


const Blog = () => {
    return (
        <Accordion defaultActiveKey={['0']} alwaysOpen>
             <Accordion.Item eventKey="0">
            <Accordion.Header>12/15/2022</Accordion.Header>
            <Accordion.Body>
            <Card> 
                    <Card.Header>  👏 😎 </Card.Header>
                    <Card.Body>
                        <h5>First Entry</h5>
                        <p>
                            I created this website with the help of a powerful AI assistant. I asked the assistant a few questions, such as how to create a React blog component using React Bootstrap, and it provided me with clear, concise answers.
                        </p>
                        <p>
                            I was impressed by the assistant's knowledge and ability to generate human-like text on the fly. It's truly amazing what AI can do these days!
                        </p>
                        <p>
                            Overall, I'm very happy with the results of using AI to help me create this website. It saved me a lot of time and effort, and I'm excited to see what else I can do with it.
                        </p>
                    </Card.Body>
              
            </Card>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
            <Accordion.Header>12/16/2022</Accordion.Header>
            <Accordion.Body>
            <Card> 
                    <Card.Header> 🤓 👹  </Card.Header>
                    <Card.Body>
                        <h5>Messing with Font</h5>
                        <p>
                        Today, I spent some time working on my personal website and I wanted to create a nice title component to use on the splash screen. I decided to use Google Fonts to add some personality to the text, and after trying out a few different options, I finally settled on the Rubik 80s Fade font.                        </p>
                        <p>
                        I imported the font into my React component using the @import rule in my CSS, and then applied it to the text using the font-family property. I also added some styling to make the font larger and bolder, and used some emoji's to give it a fun, playful vibe.                        </p>
                        <p>
                        I was really happy with how the title component turned out, and I think it will really help to make my website stand out. In the end, I was also able to use the Accordion component from the react-bootstrap library to create a stylish and functional way to display my blog posts. Overall, it was a really productive day of work on my website and I'm excited to see how everything comes together in the end.                        </p>
                    </Card.Body>
              
            </Card>
            </Accordion.Body>
            </Accordion.Item>
            </Accordion>
    );
};

export default Blog;
