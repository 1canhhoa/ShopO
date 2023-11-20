

import fallbackLogo from '~/Assests/images/fallbackLogo.jpg';
import noData from '~/Assests/images/noData.jpeg';
import noProducts from '~/Assests/images/noProducts.jpg';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Reveal from '~/components/Reveal';
import Feedback from './Feedback';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const About = () => {

  return (
    <div className='text-3xl  w-full h-full font-bold bg-slate-100 '>
      <div className="  px-4 max-w-[1216px] h-full  mx-auto">
        <div className="h-[170px] hhh w-full th-fl bg-sky-100">
          Contact
        </div>
        <div className='flex flex-col items-center bg-white h-[1000px]'>
          <div className='font-semibold text-2xl'>Customers Feedback</div>
          <Swiper
            effect={'silde'}
            grabCursor={true}
            spaceBetween={123}
            loop={false}
            slidesPerView={3}
            // centeredSlides={true}
            coverflowEffect={{
              // xoay ảnh
              rotate: 0,
              // mật độ 
              stretch: 0,
              // độ to ảnh ở giữa
              depth: 0,
              // co nhỏ thẻ Swiper,giấu thẻ còn lại đằng sau thẻ ở giữa
              modifier: 0,
            }}
            // breakpoints={{
            //   1000: {
            //     slidesPerView: 2,
            //     spaceBetween: 123
            //   },
            //   768: {
            //     slidesPerView: 2,
            //     spaceBetween: 50
            //   },
            //   480: {
            //     slidesPerView: 1,
            //     spaceBetween: 10
            //   }
            // }}

            pagination={{ el: '.swiper-pagination', dynamicBullets: false, clickable: true }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className='swiper'
          >
            <SwiperSlide className="item ">
              <Feedback />
            </SwiperSlide>
            <SwiperSlide className="item ">
              <Feedback />
            </SwiperSlide>
            <SwiperSlide className="item ">
              <Feedback />
            </SwiperSlide>
            <SwiperSlide className="item ">
              <Feedback />
            </SwiperSlide>
            <SwiperSlide className="item ">
              <Feedback />
            </SwiperSlide>
            <SwiperSlide className="item ">
              <Feedback />
            </SwiperSlide>
            <SwiperSlide className="item ">
              <Feedback />
            </SwiperSlide>
            <div className="swiper-button-prev">
            </div>
            <div className="swiper-button-next">
            </div>
            <div className="swiper-pagination"></div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default About