import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Blog = (props) => {
  const { blogs } = props;

  return (
    <Row style={{margin:'0%'}}>
      {blogs.sort((a, b) => new Date(b.date) - new Date(a.date)).map((blog, index) => (
        <Col xs={12} md={4} key={index}>
          <Link to={`/blog/${blog.id}`} style={{ textDecoration: 'none'}}>
            <Card className='blog-card ' style={{ margin: '1rem' }}>
              <Card.Body >
                <h5 className="title" style={{ textDecoration: 'none'}}>
                  {blog.title}
                </h5>
                {blog.image && (
                  <Card.Img src={blog.image} alt={blog.imageCaption} />
                )}
                <Card.Text className="blog-card" style={{ textDecoration: 'none', paddingTop: '1rem' }}>
                  {blog.date}
                </Card.Text>
                {blog.imageCaption && (
                  <Card.Text className="blog-card" style={{ textDecoration: 'none', paddingTop: '1rem' }}>
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
