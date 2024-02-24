import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "../Assets/Style/galaCelebration.css";
import textgalaCelebration from "../Assets/Img/txt-3.png";
import DressCode from "./dressCode";
import Departure from "./departure";
import textGalaBg from "../Assets/Img/pg5-content.png";

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
        <div className="desktop-view-gala">
            <Container fluid className={`galaCelebration-container ${showgalaCelebration ? 'show' : ''}`} id="galaCelebration-container">
                <div className="galaCelebration-con">
                    <Container fluid>
                        <img src={textGalaBg} alt="" className="text-gala"/>
                    </Container>
                </div>
            </Container>
        </div>
        <div className="mobile-view-gala">
            <Container fluid className={`galaCelebration-container ${showgalaCelebration ? 'show' : ''}`} id="galaCelebration-container">
                <div className="galaCelebration-con">
                    <Container fluid>
                        <img src={textgalaCelebration} alt="" className="text-gala"/>
                    </Container>
                </div>
            </Container>
        </div>
      <Departure />
    </div>
  );
};

export default GalaCelebration;
