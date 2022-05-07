
import React from 'react'
import { Map } from '../../../../components/export';

import './header.css';

const Header = () => {
  
  return (
    <div className="ett__contact__header section__padding">
      <div className="ett__contact__header-title section__margin">
        <h2>Visit Us!</h2>
        <p>You can find us at the Bastille Building at the University of Twente Campus, feel free to stop by and show your interest and passion for e-sports!</p>
        <a href="https://goo.gl/maps/y7rEGsK6cUPnVdKf6"  target="_blank" rel="noopener noreferrer"><button class="bnlearnmore-hover bn1">Discover More</button></a>
      </div>
      <div className="ett__contact__header-maps">
        {/* <h1>Map goes here</h1> */}
        <Map />
      </div>
    </div>
  )
}

export default Header