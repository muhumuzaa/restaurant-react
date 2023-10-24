import React from 'react';

import './AboutUs.css';

import { images } from '../../constants';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='aboutus'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="overlay" />
    </div>
    <div className='app__aboutus-content flex__center'> 
     <div className='app__aboutus-content_about'>
      <h1 className='headtext__cormorant'>About Us</h1>
     
        <img src={images.spoon} alt="spoon" className='spoon__img' />
   
      <p className='p__opensans'>ake Figma designs, turn them into four modern, responsive, beautifully-designed applications, and get hired as a front-end developer. All the way from design, over development, to deployment on your own</p>
      <button type ="button" className='custom__button'>Read More</button>
    </div>

    <div className='app__aboutus-content_knife'>
      <img src={images.knife}/>
    </div>
    <div className='app__aboutus-content_history'>
      <h1 className='headtext__cormorant'>Our History</h1>
      <img src={images.spoon} alt="spoon" className='spoon__img' />
      <p className='p__opensans'>ake Figma designs, turn them into four modern, responsive, beautifully-designed applications, and get hired as a front-end developer. All the way from design, over development, to deployment on your own</p>
      <button type ="button" className='custom__button'>Read More</button>
    </div>

    </div>
  </div>
);

export default AboutUs;
