import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "../Assets/Style/departure.css";
import departureTextMobile from "../Assets/Img/Page 06 - Content.png";
import departureText from "../Assets/Img/pg6-content.png";
import DressCode from "./dressCode";

const Departure = () => {
  const [Departure, setDeparture] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const Departure = document.getElementById("departure-container");
      if (Departure) {
        const rect = Departure.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        setDeparture(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
        <div className="desktop-view-departure">
            <Container fluid className={`departure-container ${Departure ? 'show' : ''}`} id="departure-container">
                <img src={departureText} alt="" className="text-departure"/>
            </Container>
        </div>
        <div className="mobile-view-departure">
            <Container fluid className={`departure-container ${Departure ? 'show' : ''}`} id="departure-container">
                <img src={departureTextMobile} alt="" className="text-departure"/>
            </Container>
        </div>
      
        <DressCode />
    </div>
  );
};

export default Departure;
