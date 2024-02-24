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
                {/* <img src={taaktana} alt=""  style={{ width: "30%", maxWidth: "200px", height: "auto", marginTop: "3em" }}/>
                  <h1 className="text-pg1">
                    <span className="tittle-1">
                    STEP INTO A NEW <br/>
                    DIMENSION WHERE <br/>
                    YOU WILL BE <br/>
                    TRULY TRANSFORMED </span>
                  </h1>
                <img src={luxury} alt=""  style={{ width: "20%", maxWidth: "200px", height: "auto", filter: 'invert(100%)', marginBottom: "2em" }}/> */}
                {/* <img src={text1} alt="" style={{  maxWidth: "550px", height: "auto", filter: 'invert(100%)',  display: 'inline' }} /> */}
                <img src={text1} alt="" className="text-image" />
              </Container>
            </div>
          </Container>
          <Schedule />
        </div>
  );
};

export default Home;
