import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import styled from "styled-components";

import logo from "./img/logo.png";

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Rubik:wght@500&display=swap');
</style>


const Styles = styled.div `
a, .navbar-brand  {
    color: #EDEFFD;
    text-decoration: none;
    text-align: center;
}
.logoText{
    font-family: 'Poppins', sans-serif;
}
.container{
    height: 70px;
    font-size: 20px;
    margin:0 80px;
    padding: 0;
    font-family: 'Rubik', sans-serif;
    max-width: 100%;
}
.navbar-nav{
    width: 300px;
    margin-left: 61px;
    padding: 0;
}
.nav-link{
    width: 150px;
    padding: 0;
}
.navbar{
    background-color: #363949;
    min-width: 100%;
}
.logo{
    color: #FF0060;
}
.entry{
    height: 70px;
    width: 220px;
    padding: 20px 0;
}
`
//компонент шапки
export default function NaviBar() {
    return(
    <>
        <Styles>
            <Navbar collapseOnSelect   variant="dark">
                <Container>
                <Navbar.Brand href="/">
                <img
                  src={logo}
                  height="50"
                  width="50"
                  className="d-line-block align-top"
                  alt="Логотип"
                />
              </Navbar.Brand>  
                <Navbar.Brand className="logoText">Auto<span className="logo">Wiki</span></Navbar.Brand>  
                <Navbar.Toggle aria-controls="responsiva-navbar-nav"/>
                <Navbar.Collapse id="responsiva-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link to="/">Главная</Link></Nav.Link>
                        <Nav.Link><Link to="/users">Форум</Link></Nav.Link>
                    </Nav>
                    <Nav.Link className="entry"><Link to="/users">Вход и регистрация</Link></Nav.Link>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </Styles>
    </>
    
)}