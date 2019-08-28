import React from 'react';

import './ecommerce.style.scss'
import ecommerceImage from '../../assets/ecommerce.png';
import herokuLogo from '../../assets/heroku.svg';
import firebaseLogo from '../../assets/firebase.png';
import nodeLogo from '../../assets/node.png';
import stripeLogo from '../../assets/stripe.svg';
import reduxLogo from '../../assets/redux.png';
import reactLogo from '../../assets/react.png';

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
        <div className='ferramentas'>
        <div>
            <img 
                className='logo'
                src={herokuLogo} 
                alt='heroku'
            />
        </div>
        <div>
            <img 
                className='logo'
                src={firebaseLogo} 
                alt='firebase'
            />
        </div>
        <div>
            <img 
                className='logo'
                src={nodeLogo} 
                alt='node'
            />
        </div>
        <div>
            <img 
                className='logo'
                src={reduxLogo} 
                alt='redux'
            />
        </div>
        <div>
            <img 
                className='logo'
                src={reactLogo} 
                alt='react'
            />
        </div>
        <div>
            <img 
                className='logo'
                src={stripeLogo} 
                alt='stripe'
            />
        </div>
        </div>
    </div>
)