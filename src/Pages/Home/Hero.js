import React, { useState } from 'react';
import './Hero.css';


const Hero = () => {
    
    return (
        <div className='hero'>
            <h3>Choose your App List</h3>
            <div className='lists'>
                        <a className='button' href="/users">ADD USER</a>
                        <a className='button' href="/attendance">ADD Attendance</a>       
            </div>
        </div>
    )
}

export default Hero;