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
                                    <h1 className='project-title' onClick={() => dispatch(selectString(1))}>SoCalTubSpecialist</h1>
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
                                <h1 className='project-title' onClick={() => dispatch(selectString(2))}>AimeeOkiFoundation</h1>
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
                                <h1 className='project-title' onClick={() => dispatch(selectString(3))}>TyTheCodeGuy</h1>
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
                                    <h1 className='project-title' onClick={() => dispatch(selectString(4))}>Moshified</h1>
                                </button>
                                <span class="chalk-line"></span>
            
                                <div className='projects-link-container'>
                                <a href="https://moshifiedmockapp.netlify.app/" target='_blank' rel='noreferrer'><svg className='project-link'>
                                    <use href="/icons/icons.svg#link" />
                                </svg></a>
                                                <a href="https://github.com/Tybenson0/Mock-app" target='_blank' rel='noreferrer'><svg className='project-link'>
                                    <use href="/icons/icons.svg#code" />
                                </svg></a>
                                </div>
                            </div>
                            <div className='project-container'>
                                <h1 className='project-title' onClick={() => dispatch(selectString(5))}>RememberThat</h1>
                                <span class="chalk-line"></span>
                                <div className='projects-link-container'>
                                    <a href=" https://remember-test.netlify.app/" target='_blank' rel='noreferrer'><svg className='project-link'>
                                    <use href="/icons/icons.svg#link" />
                                </svg></a>
                                                <a href="https://github.com/Tybenson0/RememberIt" target='_blank' rel='noreferrer'><svg className='project-link'>
                                    <use href="/icons/icons.svg#code" />
                                </svg></a>
                                </div>
                            </div>
                            <div className='project-container'>
                                <h1 className='project-title' onClick={() => dispatch(selectString(5))}>PlanetaryPortfolio</h1>
                                <span class="chalk-line"></span>
                                <div className='projects-link-container'>
                                
                                                <a href="https://github.com/Tybenson0/QuantumPortfolio" target='_blank' rel='noreferrer'><svg className='project-link'>
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