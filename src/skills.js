import React from 'react';
import { Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Skills = () => {
    return (
        <div className='skills-container'>
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
        <img className='skills-icon' src='skills/svelte.svg' alt='github'></img>
        <img className='skills-icon' src='skills/sass.svg' alt='github'></img>
        <img className='skills-icon' src='skills/css.svg' alt='github'></img>
        <img className='skills-icon' src='skills/figma.svg' alt='github'></img>
        <img className='skills-icon' src='skills/html.svg' alt='github'></img>
        <img className='skills-icon' src='skills/ts.svg' alt='github'></img>
        <img className='skills-icon' src='skills/js.svg' alt='github'></img>
        <img className='skills-icon' src='skills/node.svg' alt='github'></img>
        </div>
      </SwiperSlide>
      <SwiperSlide className='skills-slide'>
        <div className='skills-grid'>
        <img className='skills-icon' src='github.svg' alt='github'></img>
        <img className='skills-icon' src='github.svg' alt='github'></img>
        <img className='skills-icon' src='github.svg' alt='github'></img>
        <img className='skills-icon' src='github.svg' alt='github'></img>
        <img className='skills-icon' src='github.svg' alt='github'></img>
        <img className='skills-icon' src='github.svg' alt='github'></img>
        <img className='skills-icon' src='github.svg' alt='github'></img>
        <img className='skills-icon' src='github.svg' alt='github'></img>
        </div>
      </SwiperSlide>
      <SwiperSlide className='skills-slide'>
        <div className='skills-grid'>
        <img className='skills-icon' src='github.svg' alt='github'></img>
        <img className='skills-icon' src='github.svg' alt='github'></img>
        <img className='skills-icon' src='github.svg' alt='github'></img>
        <img className='skills-icon' src='github.svg' alt='github'></img>
        <img className='skills-icon' src='github.svg' alt='github'></img>
        <img className='skills-icon' src='github.svg' alt='github'></img>
        <img className='skills-icon' src='github.svg' alt='github'></img>
        <img className='skills-icon' src='github.svg' alt='github'></img>
        </div>
      </SwiperSlide>
    </Swiper>
        </div>
    );
};

export default Skills;