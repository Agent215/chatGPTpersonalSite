import React from 'react';
import { Card } from 'react-bootstrap';

export const ImageCaption = ({ image, imageCaption }) => (
    <React.Fragment>
        <Card.Img src={image} alt={imageCaption} />
        <Card.Text className="image-caption">{imageCaption}</Card.Text>
    </React.Fragment>
);
