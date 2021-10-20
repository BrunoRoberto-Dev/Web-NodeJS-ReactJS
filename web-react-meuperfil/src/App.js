import React, { Component } from 'react';
import teste from './img/perfil.jpg';
import './App.css';

class App extends Component {
 
  render(){
    return(
      <div id="container">
        <img id="foto" src={teste} width={200} height={200} />
        <details class="box">
          <summary>
            Dados pessoais
          </summary>
          <p>Nome: Bruno Roberto</p>
          <p>RA: F1377F#</p>
          <p>Idade: 19</p>
        </details>
        <details class="box">
          <summary>
            Formação
          </summary>
          <p>Cursando 4° semestre de Ciência da Computação</p>
        </details>
        <details class="box">
          <summary>
            Experiência 
          </summary>
          <p>Nenhuma</p>
        </details>
        <details class="box">
          <summary>
            Projetos
          </summary>
          <p>Cadastro de alunos em ReactJS e NodeJS</p>
          <p>Cadastro de tarefas em ReactJS e NodeJS</p>
        </details>
      </div>
      
    );
  }
}
 
export default App;
