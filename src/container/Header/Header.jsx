import React from 'react';

import './Header.css';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
   <div className='app__wrapper_info'>
    <SubHeading title ="Juicy Meals all through"/>
    <h1 className='app_header-h1'>The Key to Fine Dining</h1>
    <p className='p__opensans' style={{margin: '2rem 0'}}>ultimate course, where you will learn how to take Figma designs, turn them into four modern, responsive, beautifully-designed applications, and get hired as a front-end developer. All the way from design, over development, to deployment on your own web development portfolio!</p>
    <button type='button' className='custom__button'>Explore Menu</button>
   </div>
   <div className='app__wrapper_img'>
    <img src={images.welcome} alt='welcome' />
   </div>
  </div>
);

export default Header;
