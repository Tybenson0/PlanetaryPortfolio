
import React, { useState, useEffect } from 'react';
import {motion} from 'framer-motion'

const Home = () => {
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
            initial={{ opacity: 0 }}
      animate={isLoading ? {} : { opacity: 1 }}
      exit={{ opacity: 0.01 }}
      transition={{ duration: 0.5 }}
      className='home'>
                <div className='main-link-container'>
                <a href="/TylerBenson-resume.pdf" target='_blank' rel="noreferrer"><svg className='main-link'>
            <use  href="icons/icons.svg#resume" />
                  </svg></a>
                    <a href="https://github.com/Tybenson0" target='_blank' rel="noreferrer"><svg className='main-link'>
            <use href="/icons/icons.svg#github" />
                  </svg></a>
                    <a href="https://linkedin.com/in/ty-benson-dev " target='_blank' rel="noreferrer"><svg className='main-link'>
            <use href="/icons/icons.svg#linkedin" />
                  </svg></a>
                </div>
                <div className='title-container'>
                    <h1 className='title-name'>Ty R. Benson</h1>
                    <h2 className='title-title'>Web Developer</h2>
                </div>
            </motion.div>
    );
};

export default Home;