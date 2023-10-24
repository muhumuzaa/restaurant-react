import React from 'react';
import { SubHeading } from '../../components';
import {FooterOverlay, Newsletter} from '../../components'
import {FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi'

import './Footer.css';
import { images } from '../../constants';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>
    <div className='app__footer-links_contact'>
      <h1 className='app__footer-headtext'>Contact Us</h1>
      <p className='p__opensans'>21 Pausj On T</p>
      <p className='p__opensans'>+734 7373 7483</p>
      <p className='p__opensans'>+734 7373 7483</p>
    </div>

    <div className='app__footer-links_logo'>
      <img src={images.gericht} alt="logo" />
      <p className='p__opensans'>turn them into four modern, responsive, beautifully</p>
      <img src={images.spoon} alt="spoon" className='spoon__img' style={{marginTop: '15px'}}/>
      <div className='app__footer-links_icons'>
        <FiFacebook />
        <FiTwitter />
        <FiInstagram />
      </div>

    </div>

    <div className='app__footer-links_work'>
    <h1 className='app__footer-headtext'>Working Hours</h1>
      <p className='p__opensans'>Monday - Friday</p>
      <p className='p__opensans'>07: 12: 00 pm</p>
      <p className='p__opensans'>Saturday - Sunday</p>
      <p className='p__opensans'>07: 12: 00 pm</p>
    </div>

    </div>

    <div className='footer__copyright'>
      <p className='p__opensans'>2030 Gnena. All Rights Reserved</p>
    </div>
  </div>

  
);

export default Footer;
