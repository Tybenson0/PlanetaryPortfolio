import React, { useState, useEffect, useRef } from 'react';

import {motion} from 'framer-motion'
const AudioPlayer = ({ audioSrc }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    const fadeDuration = 1.5; // Duration for fade-in and fade-out in seconds
  
    const fadeInAudio = () => {
      const audioElement = audioRef.current;
      audioElement.volume = 0;
      audioElement.play();
      let currentVolume = 0;
      const fadeStep = 0.01;
      const fadeInterval = setInterval(() => {
        currentVolume += fadeStep;
        if (currentVolume >= 1) {
          audioElement.volume = 1;
          clearInterval(fadeInterval);
        } else {
          audioElement.volume = currentVolume;
        }
      }, fadeDuration * 10);
    };

    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay of 1 second for demonstration purposes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  
    const fadeOutAudio = () => {
      const audioElement = audioRef.current;
      let currentVolume = audioElement.volume;
      const fadeStep = 0.01;
      const fadeInterval = setInterval(() => {
        currentVolume -= fadeStep;
        if (currentVolume <= 0) {
          audioElement.volume = 0;
          audioElement.pause();
          clearInterval(fadeInterval);
        } else {
          audioElement.volume = currentVolume;
        }
      }, fadeDuration * 10);
    };
  
    useEffect(() => {
      if (isPlaying) {
        fadeInAudio();
      } else {
        fadeOutAudio();
      }
    }, [isPlaying]);
  
    const toggleAudio = () => {
      setIsPlaying(!isPlaying);
    };
  
    return (
      <motion.div 
      initial={{ opacity: 0 }}
      animate={isLoading ? {} : { opacity: 1 }}
      exit={{opacity: 1}}
      transition={{ duration: 1 }}
      className='sound-container'>
        <button onClick={toggleAudio} className='music-button'>
          {isPlaying ? (
            <img src="./campsite/on.svg" alt="Pause" className='music' />
          ) : (
            <img src="./campsite/off.svg" alt="Play" className='music' />
          )}
        </button>
        <audio ref={audioRef} src={audioSrc} />
      </motion.div>
    );
  };

  export default AudioPlayer;