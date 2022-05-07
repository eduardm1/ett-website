
import React, {useEffect} from 'react';
import './footer.css';

import ettLogoWordmark from '../../assets/ett_logo/ett_logo_wordmark.png';

import { Fade } from "react-awesome-reveal";
import {FaInstagram, FaFacebook, FaTwitter, FaTwitch, FaDiscord, FaLinkedin} from 'react-icons/fa';

const Footer = () => {

  return (
    <div className='ett__footer section__padding'>
      <div className="ett__footer-links">

        <div className="ett__footer-links_logo">
          <img src={ettLogoWordmark} alt="ettLogoWordmark" />  
          <p>De Hems 10, 7522 NL Enschede, The Netherlands, All Right Reserved.</p>
        </div>

        <div className="ett__footer-links_div">
          <h4>Business</h4>
          <a href='/teams'><p>Meet the Team</p></a>
          <a href='/projects'><p>Positions</p></a>
          <a href='/blogs'><p>News</p></a>
        </div>

        <div className="ett__footer-links_div">
          <h4>Contact Us</h4>
          <a href='contact'><p>info@esportsteamtwente.nl</p></a>
          <a href='contact'><p>+31 06 37 28 03 03</p></a>
        </div>
      </div>

      <div className="ett__footer-followus">
        <h4>Connect with us: </h4>
        <div className="ett__footer-followus_icons">
          <a href="https://www.instagram.com/esportsteamtwente/">
            <FaInstagram size={40} />
          </a>
          <a href="https://www.facebook.com/EsportsTeamTwente">
            <FaFacebook size={40}/> 
          </a>  
          <a href="https://twitter.com/esportstwente">
            <FaTwitter size={40} />  
          </a>  
          <a href="https://www.twitch.tv/esportsteamtwente">
            <FaTwitch size={40}/>
          </a>
          <a href="https://discord.gg/NqhfdNm9CF">
            <FaDiscord size={40}/>
          </a>
          <a href="https://www.linkedin.com/company/esports-team-twente/?originalSubdomain=nl">
            <FaLinkedin size={40}/>
          </a>  
        </div>
      </div>
    </div>
  )
}

export default Footer