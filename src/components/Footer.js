import './FooterStyles.css'

import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>

                <div className='location'>
                <h4><FaHome 
                        size={20} 
                        style={{ color: '#fff', 
                        marginRight: '2rem'}}/></h4>
               
                    <div>
                        <p>Stamford, Conneticut</p>
                    </div>    
                </div>

                <div className='phone'>
                <h4><FaPhone 
                        size={20} 
                        style={{ color: '#fff', 
                        marginRight: '2rem'}}/></h4>
                    <div>
                        <p> 540 728-8714 </p>
                    </div>
                </div> 

                <div className='email'>
                <h4> <FaMailBulk 
                        size={20} 
                        style={{ color: '#fff', 
                        marginRight: '2rem'}}/></h4>
                    <div>
                        <p> terrancemilan@gmail.com </p>
                    </div>
                </div> 
            </div>  

            <div className='right'>
                <h4> About Me </h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptates rem sit vero dolorum, molestiae veniam vel facilis asperiores omnis deleniti alias, nemo quos, blanditiis illum voluptatem fugiat voluptatibus nam.
                </p>
                <div className='social'>
                    <Link to='https://github.com/nalim89'>
                        <FaGithub 
                        size={30}
                        style={{ color: '#fff',
                        marginRight: '1rem' }}/>
                    </Link>
                    <Link to='https://www.linkedin.com/in/terrancemilan/'>
                        <FaLinkedin 
                        size={30}
                        style={{ color: '#fff',
                        marginRight: '1rem' }}/>
                    </Link>
                   
                </div>
            </div>  
        </div>
    </div>
  )
}

export default Footer