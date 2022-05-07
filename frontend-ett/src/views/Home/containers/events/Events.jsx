
import React from 'react';

import './events.css';

import { Eventslider } from '../../../../components/export';

import { Fade } from "react-awesome-reveal";
import { GoTriangleRight } from "react-icons/go";

const Events = ({requestService}) => {

  return (
    <div className='ett__events section__padding'>
      <div className="ett__events-heading section__margin">
        <Fade direction='left' duration={2500} damping={0.1} cascade triggerOnce>
          <h1><GoTriangleRight className='triangle' color='#ffcc07' />UPCOMING EVENTS</h1>
        </Fade>
      </div>

      <Fade direction='left' duration={2500} damping={0.1} cascade triggerOnce>
        <div className="ett__events-slider">
          <Eventslider requestService={requestService}/>
        </div>
      </Fade>
    </div>
  )
}

export default Events