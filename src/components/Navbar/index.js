import React, { useState } from 'react';
import FreeGreen from '../../assets/Image/FreGreen.png';
import './index.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText
} from 'reactstrap';
import { Link } from 'react-router-dom'

function NavbarHome(args) {
  const [isHoverHome, setIsHoverHome] = useState(false);

   const handleMouseEnterHome = () => {
      setIsHoverHome(true);
   };
   const handleMouseLeaveHome = () => {
      setIsHoverHome(false);
   };

   const [isHoverProduct, setIsHoverProduct] = useState(false);

   const handleMouseEnterProduct = () => {
      setIsHoverProduct(true);
   };
   const handleMouseLeaveProduct = () => {
      setIsHoverProduct(false);
   };

   const [isHoverAboutUs, setIsHoverAboutUs] = useState(false);

   const handleMouseEnterAboutUs = () => {
      setIsHoverAboutUs(true);
   };
   const handleMouseLeaveAboutUs = () => {
      setIsHoverAboutUs(false);
   };

   const [isHoverLogin, setIsHoverLogin] = useState(false);

   const handleMouseEnterLogin = () => {
      setIsHoverLogin(true);
   };
   const handleMouseLeaveLogin = () => {
      setIsHoverLogin(false);
   };

   
   
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className='border' style={{backgroundColor:'#ffff'}} {...args}>
        <NavbarBrand href="/"><img width={'90px'} src={FreeGreen} className='logo-navbar' alt=""/></NavbarBrand>
        <NavbarToggler style={{color:'#1E9153'}} onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='me-auto' navbar>
          
            <NavbarText >
              <Link style={{fontFamily:'Roboto',
              fontWeight:'500',
              fontSize:'18px',
              textDecoration:'none',
              paddingLeft:'75px',
              color: isHoverHome ? '' : '#1E9153',
              transition: 'all 0.2s ease-in-out 0.1s'}} onMouseEnter={handleMouseEnterHome} onMouseLeave={handleMouseLeaveHome}>
                Home
              </Link>
            </NavbarText>
            <NavbarText>
              <Link style={{fontFamily:'Roboto',
              fontWeight:'500',
              fontSize:'18px',
              textDecoration:'none',
              paddingLeft:'75px',
              color: isHoverProduct ? '' : '#1E9153',
              transition: 'all 0.2s ease-in-out 0.1s'}} onMouseEnter={handleMouseEnterProduct} onMouseLeave={handleMouseLeaveProduct}>
                Product
              </Link>
            </NavbarText>
            <NavbarText>
              <Link to={'#about'} style={{fontFamily:'Roboto',
              fontWeight:'500',
              fontSize:'18px',
              textDecoration:'none',
              paddingLeft:'75px',
              color: isHoverAboutUs ? '' : '#1E9153',
              transition: 'all 0.2s ease-in-out 0.1s'}} onMouseEnter={handleMouseEnterAboutUs} onMouseLeave={handleMouseLeaveAboutUs}>
                About Us
              </Link>
            </NavbarText>
            <NavbarText>
              <Link style={{fontFamily:'Roboto',
              fontWeight:'500',
              fontSize:'18px',
              textDecoration:'none',
              paddingLeft:'75px',
              color: isHoverLogin ? '' : '#1E9153',
              transition: 'all 0.2s ease-in-out 0.1s'}} onMouseEnter={handleMouseEnterLogin} onMouseLeave={handleMouseLeaveLogin}>
                Login
              </Link>
            </NavbarText>
            </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarHome;