import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from './app/esker';

import { motion } from 'framer-motion';

const AudioPlayer = ({ audioSrc }) => {
  const { display } = useSelector(state => state.esker);
  const audioRef = useRef(null);
  const fadeDuration = 1; // Duration for fade-in and fade-out in seconds
  const dispatch = useDispatch();

  const fadeInAudio = () => {
    const audioElement = audioRef.current;
    audioElement.volume = 0;
    audioElement.play();
    let currentVolume = 0;
    const fadeStep = 0.01;
    const fadeInterval = setInterval(() => {
      currentVolume += fadeStep;
      if (currentVolume >= 1) {
        audioElement.volume = .5;
        clearInterval(fadeInterval);
      } else {
        audioElement.volume = currentVolume * 0.3; // Adjust the scaling factor (0.5) as desired
      }
    }, fadeDuration * 5);
  };
  
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
        audioElement.volume = currentVolume * 0.3; // Adjust the scaling factor (0.5) as desired
      }
    }, fadeDuration * 10);
  };

  useEffect(() => {
    if (display) {
      fadeInAudio();
    } else {
      fadeOutAudio();
    }
  }, [display]);

  const toggleAudio = () => {
    dispatch(toggle()); // Dispatch the toggle action to update the 'display' state in Redux
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='sound-container'
    >
      <button onClick={toggleAudio} className='music-button'>
        {display ? (
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