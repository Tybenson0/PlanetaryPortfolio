import React from 'react';

const Projects = () => {
    return (
        <div className='projects-container'>
            <div className='project-container'>
                <button>
                    <h1 className='project-title'>SoCalTubSpecialist</h1>
                </button>
                <span class="chalk-line"></span>
                <div className='projects-link-container'>
                <a href="https://socaltubspecialist.netlify.app/" target='_blank' rel='noreferrer'><svg className='project-link'>
        <use href="/icons/icons.svg#link" />
      </svg></a>
                    <a href="https://github.com/Tybenson0/socaltubs" target='_blank' rel='noreferrer'><svg className='project-link'>
        <use href="/icons/icons.svg#code" />
      </svg></a>
                </div>
            </div>
            <div className='project-container'>
                <h1 className='project-title'>AimeeOkiFoundation</h1>
                <span class="chalk-line"></span>
                <div className='projects-link-container'>
                    <a href=" https://aimeeokifoundation.com/" target='_blank' rel='noreferrer'><svg className='project-link'>
        <use href="/icons/icons.svg#link" />
      </svg></a>
                    <a href="https://github.com/Tybenson0/AimeeOki " target='_blank' rel='noreferrer'><svg className='project-link'>
        <use href="/icons/icons.svg#code" />
      </svg></a>
                </div>
            </div>
            <div className='project-container'>
                <h1 className='project-title'>TyTheCodeGuy</h1>
                <span class="chalk-line"></span>
                <div className='projects-link-container'>
                    <a href="https://tythecodeguy.netlify.app/" target='_blank' rel='noreferrer'><svg className='project-link'>
        <use href="/icons/icons.svg#link" />
      </svg></a>
                    <a href="https://github.com/Tybenson0/Portfolio" target='_blank' rel='noreferrer'><svg className='project-link'>
        <use href="/icons/icons.svg#code" />
      </svg></a>
                </div>
            </div>
        </div>
    );
};

export default Projects;