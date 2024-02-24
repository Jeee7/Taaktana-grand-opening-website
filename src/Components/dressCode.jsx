import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "../Assets/Style/dressCode.css";
import dressCodeImg from "../Assets/Img/pg-7-bg.png";
import dressCodeDress from "../Assets/Img/pg7-content.png";
import dressCodeMb from "../Assets/Img/pg-7-img.png";
import GForm from "./gForm";

const DressCode = () => {
  const [dressCode, setdressCode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const dressCode = document.getElementById("dressCode-container");
      if (dressCode) {
        const rect = dressCode.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        setdressCode(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
        <div className="desktop-dress">
            <Container fluid className={`dressCode-container ${dressCode ? 'show' : ''}`} id="dressCode-container">
                <img src={dressCodeImg} alt="" className="text-dress"/>
                <img src={dressCodeDress} alt=""  className="text-content-dress"/>
            </Container>
        </div>
        <div className="mobile-dress">
            <Container fluid className={`dressCode-container ${dressCode ? 'show' : ''}`} id="dressCode-container">
                <img src={dressCodeMb} alt="" className="text-dress"/>
            </Container>
        </div>
    <GForm />
    </div>
  );
};

export default DressCode;
