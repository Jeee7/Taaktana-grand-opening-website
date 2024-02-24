import React, { useRef, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "../Assets/Style/Home.css";
import taaktana from "../Assets/Img/whiteTaaktana.png";
import luxury from "../Assets/Img/luxury.png";
import Schedule from "./Schedule";
import text1 from "../Assets/Img/txt-1.png";

const Home = () => {

  return (
        <div className="fade-in">
          <Container fluid className="pg1-con" >
            <div className="home-container">
              <Container fluid >
                <img src={text1} alt="" className="text-image" />
              </Container>  
            </div>
          </Container>
          <Schedule />
        </div>
  );
};

export default Home;
