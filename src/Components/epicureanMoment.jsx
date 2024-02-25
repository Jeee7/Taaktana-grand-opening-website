import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "../Assets/Style/epicureanMoment.css";
import textChef from "../Assets/Img/pg-4-content.png";
import GalaCelebration from "./galaCelebration";
import textMobile from "../Assets/Img/pg4.png"

const EpicureanMoment = () => {

  const [showText, setShowText] = useState(false);

  // Function to handle the transition
  const handleTransition = () => {
    setShowText(true);
  };

  return (
    <div>
        <div className="desktop-chef">
          
            <Container fluid className="chef-container">
                <img src={textChef} alt="" className={`resize-chef ${showText ? "show" : ""}`} onLoad={handleTransition}/>
            </Container>
        </div>

        <div className="chef-mobile">
          <Container fluid className="chef-container">
            <div className="chef-con">
                <img src={textMobile} alt="" className={`resize-chef ${showText ? "show" : ""}`} onLoad={handleTransition}/>/
            </div>
          </Container>
        </div>
      
      <GalaCelebration />
    </div>
  );
};

export default EpicureanMoment;
