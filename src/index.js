  import React from 'react';
  import ReactDOM from 'react-dom';
  import {useState,useEffect} from 'react'
  import  verifica  from './verificadorCNPJ'


  function Cnpj(){
    const[verificacao,setVerificacao] = useState(null)
    const [cnpj,setCpnj] = useState('')

    function textCpnj (e){
    setCpnj(e.target.value)
    let mascaraCnpj = new RegExp("^[0-9]{14}|^[0-9]{2}[\.][0-9]{3}[\.][0-9]{3}/[0-9]{4}-[0-9]{2}$")
      if(cnpj.length==18 || cnpj.length==14){
        if(mascaraCnpj.test(cnpj)){
           setCpnj(cnpj.replace(/[^0-9]/g,''))
           setVerificacao(verifica(cnpj))
        }
      }else{
        setVerificacao(null)
      }
     
    }
    return (
      <>
      <input placeholder="Digite o Cnpj" onChange={(e)=> textCpnj(e)}></input>
     {verificacao !=null ? <h6>{verificacao}</h6> :null }
     </>
    )
  }
  ReactDOM.render(
    <React.StrictMode>
  <Cnpj/>
    </React.StrictMode>,
    document.getElementById('root')
  );


