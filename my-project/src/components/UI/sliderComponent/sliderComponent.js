'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import React from 'react';

export default function SliderComponent({ data }) {
    return (
        <div className="relative w-full">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                slidesPerView={1} 
                spaceBetween={20} 
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                className="mySwiper"
            >
                {data?.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div
                            style={{
                                backgroundImage: `url(https://baktyiar.pythonanywhere.com/${item.poster})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                            className="w-full h-[300px] rounded-lg"
                        >
                            
                            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-white font-bold text-lg rounded-lg">
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
                <button className="swiper-button-prev bg-white p-2 rounded-full shadow-md"></button>
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
                <button className="swiper-button-next bg-white p-2 rounded-full shadow-md"></button>
            </div>
        </div>
    );
}
