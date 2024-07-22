import React, { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import { selectString,} from './app/esker';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion'
const Nav = () => {
    const dispatch = useDispatch();

    const handleLinkClick = (index) => {
        setTimeout(() => {
          dispatch(selectString(index));
        }, 1250); // Delay for 1 second (adjust as needed)
      };
      const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay of 1 second for demonstration purposes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);
    return (
        <motion.div
        initial={{ opacity: 0 }}
  animate={isLoading ? {} : { opacity: 1 }}
  exit={{ opacity: 0.01 }}
  transition={{ duration: 0.5 }}
  className='nav-container-0'>
            <ul className='nav-ul'>
                <li className='nav-li'>
                    <Link to="projects" className='nav-link' onClick={() => handleLinkClick(0)}>Projects & Work Experience</Link>
                </li> 
                <p className='nav-link'>/</p>
                <li className='nav-li'>
                    <Link to="biography" className='nav-link' onClick={() => handleLinkClick(23)} >About Me</Link>
                </li>
                <p className='nav-link'>/</p>
                <li className='nav-li'>
                    <Link to="contact" className='nav-link' onClick={() => handleLinkClick(24)}>Work With Me!</Link>
                </li>
                <p className='nav-link'>/</p>
                <li className='nav-li'>
                    <Link to="/" className='nav-link' 
                    onClick={() => handleLinkClick()}>Home</Link>
                </li>
            </ul>
        </motion.div>
    );
};

export default Nav;