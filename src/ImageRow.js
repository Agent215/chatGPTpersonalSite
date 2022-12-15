import React, { useState } from 'react';
import styled from 'styled-components';

const ImageRowContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  flex-shrink: 0;
  /* Use a media query to change the width of the images
   * based on the width of the screen */
  @media (min-width: 1024px) {
    width: 33.333%;
  }

  /* Animate the expansion of the clicked image */
  transition: transform 0.5s ease-out;

  /* Style the expanded image differently */
  &.expanded {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1.5);
    z-index: 1;
    object-fit: contain;
  }
`;

const BackButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  display: none;

  /* Show the back button when the image is expanded */
  &.expanded {
    display: block;
  }
`;

export default function ImageRow({ images }) {
  // Use the useState hook to track the state of the clicked image
  const [expandedImage, setExpandedImage] = useState(null);

  // Function to handle the expansion/collapse of an image
  const handleImageClick = (image) => {
    // If the clicked image is already expanded, collapse it
    if (expandedImage === image) {
      setExpandedImage(null);
    } else {

      // Otherwise, expand the clicked image
      setExpandedImage(image);
    }
  };

  return (
    <ImageRowContainer>
      {images.map((image, index) => (
        <React.Fragment key={index}>
          <Image
            src={image.src}
            alt={image.alt}
            // Add the "expanded" class to the image if it is expanded
            className={expandedImage === image ? 'expanded' : ''}
            // Call the handleImageClick function when the image is clicked
            onClick={() => handleImageClick(image)}
          />
          {/* Display the back button when the image is expanded */}
          {expandedImage === image && (
            <BackButton
              className="expanded"
              onClick={() => handleImageClick(image)}
            >
              X
            </BackButton>
          )}
        </React.Fragment>
      ))}
    </ImageRowContainer>
  );
}
