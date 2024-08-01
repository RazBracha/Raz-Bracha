import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
  <footer id ="contact" className="footer">
    <div className='footer-container'>
      <div className='footer-content-container'>
        <p className='head'>Get in Touch</p>
        <div className='para'>
          <p className='para-1'>I’m on the lookout for a full-stack developer role where I can dive into exciting projects, learn new things, and work with awesome people. I’m a hard worker, friendly, and always up for a challenge. If you’re looking for someone who’s eager to grow and make an impact, I’d love to chat!</p>
          <p className='para-2'>Reach out—I’m excited to see what we can build together!</p>
        </div>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/razbracha" target="_blank" rel="noopener noreferrer">
            <img alt='' className='linkedin-image' src='/pictures/linkedin.svg' />
          </a>
          <a href="https://www.github.com/RazBracha" target="_blank" rel="noopener noreferrer">
          <img alt='' className='github-image' src='/pictures/github.svg' />
          </a>
          <a href="https://www.facebook.com/raz.bracha.7" target="_blank" rel="noopener noreferrer">
          <img alt='' className='facebook-image' src='/pictures/facebook.svg' />
          </a> 
          {/* <a className='email' href="mailto:razi.bracha@gmail.com"> <img alt='' className='email-image' src='/pictures/email-picture.png' /></a> */}
        </div>
      {/* <p className='copy'>© 2024 Raz Bracha.</p> */}
      </div>
    </div>
      
  </footer>
  );
}

export default Footer;