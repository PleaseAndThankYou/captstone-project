import React from 'react';

function Nav() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#eee', padding: '1rem' }}>
      <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
        <li style={{ marginRight: '1rem' }}><a href="#">Home</a></li>
        <li style={{ marginRight: '1rem' }}><a href="#">About</a></li>
        <li style={{ marginRight: '1rem' }}><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
