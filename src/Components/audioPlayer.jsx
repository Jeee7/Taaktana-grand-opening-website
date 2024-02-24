import React, { useState, useEffect, useRef } from "react";
import MusicFile from "../Assets/Music/Music-Website.mp3";
import '../Assets/Style/audioPlayer.css'
import MusicImage from "../Assets/Img/audio-icon.png"

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const audioPlayer = document.querySelector(".audio-player-container");
      if (audioPlayer) {
        const topOffset = window.innerHeight - audioPlayer.clientHeight - 20; // Adjust as needed
        const scrollTop = window.scrollY || window.pageYOffset;
        if (scrollTop > topOffset) {
          audioPlayer.classList.add("sticky");
        } else {
          audioPlayer.classList.remove("sticky");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const audioRef = useRef(new Audio(MusicFile));

  useEffect(() => {
    audioRef.current.play();
    setIsPlaying(true);
  }, []);

  const togglePlayback = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="audio-player-container"> {/* Add this container */}
      <img
        src={MusicImage}
       
        className="audio-button"
        onClick={togglePlayback}
    />
    </div>
  );
};

export default AudioPlayer;
