
import React from 'react';
import { Navbar, Footer, Lavabg } from '../../components/export';
import { Game } from './containers/export';
import './team.css';

import { Fade } from "react-awesome-reveal";

const Team = ({requestService}) => {
  return (
    <div className='Team'>
      <div className='background' id='page'>
        <Navbar currentPage="Team" requestService={requestService}/>
        <Game requestService={requestService}/>

        <Fade duration={3000} cascade triggerOnce>
          <Footer />
        </Fade>

        <Lavabg />
      </div>
    </div>
  )
}

export default Team;