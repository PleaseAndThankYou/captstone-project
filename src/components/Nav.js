import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#eee', padding: '1rem' }}>
      <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
        <li style={{ marginRight: '1rem' }}><Link to="/">Home</Link></li>
        <li style={{ marginRight: '1rem' }}><Link to="/booking">Booking</Link></li>
        <li style={{ marginRight: '1rem' }}><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
