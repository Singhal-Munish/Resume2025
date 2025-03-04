import React from 'react';
import { images } from '../assets/Assets';

const Banner = () => {
  return (
    <>
        <div className='container-xs gx-0'>
            <img src={images.Munish} className='bannerImg' />
        </div>
        <div className='bannerTextBox'>
            <h2 className='bannerHeading'>MUNISH SINGHAL</h2>
            <h4>( Instrumentation & Control Engg, EMBA-IT )</h4>
            <h3>Front End Developer </h3>
            <h3>Google Certified UX Designer</h3>
            <h3>Industrial Automation Expert</h3>
        </div>
        
    </>
  )
}

export default Banner