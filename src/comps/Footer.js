import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer id ="contact" className="footer">
        <div className='footer-container'>
    <div className='footer-content-container'>
        < p className='head'>Get in Touch</p>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/razbracha" target="_blank" rel="noopener noreferrer">
          <img alt='' className='linkedin-image' src='/pictures/linkedin.png' />
        </a>
        <a href="https://www.github.com/RazBracha" target="_blank" rel="noopener noreferrer">
          <img alt='' className='github-image' src='/pictures/github.png' />
        </a>
        <a href="https://www.facebook.com/raz.bracha.7" target="_blank" rel="noopener noreferrer">
          <img alt='' className='facebook-image' src='/pictures/facebook.png' />
        </a> 
        {/* <a className='email' href="mailto:razi.bracha@gmail.com"> <img alt='' className='email-image' src='/pictures/email-picture.png' /></a> */}

      </div>

      <p className='copy'>© 2024 Raz Bracha.</p>
      </div>
    </div>
      
    </footer>
  );
}

export default Footer;