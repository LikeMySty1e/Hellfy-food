import React, {useContext, useState} from 'react';
import {useLocation, useHistory} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {MAIN_ROUTE} from "../resources/consts";
import {login} from "../services/userDataService";
import {Context} from "../index";
import Container from "../components/common/Container/Container";
import Button, { Color } from "../components/common/Button";
import Input from "../components/common/Input";
import Wizard from "../components/Wizard/Wizard";
import './style.m.css';
import cn from "classnames";

const Auth = observer(() => {
    const {main} = useContext(Context);
    const history = useHistory();
    const [registration, setRegistration] = React.useState({ launch: false });
    // const [alert, setAlert] = useState('');

    // const onLoginClick = async () => {
    //     try {
    //         // const token = await login(email, password);
    //         // main.setToken(token)
    //         main.setIsAuth(true);
    //         history.push(MAIN_ROUTE)
    //     } catch (e) {
    //         // setAlert(e.response.data.message)
    //     }
    // }

    const onRegistrationClick = () => {
        setRegistration({ ...registration, launch: !registration.launch });
    }

    // if (alert) {
    //     return <Alert variant="danger" onClick={() => setAlert('')} onClose={() => setAlert('')} dismissible>
    //         <Alert.Heading>Во время авторизации произошла ошибка!</Alert.Heading>
    //         <p>{alert}</p>
    //     </Alert>
    // }

    return <Container>
        <Wizard launch={registration.launch}>
            <div className={cn("auth__card", { ["auth__card--registration"]: registration.launch })}>
                <div className="auth__title">
                    <span className="green__title">Авторизируйтесь</span>
                    или
                    <span className="orange__title">Зарегистрируйтесь</span>
                </div>
                <Input
                    classname="registration__input"
                    label={"Логин"}
                />
                <Input
                    classname="registration__input"
                    label={"Пароль"}
                />
                <Button
                    color={Color.green}
                    classname="registration__button"
                    active={registration.launch}
                    onClick={onRegistrationClick}
                >
                    Войти
                </Button>
                <Button
                    color={Color.orange}
                    classname="registration__button"
                    active={registration.launch}
                    onClick={onRegistrationClick}
                >
                    Регистрация
                </Button>
            </div>
        </Wizard>
    </Container>
});

export default Auth;
