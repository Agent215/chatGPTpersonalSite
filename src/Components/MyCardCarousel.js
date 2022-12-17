import React from 'react';
import { Carousel, Card } from 'react-bootstrap';
import city from './../city-1.jpg';
import bear from './../bear.jpg'
import lava from './../lava.jpg'

const MyCardCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <Card>
          <Card.Img variant="top" src="https://via.placeholder.com/150/0000FF/808080 ?Text=Digital.com" />
          <Card.Body>
            <Card.Title>Card Title 1</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </Carousel.Item>
      <Carousel.Item>
        <Card>
          <Card.Img variant="top" src="card-image-2.jpg" />
          <Card.Body>
            <Card.Title>Card Title 2</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </Carousel.Item>
      <Carousel.Item>
        <Card>
          <Card.Img variant="top" src="card-image-3.jpg" />
          <Card.Body>
            <Card.Title>Card Title 3</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCardCarousel;
