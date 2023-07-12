import React, { useState, useEffect, useRef } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import song from "./hearth.mp3";



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
      <div className='sound-container'>
        <button onClick={toggleAudio} className='music-button'>
          {isPlaying ? (
            <img src="./campsite/on.svg" alt="Pause" className='music' />
          ) : (
            <img src="./campsite/off.svg" alt="Play" className='music' />
          )}
        </button>
        <audio ref={audioRef} src={audioSrc} />
      </div>
    );
  };


const CampSite = () => {
    const {selectedString } = useSelector(state => state.esker);
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    
  
    useEffect(() => {
      let typingEffectTimeout;
      let typingEffectInterval;
    
      // Set a delay of 2000 milliseconds (2 seconds)
      const delay = 0;
    
      // Function to start the typing effect
      const startTypingEffect = () => {
        let currentIndex = 0;
        typingEffectInterval = setInterval(() => {
          if (currentIndex < selectedString.length) {
            setText(selectedString.slice(0, currentIndex + 1));
            currentIndex++;
          } else {
            clearInterval(typingEffectInterval);
          }
        }, 70);
      };
    
      // Cancel the previous typing effect and start a new one
      clearTimeout(typingEffectTimeout);
      clearInterval(typingEffectInterval);
    
      // Start the typing effect after the delay
      typingEffectTimeout = setTimeout(startTypingEffect, delay);
    
      // Clean up the timeout and interval if the component unmounts or the selectedString changes
      return () => {
        clearTimeout(typingEffectTimeout);
        clearInterval(typingEffectInterval);
      };
    }, [selectedString]);
    
    useEffect(() => {
      setText('');
    }, [selectedString]);
    return (
      <div className='campsite-container-0'> 
        <div className="tree-container-left">
          <img src='campsite/tree-2.svg' alt='pine tree' className='tree'></img>
          <img src='campsite/tree-1.svg' alt='pine tree' className='tree'></img>
          <img src='campsite/tree-1.svg' alt='pine tree' className='tree'></img>
          <img src='campsite/tree-2.svg' alt='pine tree' className='tree'></img>
          <img src='campsite/tree-4.svg' alt='pine tree' className='tree'></img>
          <img src='campsite/tree-4.svg' alt='pine tree' className='tree'></img>
          <img src='campsite/tree-2.svg' alt='pine tree' className='tree'></img>
          <img src='campsite/tree-1.svg' alt='pine tree' className='tree'></img>
          <img src='campsite/tree-2.svg' alt='pine tree' className='tree'></img>
          <img src='campsite/tree-2.svg' alt='pine tree' className='tree'></img>
          <img src='campsite/tree-1.svg' alt='pine tree' className='tree'></img>
          <img src='campsite/tree-1.svg' alt='pine tree' className='tree'></img>
          <img src='campsite/tree-1.svg' alt='pine tree' className='tree'></img>
        </div>
        
        <ul className='smoke-container'>
          <li className='smoke'></li>
          <li className='smoke'></li>
          <li className='smoke'></li>
          <li className='smoke'></li>
          <li className='smoke'></li>
          <li className='smoke'></li>
          <li className='smoke'></li>
          <li className='smoke'></li>
        </ul>
        <div className='campfire-container'>
        <div class="fire">
        <div class="fire-left">
          <div class="main-fire"></div>
          <div class="particle-fire"></div>
        </div>
        <div class="fire-main">
          <div class="main-fire"></div>
          <div class="particle-fire"></div>
        </div>
        <div class="fire-right">
          <div class="main-fire"></div>
          <div class="particle-fire"></div>
        </div>
        <div class="fire-bottom">
          <div class="main-fire"></div>
        </div>
      </div>
      <div class="logs"></div>
        </div>
        <div className='eskers-dialogue-container'>
              <p className='esker-dialogue'>{text}</p>
        </div>
        <div className='esker-container' ><img src='campsite/esker.png' alt='esker' className='esker'></img></div>
        <div className='ship-container'><img src='campsite/ship.webp' alt='ship' className='ship'></img></div>
        <div className='banjo-container'><img src='campsite/banjo.svg' alt='banjo' className='banjo'></img></div>
        
          <AudioPlayer audioSrc={song}/>
          
        <img className='rat' src='/campsite/rat.svg' alt='rat'></img>
        <div className="moon-container"><img src="/campsite/moon.svg" alt="moon" className='moon'></img>
        </div>
      </div>
    );
  };

  export default CampSite;