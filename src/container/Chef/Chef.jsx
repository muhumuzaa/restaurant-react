import React from 'react';

import './Chef.css';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding' id='chef'>
   <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef" />
   </div>

   <div className='app__wrapper_info'>
    <SubHeading title="Chef's Section"/>
    <h1 className='headtext__cormorant'>What we believe in</h1>
    <div className='app__chef-content'>
      <div className='app__chef-content_quote'>
        <img src={images.quote} alt="quote" />
        <p className='p__opensans'>Welcome to the ultimate course, where you will learn how to take Figma designs</p>
      </div>
      <p className='p__opensans'>where you will learn how to take Figma designs, turn them into four modern, responsive, beautifully-designed applications, and get hired as a front-end developer. All the way from design, over development, to deployment on your own web development portfolio</p>
    </div>
    <div className='app__chef-sign'>
      <p>Ambroze Kweronda</p>
      <p>Chef & Founder</p>
      <img src={images.sign} alt="sign" />
    </div>
  
   </div>
  </div>
);

export default Chef;
