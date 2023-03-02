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
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi possimus commodi itaque numquam nulla doloremque rem pariatur maiores, odio quisquam voluptates, dolores iure vitae deserunt! Nostrum labore similique quo incidunt? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum incidunt perspiciatis aut eum libero ad consequatur voluptatibus alias commodi molestiae dolorum sapiente, soluta velit possimus laboriosam ea! Id, nisi aut?</p>
            <Link to='/contact'>
                <button className='btn'>Contact</button>
            </Link>
        </div>
    </div>
  )
}

export default AboutContent