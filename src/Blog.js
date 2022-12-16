import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const Blog = () => {
  return (
    <Card>
      <Card.Header>Blog</Card.Header>
      <ListGroup>
        <ListGroupItem>
          <h5>12/15/2022</h5>
          <p>
            I, Brahm Schultz, created this website with the help of a powerful AI assistant. I asked the assistant a few questions, such as how to create a React blog component using React Bootstrap, and it provided me with clear, concise answers.
          </p>
          <p>
            I was impressed by the assistant's knowledge and ability to generate human-like text on the fly. It's truly amazing what AI can do these days!
          </p>
          <p>
            Overall, I'm very happy with the results of using AI to help me create this website. It saved me a lot of time and effort, and I'm excited to see what else I can do with it.
          </p>
        </ListGroupItem>
      </ListGroup>
    </Card>
  );
};

export default Blog;
