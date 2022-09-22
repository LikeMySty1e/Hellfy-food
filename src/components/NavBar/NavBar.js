import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {Context} from "../../index";
import {MAIN_ROUTE, REPORTS_ROUTE} from "../../resources/consts";
import Settings from "./Settings/Settings";
import './style.css';

const NavBar = observer(() => {
    const {main} = useContext(Context)

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink className="mainButton" to={MAIN_ROUTE}>ГИБДД-3000</NavLink>
                <Nav className="m-auto">
                    <Button variant={'outline-light'} className="m-lg-2">Главная</Button>
                    <Button variant={'outline-light'} className="m-lg-2">Отчёты</Button>
                </Nav>
                <Nav className="ml-auto">
                    <Settings />
                    <Button variant={'outline-light'} className="m-lg-2">Выход</Button>
                </Nav>
            </Container>
        </Navbar>
    );
});

export default NavBar;