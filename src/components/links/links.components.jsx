import React from 'react';

import './links.style.scss'

import github from '../../assets/github.svg'
import linkedin from '../../assets/linkedin.svg'

export const Links = () => {
    return(
        <div className='links'>
          <img className='links-item' src={github} alt='github-logo'/>
          <img className='links-item' src={linkedin} alt='linkedin-logo'/>      
        </div>
    )
}