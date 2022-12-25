import React from 'react';
import { Card } from 'react-bootstrap';
import { DiscussionEmbed } from 'disqus-react';
import {getBlogById} from './../getBlogById'
import { useParams } from "react-router-dom";

const BlogPage = () => {
    const { id } = useParams();
    const blog = getBlogById(id);

  return (
    <Card className='blog-card' style={{margin:'1rem'}}>
      <Card.Header>{blog.emoji}</Card.Header>
      <Card.Body>
        <h5 className="title">{blog.title}</h5>
        {blog.image && (
          <Card.Img src={blog.image} />
        )}
        {blog.imageCaption && (
          <Card.Text className="image-caption">{blog.imageCaption}</Card.Text>
        )}
        <div className="content">
          {blog.content.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </Card.Body>
      <Card.Body>
        <DiscussionEmbed
        shortname='brahm'
          config={
            {
              url: window.location.href,
              identifier: blog.id,
              title: blog.title,
            }
          }
        />
      </Card.Body>
    </Card>
  );
};

export default BlogPage;
