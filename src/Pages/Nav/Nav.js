import React, { useState, useEffect } from 'react';
import './Nav.css';
import { AiFillHome } from 'react-icons/ai';
import { BiUserPin } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { MdContactPhone } from 'react-icons/md';
import { GrGallery } from 'react-icons/gr';
import { MdCall } from "react-icons/md";


function Nav() {
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['#home', '#about', '#services', '#gallery', '#contact'];
      const offsets = sections.map(section => ({
        section,
        offset: document.querySelector(section).offsetTop
      }));

      const currentSection = offsets.reduce((acc, curr) => {
        if (window.scrollY >= curr.offset - 50) {
          return curr.section;
        }
        return acc;
      }, '#home');

      setActive(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (section) => {
    setActive(section);
    document.querySelector(section).scrollIntoView({ behavior: 'smooth' });
  };

  const handleCall = () => {
    window.location.href = 'tel:+91 7019419283';
  };

  return (
    <nav>
      <a href="#home" onClick={() => handleClick('#home')} className={active === '#home' ? 'active' : ''}><AiFillHome /></a>
      <a href="#about" onClick={() => handleClick('#about')} className={active === '#about' ? 'active' : ''}><BiUserPin /></a>
      <a href="#services" onClick={() => handleClick('#services')} className={active === '#services' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#gallery" onClick={() => handleClick('#gallery')} className={active === '#gallery' ? 'active' : ''}><GrGallery /></a>
      <a href="#contact" onClick={() => handleClick('#contact')} className={active === '#contact' ? 'active' : ''}><MdContactPhone /></a>
      <a  onClick={handleCall} ><MdCall /></a>
   
    </nav>
  );
}

export default Nav;
