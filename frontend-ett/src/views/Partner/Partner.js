
import React, { memo, useEffect, useState } from 'react';
import { Navbar, Footer, Lavabg } from '../../components/export';
import { Partners } from './containers/export';
import { Fade } from "react-awesome-reveal";

import './Partner.css';

const Partner = ({requestService}) => {
  const [logo, setLogo] = useState();

  useEffect(() => {
    requestService.getLogo(1).then((logo) => {
      setLogo(logo.data.attributes.image.data.attributes.url);
    })
  },[])

  const [partners, setPartners] = useState();
  
  useEffect(() => {
    requestService.getPartners().then((partners) => {
      console.log("this is partner", partners);
      setPartners(partners.data);
    })
  }, []);


  return (
    <div className='background' id='page'>
      <Navbar currentPage="Partner" requestService={requestService}/>
      {partners && <Partners partners={partners} />}

      <Fade duration={3000} cascade triggerOnce>
        <Footer />
      </Fade>

      <Lavabg />
    </div>
  )
}

export default Partner;