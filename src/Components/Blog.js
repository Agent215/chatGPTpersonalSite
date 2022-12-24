import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Blog = (props) => {
  const { blogs } = props;

  return (
    <Row>
      {blogs.sort((a, b) => new Date(b.date) - new Date(a.date)).map((blog, index) => (
        <Col xs={12} md={4} key={index}>
          <Link to={`/blog/${blog.id}`} style={{ textDecoration: 'none' , color: 'black'}}>
            <Card style={{ margin: '1rem' }}>
              <Card.Body>
                <h5 className="title" style={{ textDecoration: 'none', color: 'black' }}>
                  {blog.title}
                </h5>
                {blog.image && (
                  <Card.Img src={blog.image} />
                )}
                <Card.Text className="date" style={{ textDecoration: 'none', paddingTop: '1rem' }}>
                  {blog.date}
                </Card.Text>
                {blog.imageCaption && (
                  <Card.Text  style={{ textDecoration: 'none', paddingTop: '1rem' }}>
                    {blog.imageCaption}
                  </Card.Text>
                )}
              </Card.Body>
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  );
};

export default Blog;
