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
                <span className="chalk-line"></span>
                <p className='bio-text'>
                Hello y'all, From the bottom of my heart I want to thank you for taking the time to check out this little pocket universe I created,
                it means alot to me. Growing up I was always the black sheep of the family, where my parents and my sister all went into medical or trades and
                I ended up finding my passion in technology and the outdoors. This passion lead me to attend school at Western Governors university where I 
                achieved my bachelors in Computer Science. My dream is to become a great programmer, not the best. I want to create projects that test my limits
                allowing me to become better each and every day, projects that help people in some way and potentially better the world. Thats my dream...
    
                </p>
                <p className='bio-text'>

                </p>
                <p className='bio-text'>Thank you.</p>
            </div>
        </motion.div>
    );
};

export default Biography;