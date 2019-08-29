import React from 'react'

import './footer.style.scss';

import { Links } from '../links/links.components'

export const Footer = () => (
    <div className='footer'>
        <div style={{color: 'white'}}>Entre em contato</div>
        <Links white='branco'/>
    </div>
)