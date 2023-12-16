'use client'
// Header.js


import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";


const Header = () => {
  const openMailchimpSignup = () => {
    // Replace 'MAILCHIMP_SIGNUP_URL' with the actual Mailchimp signup form URL
    const mailchimpSignupUrl = 'http://eepurl.com/iFR3ec';
    
    // Open the Mailchimp signup form in a new tab
    window.open(mailchimpSignupUrl, '_blank');
  };

  return (
    <Navbar className="coffee-bean-color">
      <NavbarBrand>
        <img src="/TB1.png" alt="Your Brand Logo" style={{ width: '100px', height: '100px' }} /> 
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center" style={{ flexGrow: 1 }}>
        <NavbarItem isActive>
        <a href="#Hero" className="link">HOME</a>
          
    
 </NavbarItem>
        <NavbarItem isActive>
        <a href="#Cards" className="link">MENU</a>
        </NavbarItem>
        <NavbarItem>
        <a href="#AboutUs" className="link">ABOUT</a>
          
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        
        <NavbarItem>
          <Button color="primary" onClick={openMailchimpSignup} variant="flat">
            SIGN UP
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
