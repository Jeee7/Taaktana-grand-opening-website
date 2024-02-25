import {React, useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import '../Assets/Style/Gallery.css'
import {SlideshowLightbox} from 'lightbox.js-react'
import 'lightbox.js-react/dist/index.css'
import gallery1 from "../Assets/Img/Gallery Foto/Gallery 01.png"
import gallery2 from "../Assets/Img/Gallery Foto/Gallery 02.png"
import gallery3 from "../Assets/Img/Gallery Foto/Gallery 03.png"
import gallery4 from "../Assets/Img/Gallery Foto/Gallery 04.png"
import gallery5 from "../Assets/Img/Gallery Foto/Gallery 05.png"
import gallery6 from "../Assets/Img/Gallery Foto/Gallery 06.png"
import gallery7 from "../Assets/Img/Gallery Foto/Gallery 07.png"
import gallery8 from "../Assets/Img/Gallery Foto/Gallery 08.png"
import gallery9 from "../Assets/Img/Gallery Foto/Gallery 09.png"

const Gallery = () => {
    
  return (
    <div className="photos-gallery">
        <Container className="d-flex justify-content-center">
            <SlideshowLightbox className="container grid grid-cols-3 gap-2 mx-auto">
                <img className="gallery-images" src={gallery1} alt="" />
                <img className="gallery-images" src={gallery2} alt="" />
                <img className="gallery-images" src={gallery3} alt=""/>
                <img className="gallery-images" src={gallery4} alt="" />
                <img className="gallery-images" src={gallery5} alt="" />
                <img className="gallery-images" src={gallery6} alt=""/>
                <img className="gallery-images" src={gallery7} alt="" />
                <img className="gallery-images" src={gallery8} alt="" />
                <img className="gallery-images" src={gallery9} alt=""/>
            </SlideshowLightbox> 
            <iframe width="88%" height="500" src="https://www.youtube.com/embed/TNjUhuSlD84?si=9AXz7XL2RCJ-vkZE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Container>
    </div>
  );
};

export default Gallery;
