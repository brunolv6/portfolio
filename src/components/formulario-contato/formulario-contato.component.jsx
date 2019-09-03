import React from 'react';

import './formulario-contato.style.scss';
import { CustomInput } from '../custom-input/custom-input.component';

export class FormularioContato extends React.Component{
    constructor(props){
        super(props);
        this.state={
            nome: '',
            email: ''
        }
    }

    handleChange = (event) => {
        const { name, value} = event.target;
        this.setState({[name]: value}); 
    }

    render(){
        const { onContact } = this.props;
        return(
            <form className='formulario-contato' onSubmit={onContact} method='POST' action="https://formspree.io/brunolv6@gmail.com">
                <CustomInput handleChange={this.handleChange} value={this.state.nome} name='nome' type='text'/>
                <CustomInput handleChange={this.handleChange} value={this.state.email} name='email' type='email'/>
                <textarea className='item textarea' name='mensagem' placeholder='sua mensagem, projeto, ideia, proposta..'/>
                <button className='botao' type='submit'>Enviar</button>
            </form>
        )
    }
}