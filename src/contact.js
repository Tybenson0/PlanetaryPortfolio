import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
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
      className='contact-container'
    >
      <div className='contact-form-container'>
        <div className='clip-board-head'>
          <a href='/TB-Dev-Resumee.pdf' target='_blank' rel='noreferrer'>
            <svg className='contact-link'>
              <use href='icons/icons.svg#resume' />
            </svg>
          </a>
          <a href='https://github.com/Tybenson0' target='_blank' rel='noreferrer'>
            <svg className='contact-link'>
              <use href='/icons/icons.svg#github' />
            </svg>
          </a>
          <a href='https://linkedin.com/in/ty-benson-dev' target='_blank' rel='noreferrer'>
            <svg className='contact-link'>
              <use href='/icons/icons.svg#linkedin' />
            </svg>
          </a>
        </div>
        <form data-netlify-honeypot="bot-field" name="contact" method="POST" data-netlify="true" netlify="no-success-page" action='.' className='clip-board-body'>
          <input type='hidden' name='form-name' value='contact' />
          <label className='form-name'>Your Name:</label>
          <input
            type='name'
            name='name'
            placeholder='luke skywalker...'
            className='name-input'
            required
          />
          <label className='form-email'>Your Email:</label>
          <input
            type='email'
            name='email'
            placeholder='blabla@gmail.com'
            className='email-input'
            required
          />
          <label className='form-phone'>Phone #:</label>
          <input
            type='phone'
            name='phone'
            placeholder='661-***-****'
            className='phone-input'
          />
          <input
            type='subject'
            name='subject'
            placeholder='Subject...'
            className='subject-input'
          />
          <textarea className='form-text' name='message' placeholder='Your Message...' required></textarea>
          <button type='submit' name='submit' className='submit-button'>
            Submit
          </button>
        </form>
        
      </div>
    </motion.div>
  );
};

export default Contact;