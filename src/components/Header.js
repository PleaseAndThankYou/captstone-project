import React from 'react';

const Header = () => {
    return (
      <header
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '200px',
          borderBottom: '1px solid #ddd',
          backgroundColor: '#fff',
        }}
      >
    <img src="https://images.squarespace-cdn.com/content/v1/67103c066422782526fbfe18/fe6943f5-1a9a-4119-9a05-acdce564a938/transparent+logo.png?format=1500w" alt="Logo" style={{ height: '300px' }} />


        </header>
    );
  };

  export default Header;