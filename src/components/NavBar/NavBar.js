import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {NavLink, useHistory} from "react-router-dom";
import Container from "../common/Container/Container";
import {Context} from "../../index";
import {AUTH_ROUTE, MAIN_ROUTE} from "../../resources/consts";
import './style.css';

const NavBar = observer(() => {
    const {main} = useContext(Context)
    const history = useHistory();

    return <div className="navbar">
        <Container>
            <NavLink className="main__button" to={main.isAuth ? MAIN_ROUTE: AUTH_ROUTE}>Кушайте
                <span className="main__button--secondary"> вкусно</span>
            </NavLink>
            {main.isAuth && <div className="link__container">
                <NavLink className="link" to={main.isAuth ? MAIN_ROUTE : AUTH_ROUTE}>Программа питания</NavLink>
                <NavLink className="link" to={main.isAuth ? MAIN_ROUTE : AUTH_ROUTE}>Ассортимент</NavLink>
                <NavLink className="link link--secondary" to={main.isAuth ? MAIN_ROUTE : AUTH_ROUTE}>Личный
                    кабинет</NavLink>
            </div>}
        </Container>
    </div>;
});

export default NavBar;