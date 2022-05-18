import React, { useState } from 'react'
import './Card.css';
import Anik from './Anik.jpg';

function Card({ ename,job,about }) {

    
  return (
    <div className='Card'>
        <div className='upper-container'>
            <div className='image-container'>
                <img src = {Anik} alt= " " height=" " width="100px" />
            </div>

        </div>
        <div className='lower-container'>
            <h3>{ ename }</h3>
            <h4> { job }</h4>
            <p> { about }</p>

            < a href = "https://www.linkedin.com/in/anik-acharjee-62503377/"><button>View Profile </button></a>

            
            
        </div>
        
    </div>
  );
}

export default Card