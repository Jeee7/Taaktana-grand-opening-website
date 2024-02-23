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
            {/* <p className="text-invite">YOU ARE CORDIALLY INVITED TO THE <br /> <br /> <span className="text-go"> GRAND OPENING OF  </span> </p>
            <img src={taaktana} alt="" style={{ width: "30%", maxWidth: "200px", height: "auto", paddingBottom: "4em" }} />
            <p className="text-invite"><span className="text-tgl">24 - 26<br /> MARCH 2024 </span>  </p>
            <p className="text-invite"><span className="text-tgl"> TA'AKTANA </span><br /> <span className="text-txt">A LUXURY COLLECTION RESORT & SPA, LABUAN BAJO <br />
              PANTAI WAE RANA, NUSA TENGGARA TIMUR, INDONESIA<br /> </span> </p>
            <img src={luxury} alt="" style={{ width: "20%", maxWidth: "200px", height: "auto", filter: 'invert(100%)', marginBottom: "2em" }} /> */}

            <img src={text2} alt="" style={{  maxWidth: "550px", height: "auto", filter: 'invert(100%)',  display: 'inline' }} />

          </Container>
        </div>
      </Container>
      <EpicureanMoment />
    </div>
  );
};

export default Schedule;
