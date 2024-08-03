import React from 'react';
import './Gallery.css';
import {images} from './image'



function Gallery() {

  const [showAll, setShowAll] = React.useState(false);

  const handleShowMore = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };

  return (
    <section className="gallery">
      <h2>Gallery</h2>
      <div className="gallery__grid">
        {images.slice(0, showAll ? images.length : 10).map((image, index) => (
          <div key={index} className="gallery__item">
            <img src={image.src} alt={image.alt} className="gallery__img" />
          </div>
        ))}
      </div>
        <div className="gallery-show-more">
        <button onClick={handleShowMore}>{showAll ? 'View Less' : 'View More'}</button>
        </div>
    </section>
  );
}

export default Gallery;
