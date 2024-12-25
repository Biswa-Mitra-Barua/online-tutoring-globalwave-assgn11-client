import React from 'react';
import { A11y, EffectFade, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import { Swiper, SwiperSlide } from 'swiper/react';

const Banner = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
            spaceBetween={50}
            effect="fade"
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            loop={true}
            className=' shadow-xl rounded-lg'
        >
            <SwiperSlide>
                <img src="/Images/Banner-01.jpg" alt="" className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] object-cover" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/Images/Banner-02.jpg" alt="" className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] object-cover" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/Images/Banner-03.jpg" alt="" className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] object-cover" />
            </SwiperSlide>
        </Swiper>
    );
};

export default Banner;