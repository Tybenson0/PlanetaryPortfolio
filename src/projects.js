import React, { useState, useEffect } from 'react';
import { Pagination, Scrollbar, A11y } from 'swiper/modules';
import {useDispatch} from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import {motion} from 'framer-motion';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { selectString } from './app/esker';

const Projects = () => {
    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay of 1 second for demonstration purposes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const dispatch = useDispatch();
    return (
            <motion.div 
            initial={{ opacity: 0 }}
      animate={isLoading ? {} : { opacity: 1 }}
      exit={{ opacity: 0.01 }}
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
                                    <h1 className='project-title' onClick={() => dispatch(selectString(1))}>ASTEROIDA</h1>
                                </button>
                                <span className="chalk-line"></span>
            
                                <div className='projects-link-container'>
                                    <a href="https://asteroidia.onrender.com" target='_blank' rel='noreferrer'>
                                        <img src="/icons/asteroidia.png" alt="Asteroida webpage" className='projects-image'></img>
                                    </a>
                                    <a href="https://github.com/Tybenson0/Asteroidia.git" target='_blank' rel='noreferrer'>
                                        <svg className='project-link'>
                                        <use href="/icons/icons.svg#github2" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className='project-container'>
                                <h1 className='project-title' onClick={() => dispatch(selectString(2))}>VOLKSWAGONEER</h1>
                                <span className="chalk-line"></span>
                                <div className='projects-link-container'>
                                    <a href="https://volkswagoneer.onrender.com" target='_blank' rel='noreferrer'>
                                        <img src="/icons/volkswagoneer.png" alt="Volkswagoneer webpage" className='projects-image'></img>
                                    </a>
                                    <a href="https://github.com/Tybenson0/Volkswagoneer.git" target='_blank' rel='noreferrer'>
                                        <svg className='project-link'>
                                        <use href="/icons/icons.svg#github2" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className='project-container'>
                                <h1 className='project-title' onClick={() => dispatch(selectString(3))}>THE PI PONICS PROJECT</h1>
                                <span className="chalk-line"></span>
                                <div className='projects-link-container'>
                                    <a href="/" target='_blank' rel='noreferrer'>
                                        <img src="/icons/pi-ppnics.png" alt="pi-ponics webpage" className='projects-image'></img>
                                    </a>
                                    <a href="https://github.com/Tybenson0/The-Pi-Ponics-Project.git" target='_blank' rel='noreferrer'>
                                        <svg className='project-link'>
                                        <use href="/icons/icons.svg#github2" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
            <SwiperSlide className='projects-slide'>
            <div className='projects-flex'>
                            <div className='project-container'>
                                <button>
                                    <h1 className='project-title' onClick={() => dispatch(selectString(4))}>THE AIMEE OKI FOUNDATION</h1>
                                </button>
                                <span className="chalk-line"></span>
                                <div className='projects-link-container'>
                                    <a href="https://aimee-oki-foundation.vercel.app/" target='_blank' rel='noreferrer'>
                                        <img src="/icons/aimee.png" alt="Aimee oki webpage" className='projects-image'></img>
                                    </a>
                                    <a href="https://github.com/Tybenson0/AimeeOkiFoundation" target='_blank' rel='noreferrer'>
                                        <svg className='project-link'>
                                        <use href="/icons/icons.svg#github2" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className='project-container'>
                                <h1 className='project-title' onClick={() => dispatch(selectString(5))}>Python Package Delivery</h1>
                                <span className="chalk-line"></span>
                                <div className='projects-link-container'>
                                    <a href="https://www.youtube.com/watch?v=MapfSDed65Q" target='_blank' rel='noreferrer'>
                                        <img src="/icons/10AM3.png" alt="Python package video" className='projects-image'></img>
                                    </a>
                                    <a href="https://github.com/Tybenson0/Python-Package-Delivery.git" target='_blank' rel='noreferrer'>
                                        <svg className='project-link'>
                                        <use href="/icons/icons.svg#github2" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className='project-container'>
                                <h1 className='project-title' onClick={() => dispatch(selectString(28))} >C++ Class Roster</h1>
                                <span className="chalk-line"></span>
                                <div className='projects-link-container'>
                                    <a href="https://www.youtube.com/watch?v=_KSN1Xk3Tfw" target='_blank' rel='noreferrer'>
                                        <img src="/icons/class_roster.png" alt="cPP roster video" className='projects-image'></img>
                                    </a>
                                    <a href="https://github.com/Tybenson0/CPP-Class-Roster.git" target='_blank' rel='noreferrer'>
                                        <svg className='project-link'>
                                        <use href="/icons/icons.svg#github2" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
            
                        </div>
                        </SwiperSlide>
                </Swiper>
            </motion.div>
    );
};

export default Projects;