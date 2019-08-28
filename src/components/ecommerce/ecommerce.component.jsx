import React from 'react';

import './ecommerce.style.scss'
import ecommerceImage from '../../assets/ecommerce.png';
/* import herokuLogo from '../../assets/heroku.svg'; */

import { Descricao } from '../descricao/descricao.component'

export const Ecommerce = () => (
    <div className='ecommerce'>
        <div className='apresentacao-ecommerce'>
            <Descricao 
                nome='Ecommerce' 
                texto='Projeto pessoal de criação de um ecommerce de moda do layout ao deploy visando um código limpo, claro, organizado e com otima performance'
            />
            <img 
                className='imagem'
                src={ecommerceImage} 
                alt='ecommerce'
            />
        </div>
{/*         
        <div>
            <img 
                className='imagem'
                src={herokuLogo} 
                alt='heroku'
            />
        </div> */}
    </div>
)