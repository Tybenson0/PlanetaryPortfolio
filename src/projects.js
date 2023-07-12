import React from 'react';
import { Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import {motion} from 'framer-motion';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Projects = () => {
    return (
            <motion.div 
            initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: .01}}
    transition={{ duration: 0.5 }}
            className='projects-container'>
                 <Swiper
                  modules={[ Pagination, Scrollbar, A11y]}
                  spaceBetween={5}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log('slide change')}
                  className='swiper-projects'
                >
            <SwiperSlide className='projects-slide'>
                        <div className='projects-flex'>
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
                        </SwiperSlide>
            <SwiperSlide className='projects-slide'>
            <div className='projects-flex'>
                            <div className='project-container'>
                                <button>
                                    <h1 className='project-title'>Moshified</h1>
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
                                <h1 className='project-title'>ItsNittyGritty</h1>
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
            
                        </div>
                        </SwiperSlide>
                </Swiper>
            </motion.div>
    );
};

export default Projects;