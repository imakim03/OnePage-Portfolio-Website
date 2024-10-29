import React from 'react';
import '../styles/HeroSection.css';

const HeroSection = () => {

  return (
        <section id='sectionOne'>
        <div className='mainContent'>
          <p className='name'>John Doe</p>
          <h1 className='title'>I am a Designer</h1>
          <p className='paragraph'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
        <div className='bottomContent'>
          <p className='paragraph moreInfo'>scroll to continue...</p>
          <a href='#' className='learnMore' data-text='Learn more About me →'>Learn more About me →</a>
        </div>
      </section>
  );
};

export default HeroSection;
