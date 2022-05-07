
import React, { useEffect } from 'react';

// core version + navigation, pagination modules:
import Swiper, { Mousewheel, Navigation, Pagination } from 'swiper';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import styles bundle
import 'swiper/css/bundle';

import './memberslider.css';
import { member_placeholder } from './import';

const Memberslider = ({teamMembers}) => {
  console.log("memberslider");
  console.log(teamMembers);
  useEffect(() => {
    
    const swiper = new Swiper('.memberswiper', {
      
      // configure Swiper to use modules
      modules: [Mousewheel, Navigation, Pagination],
  
      // Optional parameters
      direction: 'horizontal',
      loop: true,
  
      // If we need pagination
      pagination: {
        el: '.memberswiper-pagination',
      },
  
      // Navigation arrows
      navigation: {
        nextEl: '.memberswiper-button-next',
        prevEl: '.memberswiper-button-prev',
      },
  
      effect: 'fade',
  
      // And if we need scrollbar
      // scrollbar: {
      //   el: '.swiper-scrollbar2',
      // },
  
      observer: true,
      observerParents: true,

      slidesPerView: 3,

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
          slidesPerView: 3,
          spaceBetween: 50,
        }}

        
    });
    
    swiper.loopDestroy();
    
  }, []);
  
  return (
    <div class="swiper memberswiper">
      <div class="swiper-wrapper">
        {
          teamMembers.map((member) => {
            return (
              <div class="swiper-slide memberswiper-slide" id={member.id}>
                 <img src={member.attributes.image.data ? member.attributes.image.data[0].attributes.url : member_placeholder}alt="Member" />
                <h2>{member.attributes.name}</h2>
              </div>
            )
          })
        }

      </div>

      <div class="swiper-pagination memberswiper-pagination"></div>

      <div class="swiper-button-prev memberswiper-button-prev"></div>
      <div class="swiper-button-next memberswiper-button-next"></div>


      {/* <div class="swiper-scrollbar swiper-scrollbar2"></div> */}
    </div>
  )
}

export default Memberslider;