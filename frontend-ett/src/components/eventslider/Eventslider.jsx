
import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import DateFormatter from "../DateFormatter";
import TimeFormatter from '../TimeFormatter';

// core version + navigation, pagination modules:
import Swiper, { Mousewheel, Navigation, Pagination } from 'swiper';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import styles bundle
import 'swiper/css/bundle';

import './eventslider.css';
import { SwiperSlide } from 'swiper/react';

const Eventslider = ({requestService}) => {

  const [events, setEvents] = useState([]);
  const [startDate, setStart] = useState();
  const [endDate, setEnd] = useState();
  useEffect(() => {
    requestService
    .getEvents()
    .then((events) => {
      setEvents(events.data);
    })
  }, []);

  // function monthsSperation(events) {
  //   const months = [];

  //   for (var i=0; i<events.length; i++) {

  //   }
  // }

  useEffect(() => {

    const swiper = new Swiper('.eventswiper', {
      
      // configure Swiper to use modules
      modules: [Mousewheel, Navigation, Pagination],
  
      // Optional parameters
      direction: 'vertical',
      loop: true,
  
      // If we need pagination
      pagination: {
        el: '.eventswiper-pagination',
        clickable: true,
      },

      slidesPerView: 1,
      spaceBetween: 30,
      mousewheel: true,

      observer: true,
      observerParents: true,
    });
  
  }, []);
  
  return (
  
    <div class="swiper eventswiper">
      <div class="swiper-wrapper">

        {
          events.map((event) => {
            const date = DateFormatter(event.attributes.start_date);
            {/* var time = new Date(`${event.attributes.start_date}`);
            var newtime = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }); */}

            return(
                <SwiperSlide>
                  <div className='gallery-title'> 
                    {event.attributes.title} 
                  </div>

                  <div className='gallery-description'> 
                    {date}
                    <br />
                    {TimeFormatter(event.attributes.start_time)} 
                  </div>  
                  
                  <Link to={`/event/${event.id}`}> 
                    <img className='galleryview' src= {event.attributes.image.data[0].attributes.url}></img>
                  </Link>
                  
                </SwiperSlide>

            )
          })
        }
      </div>

      <div class="swiper-pagination eventswiper-pagination"></div>
    </div>
  )
}

export default Eventslider