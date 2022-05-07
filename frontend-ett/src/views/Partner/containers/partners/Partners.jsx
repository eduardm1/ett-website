

import React, { useState, useEffect } from "react";
import { BsArrowUpRightSquareFill } from 'react-icons/bs';
import { GoTriangleRight } from 'react-icons/go';
import { Fade } from "react-awesome-reveal";

import Partnerslider from '../../../../components/partnerslider/Partnerslider';

import './partners.css';

const Partners = ({partners}) => {

  const [selectedPartner, setSelectedPartner] = useState('3');
  const [partnerName, setPartnerName] = useState();
  const [partnerImage, setPartnerImage] = useState();
  const [partnerDescription, setPartnerDescription] = useState();
  const [partnerLink, setPartnerLink] = useState();

  useEffect(() => {
    const partnerid = partners.find((partner) => partner.id === parseInt(selectedPartner));
    if (partnerid) {
      setPartnerName(partnerid.attributes.name); 
      setPartnerImage(partnerid.attributes.image.data[0].attributes.url); 
      setPartnerDescription(partnerid.attributes.description.length > 250
        ? `${partnerid.attributes.description.slice(0, 250)}...`
        : partnerid.attributes.description);
      setPartnerLink(partnerid.attributes.link);
    }
  }, [selectedPartner])

  return (
    <div className='ett__partners section__padding'>
      <div className="ett__partners-heading section__margin">
        <Fade direction='down' duration={2000} triggerOnce>
        <div className="ett__partners-heading-title">
          
          <h1><GoTriangleRight className="triangle" color='#ffcc07' />OUR PARTNERS</h1>
        </div>

        <div className="ett__partners-slider section__margin">
        {/* use partners as a parameter */}
        <Partnerslider partners={partners} setSelectedPartner={setSelectedPartner} />
      </div>

        <div className='ett__partners-heading-image' key={selectedPartner}>
          {partnerImage && <img src={partnerImage} alt="" />}
          <div className="ett__partners-heading-image_description">
            {partnerName && <h2>{partnerName}</h2>}
            {partnerDescription && <div><p>{partnerDescription}</p>
            {partnerLink && <button class="bnlearnmore-hover bn1" onClick={()=>{window.open(partnerLink)}}>Learn More <BsArrowUpRightSquareFill /></button>}</div>}
          </div>

          <div className="ett__partners-heading-image_description-small">
            {partnerName && <h2>{partnerName}</h2>}
            {partnerDescription && <div><p>{partnerDescription}</p>
            <a href="/"><button class="bnlearnmore-hover bn1">Learn More <BsArrowUpRightSquareFill /></button></a></div>}
          </div>
        </div>
        </Fade>
      </div>
    </div>
  );
};

export default Partners;