import './HeroImg4Styles.css';

import React, { Component } from 'react';

import IntoImg from '../assets/amsterdam.jpg'

class HeroImg4 extends Component {
    render() {

    return <div className='hero'>
        <div className='mask'>
            <img className='into-img' src={IntoImg} alt='IntoImg'/>
        </div>
        <div className='content'>
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
        </div>
    </div>
    }
};

export default HeroImg4;