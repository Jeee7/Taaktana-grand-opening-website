import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import '../Assets/Style/Gallery.css'
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
        <Row style={{display: 'flex'}}>
            <Col>
            <img src={gallery1} alt="Photo 1" className="photos" />
            </Col>
            <Col>
            <img src={gallery2} alt="Photo 1" className="photos" />
            </Col>
            <Col>
            <img src={gallery3} alt="Photo 1" className="photos" />
            </Col>
        </Row>
        <Row style={{display: 'flex'}}>
            <Col>
            <img src={gallery4} alt="Photo 1" className="photos" />
            </Col>
            <Col>
            <img src={gallery5} alt="Photo 1" className="photos" />
            </Col>
            <Col>
            <img src={gallery6} alt="Photo 1" className="photos" />
            </Col>
        </Row>
        <Row style={{display: 'flex'}}>
            <Col>
            <img src={gallery7} alt="Photo 1" className="photos" />
            </Col>
            <Col>
            <img src={gallery8} alt="Photo 1" className="photos" />
            </Col>
            <Col>
            <img src={gallery9} alt="Photo 1" className="photos" />
            </Col>
        </Row>
        </Container>
    </div>
  );
};

export default Gallery;
