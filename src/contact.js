import React from 'react';
import {motion} from 'framer-motion';

const contact = () => {
    return (
        <motion.div 
        initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: .01}}
    transition={{ duration: 0.5 }}
        className='contact-container'>
            <div className='contact-form-container'>
                <div className='clip-board-head'>
                <a href="/TB-Dev-Resumee.pdf " target='_blank' rel="noreferrer"><svg className='contact-link'>
        <use  href="icons/icons.svg#resume" />
      </svg></a>
                <a href="https://github.com/Tybenson0" target='_blank' rel="noreferrer"><svg className='contact-link'>
        <use href="/icons/icons.svg#github" />
      </svg></a>
                <a href="https://linkedin.com/in/ty-benson-dev " target='_blank' rel="noreferrer"><svg className='contact-link'>
        <use href="/icons/icons.svg#linkedin" />
      </svg></a>
                </div>
                <form
            class="clip-board-body"
            action="https://formspree.io/f/mpzbkyby"
            method="POST"
          >
            <label class="form-name">
            Your Name:
            </label>
              <input
                type="name"
                name="name"
                placeholder="luke skywalker..."
                class="name-input"
              />
            <label class="form-email">
            Your Email:
            </label>
              <input
                type="name"
                name="name"
                placeholder="blabla@gmail.com"
                class="email-input"
              />
            <label class="form-phone">
            Phone #:
            </label>
              <input
                type="name"
                name="name"
                placeholder="661-***-****"
                class="phone-input"
              />
              <input
                type="name"
                name="name"
                placeholder="Subject..."
                class="subject-input"
              />
              <textarea className='form-text' name="text" placeholder='Your Message...'>
               
              </textarea>
            
          </form>
            </div>
        </motion.div>
    );
};

export default contact;