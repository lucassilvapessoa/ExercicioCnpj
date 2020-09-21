import React from 'react'
import { Col, Container, DatePicker, Row, TextInput} from 'react-materialize'
import MeuMapa from './MeuMapa'

export default function Prototype(){
    return(
        <>
        <Container style={{"border":"1px solid black"}}>
            <Row>
                <Col>
                <h4 style={{marginTop:"0px",color:"#039be5"}}>Detalhes do novo Projeto</h4>
                </Col>
            </Row>
               <Row>
               <Col>
                   <i className="material-icons medium">short_text</i>
                   </Col>
                   <Col>
                      <input placeholder="Nome do novo projeto" style={{fontSize:"30px"}} ></input>
                   </Col>
               </Row>
               <Row>
                   <Col>
                   <i className="medium material-icons ">
                   date_range
                   </i>
                   </Col>
                   <Col>
                   <DatePicker  placeholder="Prazo do projeto"></DatePicker>
                   </Col>
               </Row>
               <Row>
               <div className="APP">
                 <MeuMapa/>
                 </div>
               </Row>
            </Container>
        </>
    )
}