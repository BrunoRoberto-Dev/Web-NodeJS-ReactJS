import React, { Component } from 'react';
import './App.css';
 

class App extends Component {
  constructor(props){
    super(props);
    this.state = {contador: 0};
 
    this.adicionar = this.adicionar.bind(this);
    this.retirar = this.retirar.bind(this);
  }
  adicionar(){
    var contador = this.state.contador;
    this.setState({
      contador: contador+1
    });
  }
  retirar(){
    var contador = this.state.contador;
    this.setState({
      contador: contador-1
    });

    if (contador <= 0){
      this.setState({
        contador: 0
      });
    }

  }
 
  render(){
    return(
      <div>
        <center>
          <h1 id="Titulo">CONTADOR DE PESSOAS</h1>
          <h1 id="Numero">{this.state.contador}</h1>
          <button id="Cima" onClick={this.adicionar}>+</button><br/>
          <button id="Baixo" onClick={this.retirar}>-</button>
        </center>
      </div>
    );
  }
}
 
export default App;

