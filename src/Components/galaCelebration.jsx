import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "../Assets/Style/galaCelebration.css";
import textgalaCelebration from "../Assets/Img/txt-3.png";
import DressCode from "./dressCode";

const GalaCelebration = () => {
  const [showgalaCelebration, setshowgalaCelebration] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const galaCelebration = document.getElementById("galaCelebration-container");
      if (galaCelebration) {
        const rect = galaCelebration.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        setshowgalaCelebration(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Container fluid className={`galaCelebration-container ${showgalaCelebration ? 'show' : ''}`} id="galaCelebration-container">
        
            <div className="galaCelebration-con">
            <Container fluid>
                <img src={textgalaCelebration} alt="" style={{  maxWidth: "550px", height: "auto", filter: 'invert(100%)',  display: 'inline' }} />
            </Container>
            </div>
      </Container>
      <DressCode />
    </div>
  );
};

export default GalaCelebration;
