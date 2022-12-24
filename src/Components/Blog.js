import React from 'react';
import { Card } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import { DiscussionEmbed } from 'disqus-react';
import Disqus from "disqus-react"

const Blog = (props) => {
    const { blogs } = props;

    return (
        // always have open the latest blog
        <Accordion defaultActiveKey={[blogs.length - 1]} alwaysOpen style={{ paddingTop: '10vh', paddingBottom: '10vh' }}>
            {blogs.map((blog, index) => (
                <Accordion.Item eventKey={index}>
                    <Accordion.Header>{blog.date}</Accordion.Header>
                    <Accordion.Body>
                        <Card>
                            <Card.Header>{blog.emoji}</Card.Header>
                            <Card.Body>
                                <h5 className="title">{blog.title}</h5>
                                {blog.image && (
                                    <Card.Img src={blog.image} />
                                )} {blog.imageCaption && (
                                    <Card.Text className="image-caption">{blog.imageCaption}</Card.Text>
                                )}
                                <div className="content">
                                    {blog.content.split('\n').map((paragraph, index) => (
                                        <p key={index}>{paragraph}</p>
                                    ))}
                                </div>
                            </Card.Body>
                            <Card.Body>
                                <script defer src="https://cdn.commento.io/js/commento.js"></script>
                                <div id="commento"></div>
                            </Card.Body>
                        </Card>
                    </Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion>
    );
};

export default Blog;
