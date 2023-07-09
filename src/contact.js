import React from 'react';

const contact = () => {
    return (
        <div className='contact-container'>
            <div className='contact-form-container'>
                <div className='clip-board-head'>
                <a href="https://linkedin.com/in/ty-benson-dev" target='_blank' rel="noreferrer"><img className='contact-link' src='linkedin.svg' alt='linkedin'></img></a>
                <a href="https://github.com/Tybenson0" target='_blank' rel="noreferrer"><img className='contact-link' src='github.svg' alt='github'></img></a>
                <a href="/TB-Dev-Resumee.pdf" target='_blank' rel="noreferrer"><img className='contact-link' src='resume.svg' alt='resume'></img></a>
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
        </div>
    );
};

export default contact;