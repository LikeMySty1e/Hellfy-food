import React, {useContext} from 'react';
import {useLocation, useHistory} from "react-router-dom";
import {observer} from "mobx-react-lite";
import cn from "classnames";
import {MAIN_ROUTE} from "../resources/consts";
import {loginIn} from "../services/userDataService";
import {Context} from "../index";
import Container from "../components/common/Container/Container";
import Button, { Color } from "../components/common/buttons/Button";
import Input, { InputType } from "../components/common/Input";
import Wizard from "../components/Wizard/Wizard";
import UserModel from "../models/UserModel";
import localStorageHelper from "../helpers/localStorageHelper";
import JsonParser from "../helpers/jsonParser";
import './style.m.css';

const Auth = observer(() => {
    const {main} = useContext(Context);
    const history = useHistory();
    const [login, setLogin] = React.useState(``);
    const [password, setPassword] = React.useState(``);
    const [registration, setRegistration] = React.useState({
        ...UserModel,
        launch: false,
        currentStep: null
    });

    React.useEffect(() => {
        const localProgress = JsonParser.parse(localStorageHelper.getLocalRegistrationProgress());

        if (localProgress) {
            setRegistration({ ...registration, ...localProgress });
        }
    }, []);

    const onLoginClick = async () => {
        try {
            localStorageHelper.deleteLocalRegistrationProgress();
            const token = await loginIn(login, password);
            main.setToken(token);
            main.setIsAuth(true);
            history.push(MAIN_ROUTE);
        } catch (e) {
            // setAlert(e.response.data.message)
        }
    }

    const updateRegistration = (updatedData, clear = false) => {
        setRegistration({ ...registration, ...updatedData });

        if (!clear) {
            localStorageHelper.setLocalRegistrationProgress(JSON.stringify({ ...registration, ...updatedData }));
        }
    };

    const onRegistrationClick = () => {
        setRegistration({...registration, launch: !registration.launch});
        localStorageHelper.deleteLocalRegistrationProgress();
    };

    // if (alert) {
    //     return <Alert variant="danger" onClick={() => setAlert('')} onClose={() => setAlert('')} dismissible>
    //         <Alert.Heading>Во время авторизации произошла ошибка!</Alert.Heading>
    //         <p>{alert}</p>
    //     </Alert>
    // }

    return <Container>
        <Wizard
            data={registration}
            updateData={updateRegistration}
            launch={registration.launch}
        >
            <div className={cn("auth__card", { ["auth__card--registration"]: registration.launch })}>
                <div className="auth__title">
                    <span className="green__title">Авторизируйтесь</span>
                    или
                    <span className="orange__title">Зарегистрируйтесь</span>
                </div>
                <Input
                    onChange={value => setLogin(value)}
                    classname="registration__input"
                    label={"Логин"}
                />
                <Input
                    type={InputType.password}
                    onChange={value => setPassword(value)}
                    classname="registration__input"
                    label={"Пароль"}
                />
                <Button
                    disabled={!login || !password}
                    color={Color.green}
                    classname="registration__button"
                    onClick={onLoginClick}
                >
                    Войти
                </Button>
                <Button
                    stayActive
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
