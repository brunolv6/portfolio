import React from 'react';

import './imagem.style.scss';

import foto from '../../assets/eu1.jpg';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.svg';

const Imagem = props => {
    return (
        <div className="apresentacao">
            <div className='circle'>
                <div
                className='imagem'
                style={{
                    backgroundImage: `url(${foto})`
                }}      
                />
            </div>
            <div><strong>Bruno Valle</strong></div>
            <div>Desenvolvedor Front-End</div>
            <div className='formas-contato'>
                <div className='logos'><img src={github} alt='github-acesso'/></div>
                <div className='logos'><img src={linkedin} alt='github-acesso'/></div>
            </div>            
        </div>
    );
};

export default Imagem;