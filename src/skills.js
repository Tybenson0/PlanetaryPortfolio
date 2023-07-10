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
        <svg className='skills-icon'>
        <use href="/icons/icons.svg#svelte" />
      </svg>
      <svg className='skills-icon'>
        <use href="/icons/icons.svg#html" />
      </svg>
      <svg className='skills-icon'>
        <use href="/icons/icons.svg#css" />
      </svg>
      <svg className='skills-icon'>
        <use href="/icons/icons.svg#sass" />
      </svg>
      <svg className='skills-icon'>
        <use href="/icons/icons.svg#js" />
      </svg>
      <svg className='skills-icon'>
        <use href="/icons/icons.svg#angular" />
      </svg>
      <svg className='skills-icon'>
        <use href="/icons/icons.svg#wix" />
      </svg>
      <svg className='skills-icon'>
        <use href="/icons/icons.svg#node" />
      </svg>
        </div>
      </SwiperSlide>
      <SwiperSlide className='skills-slide'>
        <div className='skills-grid'>
        <svg className='skills-icon'>
        <use href="/icons/icons.svg#npm" />
      </svg>
      <svg className='skills-icon'>
        <use href="/icons/icons.svg#php" />
      </svg>
      <svg className='skills-icon'>
        <use href="/icons/icons.svg#figma" />
      </svg>
      <svg className='skills-icon'>
        <use href="/icons/icons.svg#adobe-p" />
      </svg>
      <svg className='skills-icon'>
        <use href="/icons/icons.svg#adobe-i" />
      </svg>
      <svg className='skills-icon'>
        <use href="/icons/icons.svg#affect" />
      </svg>
      <svg className='skills-icon'>
        <use href="/icons/icons.svg#engine" />
      </svg>
      <svg className='skills-icon'>
        <use href="/icons/icons.svg#git" />
      </svg>
        </div>
      </SwiperSlide>
      
    </Swiper>
        </div>
    );
};

export default Skills;