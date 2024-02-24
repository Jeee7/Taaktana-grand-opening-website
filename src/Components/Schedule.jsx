import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "../Assets/Style/Schedule.css";
import EpicureanMoment from "./epicureanMoment";
import text2 from "../Assets/Img/txt-2.png";

const Schedule = () => {
  const [showSchedule, setShowSchedule] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scheduleContainer = document.getElementById("schedule-container");
      if (scheduleContainer) {
        const rect = scheduleContainer.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        setShowSchedule(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [showText, setShowText] = useState(false);

  // Function to handle the transition
  const handleTransition = () => {
    setShowText(true);
  };

  return (
    <div>
      <Container fluid className={`schedule-container ${showSchedule ? 'show' : ''}`} id="schedule-container">
        <div className="schedule-con">
          <Container fluid>

            <img src={text2} alt="" className={`text-schedule ${showText ? "show" : ""}`}
              onLoad={handleTransition} />

          </Container>
        </div>
      </Container>
      <EpicureanMoment />
    </div>
  );
};

export default Schedule;
