import React, { useContext } from 'react';
import homeFooter from './Footer.module.scss';
import MenuContext from '../../../utils/MenuContext';

const Footer = ({menuFooter}) => {

  const styles = menuFooter || homeFooter;

  return (
    <footer className={styles.footer}>
      <div className={styles["container"]}>
        <div className={styles["footer-content"]}>
          <div className={styles["footer-column"]}>
            <h3>About Us</h3>
            <p>Indias fastest delivery app, Providing good food with rewards. free registration and enjoy enjoy meal. Buy 2 items get free delivary</p>
          </div>
          <div className={styles["footer-column"]}>
            <h3>Services</h3>
            <ul>
              <li>Web Design</li>
              <li>Graphic Design</li>
              <li>SEO</li>
            </ul>
          </div>
          <div className={styles["footer-column"]}>
            <h3>Contact Us</h3>
            <p>Email: foodbazaar.official@gmail.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
        </div>
        <div className={styles["footer-bottom"]}>
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
