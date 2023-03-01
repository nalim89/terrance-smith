import './HeroImgStyles.css';

import React from 'react'

import IntoImg from '../assets/charlotte.jpeg'
import { Link } from 'react-router-dom';

const HeroImg = () => {
  return <div className='hero'>
    <div className='mask'>
        <img className='into-img' src={IntoImg} alt='IntoImg'/>
    </div>
    <div  className='content'>
        <p> Hi, I am Terrance. </p>
        <h1> Web Developer </h1>
        <div>
            <Link to='/projects' className='btn'> Projects</Link>
            <Link to='/contact' className='btn btn-light'> Contact</Link>
        </div>
    </div>
  </div>;
}

export default HeroImg