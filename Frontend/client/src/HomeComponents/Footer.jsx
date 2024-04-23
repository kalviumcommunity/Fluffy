import React from 'react';
import Black from "../images/adopt1.webp"
import { Link } from 'react-router-dom'; // If you're using React Router for navigation

function Footer() {
  return (
    <footer style={{backgroundColor: '#f8f9fa', padding: '20px 0', marginTop: '50px'}}>
        <div>
            <img src={Black} alt="" />
        </div>
      <div style={{display: 'flex', justifyContent: 'space-between', maxWidth: '1200px', margin: '0 auto'}}>
        <div style={{flex: '1', margin: '0 10px'}}>
          <h3>Explore</h3>
          <ul>
            <li><Link to="/adopt" style={{color: '#343a40', textDecoration: 'none'}}>Adopt a Pet</Link></li>
            <li><Link to="/report-lost-pet" style={{color: '#343a40', textDecoration: 'none'}}>Report Lost Pet</Link></li>
            <li><Link to="/shop" style={{color: '#343a40', textDecoration: 'none'}}>Shop</Link></li>
          </ul>
        </div>
        <div style={{flex: '1', margin: '0 10px'}}>
          <h3>Company</h3>
          <ul>
            <li><Link to="/about" style={{color: '#343a40', textDecoration: 'none'}}>About Us</Link></li>
            <li><Link to="/contact" style={{color: '#343a40', textDecoration: 'none'}}>Contact Us</Link></li>
            <li><Link to="/privacy-policy" style={{color: '#343a40', textDecoration: 'none'}}>Privacy Policy</Link></li>
          </ul>
        </div>
        <div style={{flex: '1', margin: '0 10px'}}>
          <h3>Connect</h3>
          <ul>
            <li><a href="https://facebook.com/fluffy-pets" style={{color: '#343a40', textDecoration: 'none'}}>Facebook</a></li>
            <li><a href="https://twitter.com/fluffy-pets" style={{color: '#343a40', textDecoration: 'none'}}>Twitter</a></li>
            <li><a href="https://instagram.com/fluffy-pets" style={{color: '#343a40', textDecoration: 'none'}}>Instagram</a></li>
          </ul>
        </div>
      </div>
      <div style={{textAlign: 'center', marginTop: '20px'}}>
        <p style={{margin: '0', color: '#868e96', fontSize: '14px'}}>&copy; {new Date().getFullYear()} Fluffy. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
