
  import React from 'react';
  import {useState,useEffect} from 'react'
  import { Container } from 'react-materialize';
  import  verifica  from './verificadorCNPJ'
 
  export default function Cnpj(){
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
      <Container className="#fafafa grey lighten-5">
      <h4>Exercício Cnpj</h4>
      <input  style={{fontSize:"25px"}} maxLength="20" placeholder="Digite o Cnpj" onChange={(e)=> setCpnj(e.target.value)}></input>
    {verificacao === null || cnpj.length < 14 ? <h5>Aguardando preenchimento...</h5> : verificacao == "cnpj incorreto" ? <h5 style={{color:"red"}}>{verificacao}</h5> : <h5 style={{color:"green"}}>{verificacao}</h5>}
      </Container>
     </>
    )
  }
