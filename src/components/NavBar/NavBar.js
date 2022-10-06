import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink, useHistory} from "react-router-dom";
import {Context} from "../../index";
import {AUTH_ROUTE, MAIN_ROUTE, REPORTS_ROUTE} from "../../resources/consts";
import Settings from "./Settings/Settings";
import './style.css';

const NavBar = observer(() => {
    const {main} = useContext(Context)
    const history = useHistory();

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink className="mainButton" to={main.isAuth ? MAIN_ROUTE: AUTH_ROUTE}>ГИБДД-3000</NavLink>
                {main.isAuth && <Nav className="m-auto">
                    <Button
                        variant={'outline-light'}
                        className="m-lg-2"
                        onClick={() => history.push(MAIN_ROUTE)}
                    >
                        Главная
                    </Button>
                    <Button
                        variant={'outline-light'}
                        className="m-lg-2"
                        onClick={() => history.push(REPORTS_ROUTE)}
                    >
                        Отчёты
                    </Button>
                </Nav>}
                {main.isAuth && <Nav className="ml-auto">
                <Settings/>
                <Button variant={'outline-light'} onClick={main.unauthorise} className="m-lg-2">Выход</Button>
                </Nav>}
            </Container>
        </Navbar>
    );
});

export default NavBar;