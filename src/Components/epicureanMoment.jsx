import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "../Assets/Style/epicureanMoment.css";
import textChef from "../Assets/Img/text-chef.png";
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
        
            <div className="chef-con">
            <Container fluid>
                <img src={textChef} alt="" style={{  maxWidth: "550px", height: "auto", filter: 'invert(100%)',  display: 'inline' }} />
            </Container>
            </div>
      </Container>
      <GalaCelebration />
    </div>
  );
};

export default EpicureanMoment;
