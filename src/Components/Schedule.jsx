import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "../Assets/Style/Schedule.css";
import taaktana from "../Assets/Img/whiteTaaktana.png";
import luxury from "../Assets/Img/luxury.png";
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

  return (
    <div>
      <Container fluid className={`schedule-container ${showSchedule ? 'show' : ''}`} id="schedule-container">
        <div className="schedule-con">
          <Container fluid>

            <img src={text2} alt="" className="text-image"/>

          </Container>
        </div>
      </Container>
      <EpicureanMoment />
    </div>
  );
};

export default Schedule;
