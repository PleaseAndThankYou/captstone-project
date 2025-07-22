import React from 'react';
// import './Specials.css'; // Optional external styles

const Specials = () => {
  return (
    <section className="specials-container">
      <img
        className="specials-image"
        src="https://media.istockphoto.com/id/465926211/photo/baked-beans-cutout.jpg?s=612x612&w=0&k=20&c=gLJeZg4m8e-1LXk140uGe5_UKc2JH2gIUaKWTlikVNU="
        alt="A Special"
      />
      <div className="specials-content">
        <h1 className="specials-title">Today's Special</h1>
        <p className="specials-description">Enjoy our chef's exclusive dish crafted with fresh, local ingredients.</p>
        <button className="specials-button">Order Now</button>
      </div>
    </section>
  );
};

export default Specials;
