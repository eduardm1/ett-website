
import React, { useEffect } from 'react'
import Swiper, { Mousewheel, Navigation, Pagination, SwipeSlide } from 'swiper';
import { Fade } from 'react-awesome-reveal';

// Import Swiper and modules styles
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

// import styles bundle
import 'swiper/css/bundle';

import './partnerslider.css';

const Partnerslider = ({setSelectedPartner, partners}) => {

  useEffect(() => {
    const swiper = new Swiper('.partnerswiper', {
      on: {
        transitionEnd: (swiper) => {
          if (swiper.slides[swiper.activeIndex]) setSelectedPartner(swiper.slides[swiper.activeIndex].id);
        },
      },

       // configure Swiper to use modules
       modules: [Mousewheel, Navigation, Pagination],
  
       // Optional parameters
       direction: 'horizontal',
       loop: true,
   
       // If we need pagination
       pagination: {
         el: '.partnerswiper-pagination',
       },
   
       // Navigation arrows
       navigation: {
         nextEl: '.partnerswiper-button-next',
         prevEl: '.partnerswiper-button-prev',
       },
   
       effect: 'fade',
   
       // And if we need scrollbar
       // scrollbar: {
       //   el: '.swiper-scrollbar2',
       // },
   
       observer: true,
       observerParents: true,
       
       slideToClickedSlide: true,
       centeredSlides: true,
      //mousewheel: true,
 
       spaceBetween: 50,

       breakpoints: {
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
          slidesPerView: 4,
          spaceBetween: 50,
        }}
    });

  }, []);

  return (
    <Fade direction='down' duration={3000} cascade triggerOnce>
      <div className="swiper partnerswiper">
        <div className="swiper-wrapper">
          {
            partners.map((partner) => {
              return (
                <div class="swiper-slide partnerswiper-slide" id={partner.id} >
                  <img src = {partner.attributes.image.data[0].attributes.url} alt="Member" />
                  <h2>{partner.attributes.name}</h2>
                </div>
              )
            })
          }
        </div>

        <div class="swiper-pagination partnerswiper-pagination"></div>

        <div class="swiper-button-prev partnerswiper-button-prev"></div>
        <div class="swiper-button-next partnerswiper-button-next"></div>

      </div>
    </Fade>
  )
}

export default Partnerslider;