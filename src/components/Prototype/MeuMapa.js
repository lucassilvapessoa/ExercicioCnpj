
import React  from 'react'
import {Map,TileLayer,Marker,Popup} from 'react-leaflet'
import L from 'leaflet'


function GetIcon(_iconeSize){
 return L.icon({
   iconUrl: require("./marker.jpg"),
   _iconeSize:_iconeSize
 })
}

export default function MeuMapa(){
  const position  = [1.35, 103.8]
  return(
   <Map className="map" center={position} zoom={6} style={{height:500,width:"100%"}}>
  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors" />
  <Marker position={position} icon={GetIcon(20)}></Marker>
   </Map>
  )
}
