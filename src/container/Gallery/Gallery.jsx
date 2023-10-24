import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import {BsInstagram, BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs';

import './Gallery.css';

const Gallery = () => {

  const g_images = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]

  const scrollRef = React.useRef(null);

  const scroll = (direction) =>{
    const {current} = scrollRef;

    if(direction === "left"){
      current.scrollleft -= 300;
    }else{
      current.scrollleft += 300;
    }
  }

  return (
  <div className='app__gallery flex__center'>
    <div className='app__gallery-content'>
      <SubHeading title="Instagram"/>
      <h1 className='headtext__cormorant'>Photo Gallery</h1>
      <p className='p__opensans' style={{color: '#AAA', marginTop: '2rem'}}> course, where you will learn how to take Figma designs, turn them into four modern, responsive, beautifully-designed applications, and get hired as a front-end developer. All the way from design, over development</p>
      <button type='button' className='custom__button'>View More</button>
    </div>

    <div className='app__gallery-images'>
      <div className='app__gallery-images_container' ref={scrollRef}>
        {g_images.map((image, index) =>(
          <div className='app__gallery-images_card flex__center' key={'gallery_image-${index + 1}'}> 
          <img src={image} alt="gla" />
          <BsInstagram className='gallery_image-icon'/>
          </ div>
        ))}
      </div>
      <div className='app__gallery-images_arrows'>
      <BsArrowLeftShort className='gallery-icon' onClick={() => scroll('left')}/> 
      <BsArrowRightShort className='gallery-icon' onClick={() => scroll('right')}/>
      </div>
    </div>
  </div>
);
}

export default Gallery;
