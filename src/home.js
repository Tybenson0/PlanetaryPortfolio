import React from 'react';

const Home = () => {
    return (
        <div className='home'>
            <div className='main-link-container'>
                <a href="https://github.com/Tybenson0" target='_blank'><img className='main-link' src='github.svg' alt='github'></img></a>
                <a href="https://linkedin.com/in/ty-benson-dev" target='_blank'><img className='main-link' src='linkedin.svg' alt='linkedin'></img></a>
                <a href="/TB-Dev-Resumee.pdf" target='_blank'><img className='main-link' src='resume.svg' alt='resume'></img></a>
            </div>
            <div className='title-container'>
                <h1 className='title-name'>Ty R. Benson</h1>
                <h2 className='title-title'>Web Developer</h2>
            </div>
        </div>
    );
};

export default Home;