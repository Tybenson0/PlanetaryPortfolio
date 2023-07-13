import React from 'react';
import {motion} from 'framer-motion';

const Biography = () => {
    return (
        <motion.div 
        initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: .01}}
    transition={{ duration: 0.5 }}
        className='biography-container'>
            <div className='bio-border'>
                <h1 className='bio-title'>Hi, my name is Ty!</h1>
                <h2 className='bio-location'>Santa Clarita, CA, 91355</h2>
                <span class="chalk-line"></span>
                <p className='bio-text'>
                Hi, I'm Ty, a passionate web developer dedicated to crafting captivating online experiences.
                 With a strong command of HTML, CSS, and JavaScript, I specialize in creating responsive and 
                 user-friendly websites. I thrive on solving complex coding challenges and staying up to date 
                 with the latest web development trends. Let's build exceptional digital solutions together!
                </p>
                <p className='bio-text'>
                Hi, I'm Ty, a passionate web developer dedicated to crafting captivating online experiences.
                 With a strong command of HTML, CSS, and JavaScript, I specialize in creating responsive and 
                 user-friendly websites. I thrive on solving complex coding challenges and staying up to date 
                 with the latest web development trends. Let's build exceptional digital solutions together!
                </p>
            </div>
        </motion.div>
    );
};

export default Biography;