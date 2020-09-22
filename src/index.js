  import React from 'react';
  import ReactDOM from 'react-dom';
  import Cnpj from './components/CNPJ/Cpnj'
  import Clock from './components/WorldClock/Clock'
  import Prototype from './components/Prototype/Prototype'
  import "materialize-css/dist/css/materialize.min.css";
  import "materialize-css/dist/js/materialize.min.js"
  import "leaflet/dist/leaflet.css"
  import Tarefa from './components/ListaTarefa/Tarefa'
  import Modelagem from './components/ModelagemGerenciamentoDePedidos/GerenciamentoPedidos'

  ReactDOM.render(
    <React.StrictMode>
     <Cnpj/>
      <br/>
      <br/>
     <Clock/>
     <br/>
     <br/>
     <Prototype/>
     <br/>
     <br/>
     <Tarefa/>
     <br></br>
     <Modelagem/>
    </React.StrictMode>,
    document.getElementById('root')
  );


