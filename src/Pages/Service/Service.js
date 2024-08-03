import React from "react";
import "./Service.css";

function Service() {
  return (
    <div className="services">
      <header className="services-header">
        <h1>Our Services</h1>
      </header>
      <section className="services-content">
        <div className="service">
          <h2>Sofa Repair</h2>
          <p>We provide high-quality sofa repair services to extend the life of your furniture.</p>
        </div>
        <div className="service">
          <h2>Wood Refinishing</h2>
          <p>We offer wood refinishing services to restore the original beauty of your wooden furniture.</p>
        </div>
        <div className="service">
          <h2>Furniture Assembly</h2>
          <p>Our experts provide efficient and reliable furniture assembly services for your convenience.</p>
        </div>
        <div className="service">
          <h2>Recliner</h2>
          <p>We offer a variety of recliner options for ultimate comfort in your living space.</p>
        </div>
        <div className="service">
          <h2>Headboard</h2>
          <p>Choose from our stylish headboard designs to enhance your bedroom decor.</p>
        </div>
        <div className="service">
          <h2>Bed</h2>
          <p>Explore our range of beds crafted for comfort and style.</p>
        </div>
        <div className="service">
          <h2>Automain</h2>
          <p>Our automain services provide innovative solutions for your furniture needs.</p>
        </div>
        <div className="service">
          <h2>Dining Chair</h2>
          <p>We offer a variety of dining chairs that combine comfort and elegance.</p>
        </div>
        <div className="service">
          <h2>Fuffi</h2>
          <p>Discover our unique Fuffi furniture designed for both style and relaxation.</p>
        </div>
      </section>
      {/* <footer className="services-footer">
        <p>© 2024 XXXXXX Furniture. All rights reserved.</p>
      </footer> */}
    </div>
  );
}

export default Service;
