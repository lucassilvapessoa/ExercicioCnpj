  import React from 'react';
  import ReactDOM from 'react-dom';
  import {useState,useEffect} from 'react'
  import  verifica  from './verificadorCNPJ'

  function Cnpj(){
    let [verificacao,setVerificacao] = useState(null)
    let [cnpj,setCpnj] = useState('')

    useEffect(()=>{
      let mascaraCnpj = new RegExp("^[0-9]{14}|^[0-9]{2}[\.][0-9]{3}[\.][0-9]{3}/[0-9]{4}-[0-9]{2}$")
      if(cnpj.length==18 || cnpj.length==14){
        if(mascaraCnpj.test(cnpj)){
           setCpnj(cnpj.replace(/[^0-9]/g,''))
           setVerificacao(verifica(cnpj))
        }
      }
    },[cnpj])
    return (
      <>
      <input maxLength="20" placeholder="Digite o Cnpj" onChange={(e)=> setCpnj(e.target.value)}></input>
    {verificacao === null ? <h4>Aguardando...</h4> : <h4>{verificacao}</h4>}
     </>
    )
  }
  ReactDOM.render(
    <React.StrictMode>
     <Cnpj/>
    </React.StrictMode>,
    document.getElementById('root')
  );


