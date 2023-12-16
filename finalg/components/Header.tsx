'use client'
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import Image from 'next/image'; // Import the Image component from next/image

const Header = () => {
  const openMailchimpSignup = () => {
    const mailchimpSignupUrl = 'http://eepurl.com/iFR3ec';
    window.open(mailchimpSignupUrl, '_blank');
  };

  return (
    <Navbar className="coffee-bean-color">
      <NavbarBrand>
        {/* Replace <img> with <Image> */}
        <Image 
          src="/TB1.png" 
          alt="Your Brand Logo" 
          width={100} // Set the width as needed
          height={100} // Set the height as needed
          layout="fixed" // This layout maintains the image dimensions
        />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center" style={{ flexGrow: 1 }}>
        <NavbarItem isActive>
          <a href="#Hero" className="link">HOME</a>
        </NavbarItem>
        <NavbarItem>
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
