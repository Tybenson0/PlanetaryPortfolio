import React, { useState, useEffect } from 'react';import {motion} from 'framer-motion';
import { Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import {useDispatch} from 'react-redux';
import { selectString } from './app/esker';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Skills = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

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
        className='skills-container'>
            <div className='skills-title-container'>
                <h1 className='skills-title'>Skills & Technologies</h1>
                <span class="chalk-line"></span>
            </div>
            <Swiper
      modules={[ Pagination, Scrollbar, A11y]}
      spaceBetween={5}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className='swiper-container'
    >
      <SwiperSlide className='skills-slide'>
        <div className='skills-grid'>
        <svg className='skills-icon' onClick={() => dispatch(selectString(7))}>
        <use href="/icons/icons.svg#svelte" />
      </svg>
      <svg className='skills-icon' onClick={() => dispatch(selectString(8))}>
        <use href="/icons/icons.svg#html" />
      </svg>
      <svg className='skills-icon' onClick={() => dispatch(selectString(9))}>
        <use href="/icons/icons.svg#css" />
      </svg>
      <svg className='skills-icon' onClick={() => dispatch(selectString(10))}>
        <use href="/icons/icons.svg#sass" />
      </svg>
      <svg className='skills-icon' onClick={() => dispatch(selectString(11))}>
        <use href="/icons/icons.svg#js" />
      </svg>
      <svg className='skills-icon' onClick={() => dispatch(selectString(12))}>
        <use href="/icons/icons.svg#angular" />
      </svg>
      <svg className='skills-icon' onClick={() => dispatch(selectString(13))}>
        <use href="/icons/icons.svg#wix" />
      </svg>
      <img src='./icons/redux.svg' alt='redux' className='skills-icon' onClick={() => dispatch(selectString(14))}></img>
        </div>
      </SwiperSlide>
      <SwiperSlide className='skills-slide'>
        <div className='skills-grid'>
        <svg className='skills-icon' onClick={() => dispatch(selectString(15))}>
        <use href="/icons/icons.svg#npm" />
      </svg>
      <img src='icons/react.svg' alt='react' className='skills-icon' onClick={() => dispatch(selectString(16))}></img>
      <svg className='skills-icon' onClick={() => dispatch(selectString(17))}>
        <use href="/icons/icons.svg#figma" />
      </svg>
      <svg className='skills-icon' onClick={() => dispatch(selectString(18))}>
        <use href="/icons/icons.svg#adobe-p" />
      </svg>
      <img src='icons/vue.svg' alt='vue' className='skills-icon' onClick={() => dispatch(selectString(19))}></img>
      <img src='icons/ts.svg' alt='typescript' className='skills-icon' onClick={() => dispatch(selectString(20))}></img>
      <img src='icons/seo.svg' alt='seo' className='skills-icon' onClick={() => dispatch(selectString(21))}></img>
      <svg className='skills-icon' onClick={() => dispatch(selectString(22))}>
        <use href="/icons/icons.svg#git" />
      </svg>
        </div>
      </SwiperSlide>
      
    </Swiper>
  </motion.div>
    );
};

export default Skills;