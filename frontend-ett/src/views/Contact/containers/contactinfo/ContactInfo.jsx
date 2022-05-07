
import React from 'react'
import {FaInstagram, FaFacebook, FaTwitter, FaTwitch, FaDiscord, FaLinkedin} from 'react-icons/fa';
import { GoTriangleRight } from "react-icons/go";

import './contactinfo.css';

const ContactInfo = () => {
  return (
    <div className="ett__contactinfo section__padding">
      <div className="ett__contactinfo_header section__margin">
        <h1><GoTriangleRight className='triangle' color='#ffcc07' />CONTACT INFORMATION</h1>
      </div>
      <div className="ett__contactinfo_wrapper section__margin">
        <div className="ett__contactinfo-left">
          <div className="ett__contactinfo-left_item">
            <h2>Competition</h2>
            <h3>info@esportsteamtwente.nl</h3>
          </div>
          <div className="ett__contactinfo-left_item">
            <h2>Sponsorships</h2>
            <h3>partner@esportsteamtwente.nl</h3>
          </div>
          <div className="ett__contactinfo-left_item">
            <h2>General Information</h2>
            <h3>info@esportsteamtwente.nl</h3>
          </div>
          <div className="ett__contactinfo-left_item">
            <h2>Information and Recruitment</h2>
            <h3>apply@esportsteamtwente.nl</h3>
          </div>
        </div>
        <div className="ett__contactinfo-right">
          <div className="ett__contactinfo-right_socialheader">
            <h2>Follow us on <span>Social Media</span>!</h2>
            <h3>Check out our social media profiles below!</h3>
          </div>
          <div className="ett__contactinfo-right_social">
            <div className="ett__contactinfo-right_social-top">
              <a href="https://www.instagram.com/esportsteamtwente/" target="_blank">
                <FaInstagram size={55} />
              </a>
              <a href="https://www.facebook.com/EsportsTeamTwente" target="_blank">
                <FaFacebook size={55}/> 
              </a>  
              <a href="https://twitter.com/esportstwente" target="_blank">
                <FaTwitter size={55} />  
              </a>  
            </div>
            <div className="ett__contactinfo-right_social-bottom">
              <a href="https://www.twitch.tv/esportsteamtwente" target="_blank">
                <FaTwitch size={55}/>
              </a>  
              <a href="https://discord.gg/NqhfdNm9CF" target="_blank">
                <FaDiscord size={55}/>
              </a>
              <a href="https://www.linkedin.com/company/esports-team-twente/?originalSubdomain=nl"target="_blank">
                <FaLinkedin size={55}/>
              </a>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default ContactInfo