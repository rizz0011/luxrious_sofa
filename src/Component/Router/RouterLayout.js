import React from "react";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import Contact from "../../Pages/Contact/Contact";
import Gallery from "../../Pages/Gallery/Gallery";
import Service from "../../Pages/Service/Service";
import Nav from "../../Pages/Nav/Nav";




function RouterLayout() {
  const sectionStyle = {
    margin: '10px 0'
  };

  return (
    <>
      <Nav />
      <div id="home" style={sectionStyle}>
        <Home />
      </div>
      <div id="about" style={sectionStyle}>
        <About />
      </div>
      <div id="services" style={sectionStyle}>
        <Service />
      </div>
      <div id="gallery" style={sectionStyle}>
        <Gallery />
      </div>
      <div id="contact" style={sectionStyle}>
        <Contact />
      </div>
    </>
  );
}

export default RouterLayout;
