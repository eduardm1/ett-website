
import React, { useEffect, useState } from 'react';
import { Navbar, Footer, Lavabg } from '../../components/export';
import { Header, Sponsors, Teams, Events } from './containers/export';
import Loading from '../../assets/ETT_Intro_Video_Short.mp4';
import { Fade } from "react-awesome-reveal";
// import Scroll from '../../components/SmoothScroll'; //Smooth Scrolling, additional feature might be implemented

const Home = ({requestService}) => {
  const [logo, setLogo] = useState();

  useEffect(() => {
    requestService.getLogo(1).then((logo) => {
      setLogo(logo.data.attributes.image.data.attributes.url);
    })
  })

  return (
    <div className='background' id='page'>
      {logo ? 
      <div>
        
        <Navbar currentPage="Home" paramLogo={logo} />
        <Header />
        <Sponsors requestService={requestService}/>
        <Teams requestService={requestService}/>
        <Events requestService={requestService}/>
        
        <Fade duration={3000} cascade triggerOnce>
          <Footer />
        </Fade>

      </div>
      : <video autoPlay loop muted src={Loading}/>
      }
    <Lavabg />
   </div> 
  )
}

export default Home;