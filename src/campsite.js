import React, { useState, useEffect} from 'react';
import { useSelector} from 'react-redux';
const CampSite = () => {
    const {selectedString } = useSelector(state => state.esker);
    const [text, setText] = useState('');
    
  
    useEffect(() => {
      let typingEffectTimeout;
      let typingEffectInterval;
    
      // Set a delay of 2000 milliseconds (2 seconds)
      const delay = 1000;
    
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
        }, 20);
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
        
          
          
        <img className='rat' src='/campsite/rat.svg' alt='rat'></img>
        <div className="moon-container"><img src="/campsite/moon.svg" alt="moon" className='moon'></img>
        </div>
      </div>
    );
  };

  export default CampSite;