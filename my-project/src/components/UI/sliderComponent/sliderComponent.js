'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import React from 'react';

export default function SliderComponent(){

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      };
      
    return(
        <div>
            <h1>Slider</h1>
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={2}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}

        >
        <SwiperSlide><div className="bg-orange-300 w-full h-[300px]">Slide 1</div></SwiperSlide>
        <SwiperSlide><div className="bg-yellow-300 w-full h-[300px]">Slide 2</div></SwiperSlide>
        <SwiperSlide><div className="bg-lime-300 w-full h-[300px]">Slide 3</div></SwiperSlide>
        <SwiperSlide><div className="bg-green-300 w-full h-[300px]">Slide 4</div></SwiperSlide>      
        </Swiper>
    </div>
    )
}