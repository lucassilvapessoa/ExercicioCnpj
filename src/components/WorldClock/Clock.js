
import React, { useEffect } from 'react'
import {useState,UseEfect} from 'react'
import axios from  'axios'
import { Container } from 'react-materialize'

    export default function Clock(){
        const [horario,setHorario] = useState(null)
        const [coordenadas, setCoordenadas] = useState({})
        const[dadosLocalizacao,setdados] = useState(null)
        const [dataHora,setDataHora] = useState(null)

        useEffect(()=>{
            function geoLocalizacao(){
                navigator.geolocation.getCurrentPosition((c)=>{
                    let {latitude,longitude} = c.coords
                    setCoordenadas({latitude,longitude})
                })
            }
            geoLocalizacao()
        },[])

        useEffect(()=>{
            let url = `https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${coordenadas.latitude}&lon=${coordenadas.longitude}`
            async function dados(){
                let dados =  await axios.get(url)
                let pais = dados.data.features[0].properties.address.country
                let estado = dados.data.features[0].properties.address.state
                setdados({pais,estado}) 
            }
        dados()
        },[coordenadas])

        useEffect(()=>{
            async function horario(){
                if(dadosLocalizacao != null){
                    let estado_com_traco = dadosLocalizacao.estado.replace(" ","_")
                    let estadoSemAcento = estado_com_traco.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                    let response = await fetch(`https://restcountries.eu/rest/v2/name/${dadosLocalizacao.pais}`)
                    let json = await response.json()
                    let regiao =  json[0].region === 'Americas' ? 'America' : json[0].region
                    let res = await axios.get(`http://worldtimeapi.org/api/timezone/${regiao}/${estadoSemAcento}`)
                    setDataHora(res.data.datetime)
                }
            }
            horario()

        },[dadosLocalizacao])

        return(
            <>
            <Container className="#dcedc8 light-green lighten-4">
            <h3>Exercício Relógio Mundial</h3>
            {dadosLocalizacao !=null ? <h4>País : {dadosLocalizacao.pais}</h4>:null}
            {dadosLocalizacao !=null ? <h4>Estado : {dadosLocalizacao.estado}</h4>:null}
        {dataHora !=null ? <h4>{dataHora}</h4>:null}
            </Container>
            </>
        )

        }
    
