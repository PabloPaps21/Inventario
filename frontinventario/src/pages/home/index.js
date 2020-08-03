import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Home extends Component {
    render() {
      return(
        <>
          <h1 style={{
            textAlign: "center",
            color:" blue",
            marginBottom:"50px"
          }}>Hola, esta es la tienda!</h1>
            
          <Link to="/ver" 
            style={{
            backgroundColor:"yellowgreen",
            color:"#FFF"
          }}>VER PRODUCTOS</Link>  

          <Link
            style={{
            backgroundColor:"purple",
            color:"#FFF"}}>AGREGAR PRODUCTOS</Link>
        </>
      )
    }
}
