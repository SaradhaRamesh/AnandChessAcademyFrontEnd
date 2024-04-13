import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const quickLinks = [
    { text: 'Home', link: '/' },
    { text: 'Tournaments', link: '/ongoingtournament' },
    { text: 'Course', link: '/course' },
    { text: 'Contact Us', link: '/contact-us' },
  ];

  return (
    <footer className={styles.footer}> {/* Use styles.footer */}
      <div className={styles['foot-container']}> {/* Use styles['foot-container'] */}
        <div className={styles.row}> {/* Use styles.row */}
          <div className={styles['col-lg-4']}> {/* Use styles['col-lg-4'] */}
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link, index) => (
                <li  key={index}>
                  <a  href={link.link}>{link.text}</a><br/><br/>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles['col-lg-4']}>
          <h4>Contact Us</h4>
              <p>Address: Society Street,Palani Rd</p>
              <p>Palani Rd Backside,</p>
              <p>Dindigul.</p>

            <p>Phone: +91 984205886</p>
            <p>Email: rameshssaratha79@gmail.com</p>
          </div>
          <div className={styles['col-lg-4']}>
            <h4>Newsletter</h4>
            <p>Subscribe to our newsletter for updates.</p>
            <form>
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
