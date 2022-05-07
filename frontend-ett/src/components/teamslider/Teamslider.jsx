
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

import "./teamslider.css";

export default function App({setSelectedGame, teams}) {

  return (
    <Swiper
      slideToClickedSlide={true}
      centeredSlides={true}
      slidesPerView={3}
      spaceBetween={10}
      breakpoints={{
        300: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        1400: {
          slidesPerView: 3,
          spaceBetween: 50,
        }
      }}

      // slidesPerGroup={3}
      loop={true}
      loopFillGroupWithBlank={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}

      initialSlide={3}
      modules={[Pagination, Navigation]}
      className="mySwiper"
      onTransitionEnd={(swiper) => {
        if (setSelectedGame && swiper.slides[swiper.activeIndex]) setSelectedGame(swiper.slides[swiper.activeIndex].id);
      }}
    >
      {
        teams.map((team) =>  {
          return (
            <SwiperSlide id={team.id}>
            {/* <SwiperSlide> */}
              <div className="teamslider__container">
                <img className="teamimg" src={team.attributes.image.data.attributes.formats.small.url } alt="" />
                <h2>{team.attributes.name}</h2>
              </div>
            </SwiperSlide>
        )})
      }
    </Swiper>
  );
};