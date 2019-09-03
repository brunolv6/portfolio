import React from 'react'

import './footer.style.scss';

import { Links } from '../links/links.components'
import { FormularioContato } from '../formulario-contato/formulario-contato.component';

export class Footer extends React.Component{
    constructor(){
        super();
        this.state={
            contato: false
        }
    }

    onContact = () => {
        this.setState((prevState) => ({contato: !prevState.contato}))
        console.log(this.state.contato);
    }

    render(){
        return(
            <div className='footer'>
                <div className='pergunta'>Quer me contratar ou bater um papo sobre seu projeto?</div>
                {
                    this.state.contato?
                    <FormularioContato onContact={this.onContact}/>
                    :<button className='contato' onClick={this.onContact}>Entre em contato</button>
                }
                <Links white/>
            </div>
        )
    }
}