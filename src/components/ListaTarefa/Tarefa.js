    import React, { useEffect, useState } from 'react'
    import { Container, Row,Col} from 'react-materialize';
    import axios from 'axios'
    import { set } from 'ol/transform';
    import { none } from 'ol/centerconstraint';
    import './Tarefa.css'

    export default function Tarefa(){
        const [tarefas,setTarefas] = useState([])
        const [ta,setTarefa] = useState(null)
        const [texto,setTexto] = useState(null)
        const [att,setAtt] = useState(0)
        let [id,setId] = useState(0)
        let [idExclusao,setIdExcusao] = useState(null)

        useEffect(()=>{
            async function listarTarefas(){
                let res =  await (await axios.get("http://localhost:8081")).data
                if(res!=null){
                    setTarefas([...res])
                }
            }
            listarTarefas()
        },[att])

            useEffect(()=>{
                async function cadastrartarefa(){
                   let resp =  await axios.post(`http://localhost:8081/cadastrartarefa/${ta.id}/${ta.texto}`)
                   if(resp.status == 200){
                    setAtt(att+1)
                   }
                }
                if(ta!=null){
                cadastrartarefa()
                }         
            },[ta])
            useEffect(()=>{
            
               async function excluirtarefa(){
                   let res =  await axios.post(`http://localhost:8081/excluirtarefa/${idExclusao}`)
                   if(res){
                       setAtt(att+1)
                   }
                }
                if(idExclusao != null){
                    excluirtarefa()  
                }
              
            },[idExclusao])
    
    function adicionarTarefa(){
        let ultimoId = tarefas.length > 0 ? Number(tarefas[tarefas.length -1].id) + 1 : 1
        setId(id=ultimoId)
    setTarefa({id,texto})
    }
    return (
        <Container  className="amber lighten-5" style={{border:"2px solid black"}}>
            <div style={{width:"80%",margin:"0 auto"}}>
            <h2 style={{marginBottom:"5%"}}>Cadastrar Tarefas</h2>
            <Row>
                <Col className="l10">
                <input placeholder="Digite o nome da tarefa" style={{fontSize:"30px"}} onChange={(e)=> setTexto(e.target.value)}></input>
                </Col>
                <Col>
                <a className="btn waves-effect" onClick={adicionarTarefa}> <i className="material-icons">event_note</i></a>
                </Col>
            </Row>
            <h3>Lista de Tarefas</h3>
            <Row>
          {tarefas.length > 0 ? tarefas.map(x=> {return <div className="lista" key={x.id}> <p>{x.id} : {x.tarefa}  < span onClick={()=> setIdExcusao(x.id)}  className="button  waves-effect">  <i class=" medium material-icons">delete</i></span>  </p> </div>})  :<h4>Lista Vazia</h4>}
            </Row>
            </div>
        </Container>
    )
    }