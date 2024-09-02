'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import React from 'react';

export default function SliderComponent({data}){

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
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            pagination={pagination}
        >
            {data?.map((item) => (
                <SwiperSlide key={item.id}><div style={{backgroundImage: `url(https://baktyiar.pythonanywhere.com/${item.poster})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}} className="w-full h-[1600px]"></div></SwiperSlide>     
            ))}
        </Swiper>
    </div>
    )
}