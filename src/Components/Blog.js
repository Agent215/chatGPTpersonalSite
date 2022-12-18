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
            <Accordion.Item eventKey="2">
                <Accordion.Header>12/17/2022</Accordion.Header>
                <Accordion.Body>
                    <Card>
                        <Card.Header>  🖌   🔨   </Card.Header>
                        <Card.Body>
                            <h5>Made some more pictures and stuff</h5>
                            <p>
                                "I recently had the opportunity to talk with an AI assistant named Assistant to create prompts for my latest art project. I was fascinated by the idea of using AI to generate unique and creative ideas for my art, and I was eager to see what kind of results I could achieve.
                                To create the prompts, I asked Assistant to describe various scenes and settings to me, ranging from woodland mountains on a sunny day to old polaroid photographs of fictional characters. With each prompt, I tried to focus on specific details and elements that would inspire my creativity.
                            </p>
                            <p>
                                Once I had a list of prompts, I used AI software to generate art based on those prompts. The process was fascinating, and I was pleasantly surprised by the results. The AI-generated art had a unique, abstract quality that I found inspiring, and I was able to use it as a starting point for my own creations.

                                I was so happy with the results of this project that I decided to showcase the AI-generated art on my website. However, when it came time to modify the website's navbar to accommodate the new art, I ran into some issues. The AI-generated code was not quite up to par, and I had to spend some time manually adjusting the navbar to get it just right.
                            </p>
                            <p>
                                Despite the extra work, I am thrilled with the final results of this project. Using AI to generate prompts for my art was a new and exciting experience, and I can't wait to see what other creative projects I can come up with using this approach. If you're interested in seeing the results of this project, be sure to check out my website!"         </p>
                        </Card.Body>

                    </Card>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default Blog;
