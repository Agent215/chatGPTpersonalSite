import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

function ImageGallery(props) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const springProps = useSpring({
    transform: selectedImage ? 'scale(1)' : 'scale(0)',
  });

  return (
    <div className="image-gallery">
      {props.images.map((image) => (
        <div
          key={image.id}
          className={`image-thumbnail ${selectedImage === image ? 'expanded' : ''}`}
          onClick={() => handleClick(image)}
        >
          <img src={image.url} alt={image.description} />
        </div>
      ))}
      {selectedImage && (
        <animated.div className="expanded-image-overlay" style={springProps} onClick={handleClose}>
          <img src={selectedImage.url} alt={selectedImage.description} />
        </animated.div>
      )}
    </div>
  );
}

export default ImageGallery;
