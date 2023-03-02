import './AboutContentStyles.css'

import React from 'react'
import { Link } from 'react-router-dom'
import ProfilePic from '../assets/profilepic.jpg'

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src={ProfilePic} className='img' alt="placeholder" />
                </div>
            </div>
        </div>
        <div className='left'>
            <h1>Who Am I?</h1>
            <p> I am a Full Stack Web Developer with a strong communication background and long-standing experience in service. I just recently moved to the Tri-State area after spending a number of years in Charlotte, NC.    </p> 
                
            <p> Throughout the course of my career, I have perfected my customer service and technical abilities. I am a capable and consistent problem-solver, skilled at prioritizing and managing projects with proficiency. My skill set has proven valuable throughout multiple industries and has continued to grow as my career has progressed. </p>
            
            <p> I welcome you to this site to share with you a a little about me and hope that our paths connect in the future. </p>
            <Link to='/contact'>
                <button className='btn'>Contact</button>
            </Link>
        </div>
    </div>
  )
}

export default AboutContent