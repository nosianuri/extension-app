import React, { useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import {userList} from '../Users/userList';
import Hero from './Hero';
import './HomeStyles.css';


const Home = () => {
  
  // const randomNum = Math.floor(Math.random() * Math.floor(userList.length))
  return (
    <div className='home'>
    {/* <h1>{userList[randomNum].FIELD1}</h1>
    <h3>{userList[randomNum].FIELD2}</h3> */}
    <Hero />
    </div>
  )
}

export default Home;