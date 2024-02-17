import React, { useRef, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "../Assets/Style/Home.css";
import gita from "../Assets/Img/gita.jpg";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const homeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1, // Adjust threshold as needed
      }
    );

    document.querySelectorAll(".home-container").forEach((item) => {
      observer.observe(item);
    });

    return () => {
      document.querySelectorAll(".home-container").forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <>
      <div ref={homeRef}>
        <Container className={`fade-in home-container ${isVisible ? "visible" : ""}`}>
          <h1 className="test-h1">Masuk</h1>
          <img src={gita} alt="" />
        </Container>
        <Container className={`fade-in home-container ${isVisible ? "visible" : ""}`}>
          <h1 className="test-h1">Second</h1>
          <img src={gita} alt="" />
        </Container>
        <Container className={`fade-in home-container ${isVisible ? "visible" : ""}`}>
          <h1 className="test-h1">Third</h1>
          <img src={gita} alt="" />
        </Container>
      </div>
    </>
  );
};

export default Home;
