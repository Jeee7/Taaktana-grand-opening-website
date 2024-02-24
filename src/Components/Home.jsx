import React, { useRef, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "../Assets/Style/Home.css";
import Schedule from "./Schedule";
import text1 from "../Assets/Img/txt-1.png";
import textD from "../Assets/Img/pg-2-content.png";
import AudioPlayer from "./audioPlayer";

const Home = () => {
  
  const [showText, setShowText] = useState(false);

  // Function to handle the transition
  const handleTransition = () => {
    setShowText(true);
  };

  return (
        <div className="fade-in">
        <AudioPlayer />
          <div className="desktop-v-mobile">
            <Container fluid className="pg1-con" >
              <div className="home-container">
                <Container fluid >
                  <img src={text1} alt="" className={`text-image ${showText ? "show" : ""}`}
                onLoad={handleTransition} />
                </Container>  
              </div>
            </Container>
          </div>

          <div className="desktop-v">
            <Container fluid className="pg1-con">
              <div className="home-container">
                <Container fluid >
                  <img src={textD} alt="" className={`text-image ${showText ? "show" : ""}`}
                onLoad={handleTransition} />
                </Container>  
              </div>
            </Container>
          </div>
          <Schedule />
        </div>
  );
};

export default Home;
