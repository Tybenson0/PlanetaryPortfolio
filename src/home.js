import React from 'react';

const Home = () => {
    return (
        <div className='home'>
            <div className='main-link-container'>
            <a href="/TB-Dev-Resumee.pdf " target='_blank' rel="noreferrer"><svg className='main-link'>
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
        </div>
    );
};

export default Home;