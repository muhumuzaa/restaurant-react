import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='findus'>
    <div app__wrapper_info>
      <SubHeading  title="Contact"/>
      <h1 className='headtext__cormorant' style={{marginBottom: "3rem"}}>Find Us</h1>
     <div className='app__wrapper-content'>
     <p className='p__opensans'>Welcome to the ultimate course, where you will leFigma designs</p>
      <p className='p__cormorant' style={{color: "#DCCA87", margin: "2rem 0" }}>Our Contact Info</p>
      <p className='p__opensans'>Mon - Fri: 10:00 am -02:00 pm</p>
      <p className='p__opensans'>Saturday: 10:00 am -02:00 pm</p>
     </div>
     <button type='button' className='custom__button' style={{marginTop: '2rem'}}>Visit us</button>
    
    </div>
    <div className='app__wrapper_img'></div>
      <img src={images.findus} alt="findus" />
  </div>
);

export default FindUs;
