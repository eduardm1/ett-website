import React from "react";
import { Navbar, Footer, Lavabg } from "../../components/export";
import { Header, Mailing, ContactInfo } from "./containers/export";
import "./contact.css";
import { Fade } from "react-awesome-reveal";

const Contact = ({ requestService }) => {
  return (
    <div className='background' id='page'>
      <Navbar currentPage='Contact' requestService={requestService} />
      <Fade direction='left' duration={3000} triggerOnce>
        <Header />
      </Fade>
      <Fade direction="down" duration={3000} triggerOnce>
        <Mailing requestService={requestService}/>
      </Fade>
      <Fade direction="down" duration={3000} triggerOnce>
        <ContactInfo /> 
      </Fade>
      <Footer />
      <Lavabg />
    </div>
  );
};

export default Contact;
