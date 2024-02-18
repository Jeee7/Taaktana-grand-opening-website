import React, { useRef, useEffect, useState } from "react";
import "../Assets/Style/Schedule.css";
import { Container } from "react-bootstrap";
import taaktana from "../Assets/Img/whiteTaaktana.png";
import luxury from "../Assets/Img/luxury.png";


const Schedule = () => {
  

  return (
    <div>
        <Container fluid className="schedule-container">
            <div className="schedule-con">
            <Container fluid >
                <img src={taaktana} alt=""  style={{ width: "30%", maxWidth: "200px", height: "auto", marginTop: "3em" }}/>
                  <h1 className="text-pg2">
                    asfhkasjfkasjadk
                  </h1>
                <img src={luxury} alt=""  style={{ width: "20%", maxWidth: "200px", height: "auto", filter: 'invert(100%)', marginBottom: "2em" }}/>
              </Container>
            </div>
        </Container>
    </div>

  );
};

export default Schedule;
