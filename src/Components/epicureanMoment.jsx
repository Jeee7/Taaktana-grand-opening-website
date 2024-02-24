import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "../Assets/Style/epicureanMoment.css";
import textChef from "../Assets/Img/pg4.png";
import GalaCelebration from "./galaCelebration";

const EpicureanMoment = () => {
  const [showChef, setshowChef] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const chefContainer = document.getElementById("chef-container");
      if (chefContainer) {
        const rect = chefContainer.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        setshowChef(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Container fluid className={`chef-container ${showChef ? 'show' : ''}`} id="chef-container">
            <img src={textChef} alt="" className="resize-chef"/>
      </Container>
      <GalaCelebration />
    </div>
  );
};

export default EpicureanMoment;
