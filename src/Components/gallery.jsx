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
                <img className="w-full rounded" src={gallery1} />
            </SlideshowLightbox> 
        </Container>
    </div>
  );
};

export default Gallery;
