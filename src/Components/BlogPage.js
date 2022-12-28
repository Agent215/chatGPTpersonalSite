import React from 'react';
import { Card } from 'react-bootstrap';
import { DiscussionEmbed } from 'disqus-react';
import { getBlogById } from './../getBlogById';
import { useParams } from "react-router-dom";
import { MyCodeBlock } from './CodeBlock';
import { ImageCaption } from './ImageCaption';




const BlogPage = () => {
  const { id } = useParams();
  const blog = getBlogById(id);

  return (
    <Card className="blog-card" style={{ margin: '1rem' }}>
      <Card.Header>{blog.emoji}</Card.Header>
      <Card.Body >
        <h5 className="title">{blog.title}</h5>
        {blog.image && (
          <Card.Img src={blog.image}  />
        )}
        {blog.imageCaption && (
          <Card.Text className="image-caption">{blog.imageCaption}</Card.Text>
        )}
        <div className="content">
          {blog.content.map((element, index) => {
            if (typeof element === 'string' && element.includes('<a')) {
              return (
                <div key={index} dangerouslySetInnerHTML={{ __html: element }} />
              );
            } else if (typeof element === 'string') {
              return <p key={index}>{element}</p>;
            } else if (element.code) {
                console.log("language is " + element.language);
              return <MyCodeBlock key={index} code={element.code} language={element.language} />;
            } else {
              return <ImageCaption key={index} image={element.image} imageCaption={element.imageCaption} />;
            }
          })}
        </div>
      </Card.Body>
      <Card.Body>
        <DiscussionEmbed
          shortname="brahmschultz"
          config={{
            url: window.location.href,
            identifier: blog.id,
            title: blog.title,
          }}
        />
      </Card.Body>
    </Card>
  );
};

export default BlogPage;
