import React from 'react';
import './App.css';

/* import Imagem from './components/imagem/imagem.component'; */

import { Apresentacao } from './components/apresentacao/apresentacao.component';
import { Projetos } from './components/projetos/projetos.component'

function App() {
  return (
    <div className='app'>
      <Apresentacao/>
      <Projetos/>
    </div>
  );
}

export default App;
