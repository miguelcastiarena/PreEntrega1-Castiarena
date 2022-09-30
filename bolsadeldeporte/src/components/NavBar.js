
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React from "react";
import Brand from "./Brand";
import Menu from "./Menu"
import { Component } from 'react';



export default class NavBar extends Component {
    secciones = ["Escalada", "Esquí y Snowboard","Bicicletas"]
    render () {
        return (
        <>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
            <Brand>LA BOLSA DEL DEPORTE</Brand>
            <Menu secciones= {this.secciones}/>
        </Container>
      </Navbar>
        </>
        
    )
    }
    
}

