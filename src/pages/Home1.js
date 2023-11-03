import React from 'react'
import styled from "styled-components";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Row, Col, Button } from 'react-bootstrap';

import ik from './ik.png'
const Styles = styled.div `
.group{
    width: 850px;
    height: 220px;
    border: 1px solid;
    margin: auto;
    background-color: #202528;
    margin: 210px auto;
    border-radius: 10px;
    font-family: 'Rubik', sans-serif;
}
.dropdown-toggle, .dropdown-toggle:active{
    background-color: #EDEFFD;
    color: #363949;
    border: 0;
    height: 60px;
    width: 250px;
    padding: 0;
}
.dropdown-toggle:after{
    border: 0;
}
.row{
    width: 850px;
    margin: 0;
}
.dropdown{
    width: 250px;
}
.col-lg-2{
    margin: 30px 0;
    padding: 0;
    width: 250px;
}
.col-lg-1{
    margin: 30px 20px 20px 30px;
    padding: 0;
    width: 250px;
}
.col-lg-3{
    margin: 30px 30px 40px 20px;
    padding: 0;
    width: 250px;
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

export const Home = () => (
    <>
        <Styles>
        <div className='group'>
            <Row>
                <Col lg={1}>
                    <DropdownButton id="dropdown-basic-button" title={<><div className='button-text'><span>Марка</span><img className='ik' src={ik}/></div></>}>  
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </DropdownButton>
                </Col>
                <Col lg={2}>
                    <DropdownButton id="dropdown-basic-button" title={<><div className='button-text'><span>Модель</span><img className='ik' src={ik}/></div></>}>   
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </DropdownButton>
                </Col> 
                <Col lg={3}>
                    <DropdownButton id="dropdown-basic-button" title={<><div className='button-text'><span>Поколение</span><img className='ik' src={ik}/></div></>}>   
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </DropdownButton>
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