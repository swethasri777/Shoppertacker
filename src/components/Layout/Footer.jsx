import React from 'react';

const Footer = () => {
  return (
    <section className="footer d-flex align-items-start pt-5">
      <div className="footer-one">
        <h3>ABOUT</h3>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact Us</a>
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/disclaimer">Disclaimer</a>
      </div>
      <div className="footer-one">
        <h3>Social Media</h3>
        <a href="/">Facebook</a>
        <a href="/about">Instagram</a>
        <a href="/contact">Whatsapp</a>
      </div>
      <div className="footer-one">
        <h3>Careers</h3>
        <a href="/">Jobs</a>
        <a href="/about">Internships</a>
      </div>
      <div className="footer-one">
        <h3>Mail Us</h3>
        <a href="/">dealdash@gmail.com</a>
        <a href="/about">allgooddeals@gmail.com</a>
      </div>
      <div className="footer-last para">
        <address>Address</address>
        <p>5103 Stonehedge, Fort Wayne, Indiana</p>
      </div>
    </section>
  );
}

export default Footer;
