import React from 'react';
import './Footer.css';

function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer_backToTop" onClick={handleScrollToTop}>
        Back to top
      </div>

      <div className="footer_linksContainer">
        <div className="footer_column">
          <h3>Get to Know Us</h3>
          <ul>
            <li>About Amazon</li>
            <li>Careers</li>
            <li>Press Releases</li>
            <li>Amazon Science</li>
          </ul>
        </div>

        <div className="footer_column">
          <h3>Connect with Us</h3>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>

        <div className="footer_column">
          <h3>Make Money with Us</h3>
          <ul>
            <li>Sell on Amazon</li>
            <li>Sell under Amazon Accelerator</li>
            <li>Protect and Build Your Brand</li>
            <li>Amazon Global Selling</li>
            <li>Supply to Amazon</li>
          </ul>
        </div>

        <div className="footer_column">
          <h3>Let Us Help You</h3>
          <ul>
            <li>Your Account</li>
            <li>Returns Centre</li>
            <li>100% Purchase Protection</li>
            <li>Amazon App Download</li>
            <li>Help</li>
          </ul>
        </div>
      </div>

      <hr className="footer_divider" />

      <div className="footer_logoSection">
        <img 
          className="footer_logo" 
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
          alt="Amazon Logo" 
        />
        <div className="footer_languageSelect">
          <span>English</span>
        </div>
      </div>

      <div className="footer_bottom">
        <div className="footer_bottomLinks">
          <span>Conditions of Use & Sale</span>
          <span>Privacy Notice</span>
          <span>Interest-Based Ads</span>
        </div>
        <p className="footer_copyright">
          © 1996-2026, Amazon.com, Inc. or its affiliates
        </p>
      </div>
    </footer>
  );
}

export default Footer;