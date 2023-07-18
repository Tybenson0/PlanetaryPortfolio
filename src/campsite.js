import React, { useState, useEffect} from 'react';
import { useSelector} from 'react-redux';
import {motion} from 'framer-motion'
const CampSite = () => {
    const {selectedString } = useSelector(state => state.esker);
    const [text, setText] = useState('');
    
    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay of 1 second for demonstration purposes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
    
  
    useEffect(() => {
      let typingEffectTimeout;
      let typingEffectInterval;
    
      // Set a delay of 2000 milliseconds (2 seconds)
      const delay = 3500;
    
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
        }, 100);
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
      <motion.div
            
      className='campsite-container-0'>
        
        
        
        <motion.div 
        initial={{ opacity: 0 }}
        animate={isLoading ? {} : { opacity: 1 }}
        exit={{ opacity: 0.01 }}
        transition={{ duration: 2 }}
        className='campfire-container'>
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
        </motion.div>
        <div className='eskers-dialogue-container'>
              <p className='esker-dialogue'>{text}</p>
        </div>
        <motion.div 
        initial={{ opacity: 0 }}
        animate={isLoading ? {} : { opacity: 3 }}
        exit={{ opacity: 0.01 }}
        transition={{ duration: 2 }}
        className='esker-container' ><img src='campsite/esker.png' alt='esker' className='esker'></img></motion.div>
        <motion.div 
        initial={{ opacity: 0 }}
        animate={isLoading ? {} : { opacity: 1 }}
        exit={{ opacity: 0.01 }}
        transition={{ duration: 5 }}
        className='ship-container'><img src='campsite/ship.webp' alt='ship' className='ship'></img></motion.div>
        <motion.div 
        initial={{ opacity: 0 }}
        animate={isLoading ? {} : { opacity: 1 }}
        exit={{ opacity: 0.01 }}
        transition={{ duration: 3 }}
        className='banjo-container'><img src='campsite/banjo.svg' alt='banjo' className='banjo'></img></motion.div>
        
        <motion.div
        initial={{ opacity: 0 }}
        animate={isLoading ? {} : { opacity: 1 }}
        exit={{ opacity: 0.01 }}
        transition={{ duration: 4 }}
        className='shack-container'
        >
          <img src='campsite/tree-2.svg' alt='tree' className='tree'></img>
          <img src='campsite/tree-2.svg' alt='tree' className='tree'></img>
          <img src='campsite/tree-2.svg' alt='tree' className='tree'></img>
          <img src='campsite/tree-2.svg' alt='tree' className='tree'></img>
          <img src='campsite/shack.webp' alt='shack' className='shack'></img>
        </motion.div>
          
          
        <img className='rat' src='/campsite/rat.svg' alt='rat'></img>
        <motion.div 
        initial={{ opacity: 0 }}
        animate={isLoading ? {} : { opacity: 1 }}
        exit={{ opacity: 0.01 }}
        transition={{ duration: .25 }}
        className="moon-container"><img src="/campsite/moon.svg" alt="moon" className='moon'></img>
        </motion.div>
      </motion.div>
    );
  };

  export default CampSite;