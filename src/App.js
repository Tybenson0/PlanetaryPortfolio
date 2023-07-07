import {useDispatch, useSelector} from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { selectString, } from './app/esker';
import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './home';
import Projects from './projects';
import Skills from './skills';
import Biography from './biography';
import Contact from './contact';
import Nav from './nav.js';
import './normalizequantum.css';
import './App.css';
function App() {
  const dispatch = useDispatch();
  
  return (
    <>
    <Url />
    <section className='level-0-container'>
      <div className='space'  ></div>
    <Nav />
    <Planets />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='projects' element={<Projects />}></Route>
      <Route path='skills' element={<Skills />}></Route>
      <Route path='biography' element={<Biography />}></Route>
      <Route path='contact' element={<Contact />}></Route>
    </Routes>
      <CampSite />
    </section>
    </>
  );
}

export default App;


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
        <img src='tree-1.svg' alt='pine tree' className='tree'></img>
        <img src='tree-2.svg' alt='pine tree' className='tree'></img>
        <img src='tree-1.svg' alt='pine tree' className='tree'></img>
        <img src='tree-1.svg' alt='pine tree' className='tree'></img>
        <img src='tree-2.svg' alt='pine tree' className='tree'></img>
        <img src='tree-4.svg' alt='pine tree' className='tree'></img>
        <img src='tree-4.svg' alt='pine tree' className='tree'></img>
        <img src='tree-2.svg' alt='pine tree' className='tree'></img>
        <img src='tree-1.svg' alt='pine tree' className='tree'></img>
        <img src='tree-2.svg' alt='pine tree' className='tree'></img>
        <img src='tree-2.svg' alt='pine tree' className='tree'></img>
        <img src='tree-1.svg' alt='pine tree' className='tree'></img>
        <img src='tree-1.svg' alt='pine tree' className='tree'></img>
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
      <div className='esker-container' ><img src='esker.png' alt='esker' className='esker'></img></div>
      <div className='ship-container'><img src='ship.webp' alt='ship' className='ship'>
      </img></div>
      <div className="moon-container"><img src="/moon.svg" alt="moon" className='moon'></img>
      </div>
    </div>
  );
};


const Planets = () => {
  return (
    <div className='planet-container-0'>
      <img src='/planet-3.svg' alt='hearth' className='planet-1' ></img>
      <img src='/planet-1.svg' alt='hearth' className='planet-2' ></img>
      <img src='/planet-2.svg' alt='hearth' className='planet-3' ></img>
      <img src='/planet-4.svg' alt='hearth' className='planet-4' ></img>
    </div>
  );
};

const Url = () => {
  return (
    <div className='url'>
      
    </div>
  );
};
