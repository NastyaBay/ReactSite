import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

import vk from "./img/vk.png";
import tg from "./img/tg.png";

<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@500&display=swap');
</style>

const Styles = styled.div `
.container-fluid{
    height: 70px;
    font-size: 14px;
    width: 100%;
    padding: 0;
    font-family: 'Rubik', sans-serif;
    background-color: #363949;
    color: #EDEFFD;
}
.container{
    padding: 0;
    margin: 0 80px;
    max-width: 90%;
}
.row{
    padding-top: 21px;
}
.col{
    text-decoration: underline;
   
}
img{
    margin-left: 10px;
    height="30"
}
.col-lg-3{
    
    width: 170px;
}
`
//компонент подвала
const Footer = () => (
    <>
    <Styles>
        <Container fluid >
            <Container>
                <Row>
                    <Col lg={0}>Правила пользования</Col>
                    <Col lg={3}>
                         Контакты:
                        <img src={vk} />
                        <img src={tg} />
                    </Col>              
                </Row>
            </Container>
        </Container>
    </Styles>
    </>
)
export default Footer;
