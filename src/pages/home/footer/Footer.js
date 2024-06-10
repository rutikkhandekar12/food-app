import React, { useContext } from 'react';
import './Footer.scss';
import MenuContext from '../../../utils/MenuContext';

const Footer = () => {

  // const  context = useContext(MenuContext);
  // console.log("contec...: ",context);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            {/* <h1>{context.user.name}</h1> */}
            <h3>About Us</h3>
            <p>Indias fastest delivery app, Providing good food with rewards. free registration and enjoy enjoy meal. Buy 2 items get free delivary</p>
          </div>
          <div className="footer-column">
            <h3>Services</h3>
            <ul>
              <li>Web Design</li>
              <li>Graphic Design</li>
              <li>SEO</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Contact Us</h3>
            <p>Email: foodbajar.official@gmail.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
