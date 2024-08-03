import React from "react";
import "./Contact.css";
import { MdEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';


function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ef4ad816-a112-4a46-9973-870934707869");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }

    // Clear the result message after 3 seconds
    setTimeout(() => {
      setResult("");
    }, 3000);
  };

  return (
    <div className="contact-us">
      <header className="contact-us-header">
        <h1>Contact Us</h1>
      </header>
      <div className='contact__options'>
        <article className='contact__option'>
          <MdEmail />
          <h4>Email</h4>
          <h5>luxuriousesofafurniture@gmail.com</h5>
          <a href='mailto:luxuriousesofafurniture@gmail.com'>Send a message</a>
        </article>

        <article className='contact__option'>
          <BsWhatsapp />
          <h4>WhatsApp</h4>
          <a href='https://wa.me/8553243154?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20services...'>Send a message</a>
        </article>

        <article className='contact__option'>
          <BsInstagram />
          <h4>Instagram</h4>
          <a href='https://instagram.com/luxurious_sofa_'>Send a message</a>
        </article>
      </div>
      <section className="contact-us-content">
        <h2>Get in Touch with Us</h2>
        <p>
          We are here to assist you with all your furniture repair and restoration needs. 
          Whether you have a question, need a quote, or want to schedule a service, feel free to reach out to us.
        </p>
        
        <form className="contact-form" onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
        {result && (
          <div className="result-message">
            <span className="icon">✔️</span>
            <span>{result}</span>
          </div>
        )}
      </section>
      <footer className="contact-us-footer">
        <h2 className="footer__logo">Luxurious Sofa Furniture</h2>
        <div className="footer__contacts">
          <p><MdEmail /> luxuriousesofafurniture@gmail.com</p>
          <p><BsWhatsapp /> +91 8553243154</p>
          <p><BsInstagram /> <a href='https://instagram.com/luxurious_sofa_'>luxurious_sofa_</a></p>
          <p>#38/8, 1st Cross Bandepalya Garebhavi Palya, HSR Trinity Apartment Road Bengaluru (560058)</p>
        </div>
        <div className="footer__copyright">
          <small>© 2024 Luxurious Sofa Furniture. All rights reserved</small>
        </div>
      </footer>    
    </div>
  );
}

export default Contact;
