import React, { useState, useEffect} from 'react';
import { useSelector} from 'react-redux';
import {motion} from 'framer-motion'
import {useDispatch} from 'react-redux';
import { selectString,} from './app/esker';
const CampSite = () => {
  const dispatch = useDispatch();
    const {selectedString, display } = useSelector(state => state.esker);
    
    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay of 1 second for demonstration purposes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
    return (
      <motion.div
            
      className='campsite-container-0'>
        
        
        
        <motion.div 
        initial={{ opacity: 0 }}
        animate={isLoading ? {} : { opacity: 1 }}
        exit={{ opacity: 0.01 }}
        transition={{ duration: 3 }}
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
        <div class="note-container"><img src='campsite/music.svg' alt='music note' className={`music-note ${display ? 'note-fade' : ''}`}></img></div>
        <div className='eskers-dialogue-container'>
        <motion.p 
      key={selectedString}
      initial={{ opacity: 0 }}
      animate={isLoading ? {} : { opacity: 1, transition:  { duration: 1.6 } }}
      exit={{ opacity: 0 }}
      className="esker-dialogue"
    >
                {selectedString}</motion.p>
        </div>
        <motion.div 
        initial={{ opacity: 0 }}
        animate={isLoading ? {} : { opacity: 1 }}
        exit={{ opacity: 0.01 }}
        transition={{ duration: 2 }}
        className='esker-container' ><img src='campsite/esker.png' alt='esker' className='esker'></img></motion.div>
        <motion.div 
        initial={{ opacity: 0 }}
        animate={isLoading ? {} : { opacity: 1 }}
        exit={{ opacity: 0.01 }}
        transition={{ duration: 3 }}
        className='ship-container'><img src='campsite/ship.webp' alt='ship' className='ship' onClick={() => dispatch(selectString(26))}></img></motion.div>
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
        transition={{ duration: 3 }}
        className='shack-container'
        >
          <img src='campsite/tree-2.svg' alt='tree' className='tree'></img>
          <img src='campsite/tree-2.svg' alt='tree' className='tree'></img>
          <img src='campsite/tree-2.svg' alt='tree' className='tree'></img>
          <img src='campsite/tree-2.svg' alt='tree' className='tree'></img>
          <img src='campsite/shack.webp' alt='shack' className='shack' onClick={() => dispatch(selectString(27))}></img>
        </motion.div>
          
          
        <motion.img 
        initial={{ opacity: 0 }}
        animate={isLoading ? {} : { opacity: 1 }}
        exit={{ opacity: 0.01 }}
        transition={{ duration: 3 }}
        className='rat' src='/campsite/rat.svg' alt='rat' onClick={() => dispatch(selectString(25))}></motion.img>
        <motion.div 
        initial={{ opacity: 0 }}
        animate={isLoading ? {} : { opacity: 1 }}
        exit={{ opacity: 0.01 }}
        transition={{ duration: 2 }}
        className="moon-container"><img src="/campsite/moon.svg" alt="moon" className='moon'></img>
        </motion.div>
      </motion.div>
    );
  };

  export default CampSite;