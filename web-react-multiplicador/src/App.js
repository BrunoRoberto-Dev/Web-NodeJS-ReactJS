import React, { Component } from 'react';
import './App.css';
 
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      valor1: 0,
      valor2: 0,
      Resultado: 0,
    };
 
    this.multiplicar = this.multiplicar.bind(this);
  }
  
  multiplicar(){
    this.setState({
      valor1: document.getElementById("valorUm").value,
      valor2: document.getElementById("valorDois").value,
    })
    this.setState({
      Resultado: this.state.valor1 * this.state.valor2
    });
  }
 
  render(){
    return(
      <div>
        <center>
          <h1>Multiplicador de Números</h1>
          <input id="valorUm" type="number" placeholder="Digite o primeiro n°" />
          <input id="valorDois" type="number" placeholder="Digite o segundo n°" />
          <button onClick={this.multiplicar}><strong>Calcular</strong></button>
          <h2>Resultado: {this.state.Resultado}</h2>
        </center>
      </div>
    );
  }
}
 
export default App;