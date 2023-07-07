import React from 'react';

const Projects = () => {
    return (
        <div className='projects-container'>
            <div className='project-container'>
                <h1 className='project-title'>SoCalTubSpecialist</h1>
                <span class="chalk-line"></span>
                <div className='projects-link-container'>
                    <img className='project-link' src='github.svg' alt='github'></img>
                    <img className='project-link' src='resume.svg' alt='github'></img>
                </div>
            </div>
            <div className='project-container'>
                <h1 className='project-title'>AimeeOkiFoundation</h1>
                <span class="chalk-line"></span>
                <div className='projects-link-container'>
                    <img className='project-link' src='github.svg' alt='github'></img>
                    <img className='project-link' src='resume.svg' alt='github'></img>
                </div>
            </div>
            <div className='project-container'>
                <h1 className='project-title'>TyTheCodeGuy</h1>
                <span class="chalk-line"></span>
                <div className='projects-link-container'>
                    <img className='project-link' src='github.svg' alt='github'></img>
                    <img className='project-link' src='resume.svg' alt='github'></img>
                </div>
            </div>
        </div>
    );
};

export default Projects;