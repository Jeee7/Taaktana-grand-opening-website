import React from "react";
import { Container } from "react-bootstrap";
import { SlideshowLightbox } from 'lightbox.js-react';
import 'lightbox.js-react/dist/index.css';
import GalleryNavbar from './Navbar';
import gallery1 from "../Assets/Img/Gallery Foto/Gallery 01.png";
import gallery2 from "../Assets/Img/Gallery Foto/Gallery 02.png";
import gallery3 from "../Assets/Img/Gallery Foto/Gallery 03.png";
import gallery4 from "../Assets/Img/Gallery Foto/Gallery 04.png";
import gallery5 from "../Assets/Img/Gallery Foto/Gallery 05.png";
import gallery6 from "../Assets/Img/Gallery Foto/Gallery 06.png";
import gallery7 from "../Assets/Img/Gallery Foto/Gallery 07.png";
import gallery8 from "../Assets/Img/Gallery Foto/Gallery 08.png";
import gallery9 from "../Assets/Img/Gallery Foto/Gallery 09.png";
import '../Assets/Style/Gallery.css';

const Gallery = () => {
  return (
    <div className="photos-gallery">
      <GalleryNavbar />
      <Container className="d-flex justify-content-center">
        <SlideshowLightbox className="container grid grid-cols-3 gap-2 mx-auto">
          {[
            { src: gallery1, size: '30%' },
            { src: gallery2, size: '35%' },
            { src: gallery3, size: '40%' },
            { src: gallery4, size: '45%' },
            { src: gallery5, size: '50%' },
            { src: gallery6, size: '45%' },
            { src: gallery7, size: '40%' },
            { src: gallery8, size: '35%' },
            { src: gallery9, size: '30%' },
          ].map((image, index) => (
            <img
              key={index}
              className="gallery-images"
              src={image.src}
              alt={`Gallery Image ${index + 1}`}
              style={{ width: image.size }}
            />
          ))}
        </SlideshowLightbox>
        <iframe
          width="88%"
          height="500"
          src="https://www.youtube.com/embed/TNjUhuSlD84?si=9AXz7XL2RCJ-vkZE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </Container>
    </div>
  );
};

export default Gallery;
