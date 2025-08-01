import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <header
        className="header"
      >
        <Link to="/" aria-label="Go to Homepage">
            <img className="logo"
            src="https://images.squarespace-cdn.com/content/v1/67103c066422782526fbfe18/fe6943f5-1a9a-4119-9a05-acdce564a938/transparent+logo.png?format=1500w" alt="Logo"/>
        </Link>

        </header>
    );
  };

  export default Header;