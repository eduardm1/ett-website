import React, { useEffect, useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import './navbar.css';

import { Fade } from "react-awesome-reveal";

const NavbarItems = ({currentPage}) => {
  const orange = {color: 'var(--color-banana)'};
  return (
    <>
      <p style={currentPage === "Home" ? orange : {}}><Link to='/'>Home</Link></p>
      <p style={currentPage === "Team" ? orange : {}}><Link to='/teams'>Teams</Link></p>
      <p style={currentPage === "Projects" ? orange : {}}><Link to="/projects">Projects</Link></p>
      <p style={currentPage === "Events" ? orange : {}}><Link to="/events">Events</Link></p>
      <p style={currentPage === "Blogs" ? orange : {}}><Link to="/blogs">Blog</Link></p>
      <p style={currentPage === "Partner" ? orange : {}}><Link to='/partners'>Partners</Link></p>
      <p style={currentPage === "Contact" ? orange : {}}><Link to="/contact">Contact</Link></p>
    </>
)}

const Navbar = ({requestService, currentPage, paramLogo}) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const [logo, setLogo] = useState(paramLogo);

  useEffect(() => {
    if(requestService){
    requestService.getLogo(1).then((logo) => {
      setLogo(logo.data.attributes.image.data.attributes.url);
    })
  }
  })

  return (
    <div className='ett__navbar' id='nav'>
      
      {logo && <div className="ett__navbar-links">
        <Fade direction='down' duration={2000} triggerOnce >
          <div className="ett__navbar-links_logo">
          <Link to='/'><img src={logo} alt="logo" /></Link>
          </div>
        
          <div className="ett__navbar-links_container">
            <NavbarItems currentPage={currentPage}/>
          </div>
        </Fade>
      </div>}
      

      <div className="ett__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)
          } />
        }

        {toggleMenu && (
          <div className='ett__navbar-menu_container scale-up-center'>
            <div className="ett__navbar-menu_container-links">
              <NavbarItems />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar