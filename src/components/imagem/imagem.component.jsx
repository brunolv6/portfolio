import React from 'react';

import './imagem.style.scss';

import foto from '../../assets/eu1.jpg';
import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';

const Imagem = props => {
    return (
        <div>
            <div className="apresentacao">
                <div className='circle'>
                    <div
                    className='imagem'
                    style={{
                        backgroundImage: `url(${foto})`
                    }}      
                    />
                </div>
                <div className='name'><strong>Bruno Valle</strong></div>
                <div className='profissao'>Desenvolvedor Front-End</div>
                <div className='formas-contato'>
                    <div className='logo-info'><img src={github} alt='github-acesso' className='logos'/></div>
                    <div className='logo-info'><img src={linkedin} alt='github-acesso' className='logos'/></div>
                </div>            
            </div>
            <div className='gradient'></div>
            <div className='teste'>Teste</div>
            <div className='gradient2'></div>
        </div>
    );
};

export default Imagem;