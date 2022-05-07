
import React, { useEffect, useState } from 'react';
import './sponsors.css';

import {Partnerslider} from '../../../../components/export';

import { Fade } from "react-awesome-reveal";
import { GoTriangleRight } from "react-icons/go";

const Sponsors = ({requestService}) => {

  const [partners, setPartners] = useState([]);
  useEffect(() => {
    requestService.getPartners().then((partners) => {
      setPartners(partners.data);
    });
  }, []);

  return (
    <div className='ett__brand section__padding' >
      <div className="ett__brand-heading section__margin">
        <Fade direction='down' duration={2500} cascade triggerOnce>
          <h1><GoTriangleRight className='triangle' color='#ffcc07' />OUR PARTNERS</h1>
        </Fade>
      </div>

      <div className="ett__brand-slider">
        <Partnerslider partners={partners} />
      </div>
    </div>
  )
}

export default Sponsors