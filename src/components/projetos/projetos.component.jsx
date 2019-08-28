import React from 'react';

import './projetos.style.scss'

import { Ecommerce } from '../ecommerce/ecommerce.component'

export const Projetos = () => (
    <div className='projetos'>
        <div>
            <div className='gradiente1'></div>
            <div style={{backgroundColor:'black'}}>
            <Ecommerce/>
            </div>
        </div>
    </div>
)