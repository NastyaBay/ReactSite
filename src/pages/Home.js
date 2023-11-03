import React, { useState } from 'react'
import styled from "styled-components";
import { Row, Col, Button, Dropdown,  DropdownButton } from 'react-bootstrap';
import CustomDropdownButton from '../Components/drop'
const Styles = styled.div `
.group{
    width: 850px;
    height: 220px;
    border: 1px solid;
    background-color: #202528;
    margin: 210px auto;
    border-radius: 10px;
    font-family: 'Rubik', sans-serif;
}
.dropdown-toggle, .dropdown-toggle:active, .dropdown-toggle:first-child{
    background-color: #EDEFFD;
    color: #363949;
    border: 0;
    height: 60px;
    width: 250px;
    padding: 0;
    font-size: 20px;
}
.dropdown-toggle:after{
    border: 0;
}
.row{
    width: 850px;
    margin: 0;
}

.dropdown, .col-lg-1, .col-lg-2, .col-lg-3{
    width: 250px;
    padding: 0;
}
.col-lg-2{
    margin: 30px 0;
}
.col-lg-1{
    margin: 30px 20px 20px 30px;
}
.col-lg-3{
    margin: 30px 30px 40px 20px;
}
.ik{
    float: right;
    padding: 5px 0;
}
.button-text {
    text-align: left;
    margin: 15px 20px 0 25px;
}
span{
    font-size: 20px;
}
.row2 > .col-lg-1{
    margin: 0 20px 30px 160px;
}
.row2 > .col-lg-2{
    margin: 0 170px 30px 0px;
}
.col-lg-2 > .btn, .col-lg-1 > .btn{
    background-color: #363949;
    color: #EDEFFD;
    border: 0;
    height: 60px;
    width: 250px;
    padding: 0;
    font-size: 20px;
}
.dropdown-menu{
    width: 250px;
    background-color: #EDEFFD;
    font-size: 18px;
}
`

//главная страница
export const Home = () => (
    <>
        <Styles>
        <div className='group'>  
            <Row>
                <Col lg={1}>
                    <CustomDropdownButton name='Марка'/>  
                </Col>
                <Col lg={2}>
                    <CustomDropdownButton name='Модель'/>
                </Col> 
                <Col lg={3}>
                    <CustomDropdownButton name='Поколение'/>
                </Col> 
            </Row>
            <Row className='row2'>  
                <Col lg={1}>
                    <Button>Добавить автомобиль</Button>
                </Col>
                <Col lg={2}>
                    <Button>Найти</Button>
                </Col>
            </Row>
        </div>
        </Styles>
    </>
)