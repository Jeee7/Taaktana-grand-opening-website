import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "../Assets/Style/Schedule.css";
import EpicureanMoment from "./epicureanMoment";
import text2 from "../Assets/Img/txt-2.png";
import textD from "../Assets/Img/pg-3-content.png"

const Schedule = () => {

  const [showText, setShowText] = useState(false);

  // Function to handle the transition
  const handleTransition = () => {
    setShowText(true);
  };

  return (
    <div>
      <div className="mobile-schedule">
      <Container fluid className="schedule-container">
        <div className="schedule-con">
          <Container fluid>
            <img src={text2} alt="" className={`text-schedule ${showText ? "show" : ""}`}
              onLoad={handleTransition} />
          </Container>
        </div>
      </Container>
      </div>
      <div className="desktop-schedule">
      <Container fluid className="schedule-container">
        <div className="schedule-con">
          <Container fluid>
            <img src={textD} alt="" className={`text-schedule ${showText ? "show" : ""}`}
              onLoad={handleTransition} />
          </Container>
        </div>
      </Container>
      </div>
      
      <EpicureanMoment />
    </div>
  );
};

export default Schedule;
