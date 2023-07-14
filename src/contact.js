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
                name='contact'
            class="clip-board-body"
            action="/contact"
            method="POST"
          >
            <input type='hidden' name='form-name' value='contact'></input>
            <label class="form-name">
            Your Name:
            </label>
              <input
                type="name"
                name="name"
                placeholder="luke skywalker..."
                class="name-input"
                required
              />
            <label class="form-email">
            Your Email:
            </label>
              <input
                type="email"
                name="email"
                placeholder="blabla@gmail.com"
                class="email-input"
                required
              />
            <label class="form-phone">
            Phone #:
            </label>
              <input
                type="phone"
                name="phone"
                placeholder="661-***-****"
                class="phone-input"
              />
              <input
                type="subject"
                name="subject"
                placeholder="Subject..."
                class="subject-input"
              />
              <textarea className='form-text' name="message" placeholder='Your Message...' required>
               
              </textarea>
              <button type='submit' name='submit' className='submit-button'>Submit</button>
          </form>
            </div>
        </motion.div>
    );
};

export default contact;