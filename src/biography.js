import React, { useState, useEffect } from 'react';
import {motion} from 'framer-motion';

const Biography = () => {
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
        className='biography-container'>
            <div className='bio-border'>
                <h1 className='bio-title'>Hi, my name is Ty!</h1>
                <h2 className='bio-location'>Santa Clarita, CA, 91355</h2>
                <span class="chalk-line"></span>
                <p className='bio-text'>
                Hello, y'all! Hi i'm Ty, a laid-back web developer residing in the countryside  
                of Santa Clarita, California. I find solace and inspiration in the great outdoors, where I frequently 
                go on hikes taking in the scenery. When not exploring, 
                you'll find me playing games with my friends, watching my favorite shows, or getting my 
                hands dirty with cars.
                </p>
                <p className='bio-text'>
                For the past two years, I've been waist deep in the world of web development, and the incredible technology it brings to light. 
                 Tech is always changing, so I stay up to date ensuring that my work remains
                 innovative and cutting-edge. I'm excited to make a lasting impact in the web world through my abilities.
                  I hope you enjoyed your stay in my little pocket universe, hopefully it brought some joy to your day! 
                </p>
                <p className='bio-text'>Thank you.</p>
            </div>
        </motion.div>
    );
};

export default Biography;