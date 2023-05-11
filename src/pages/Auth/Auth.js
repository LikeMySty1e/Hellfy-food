import React from 'react';
import {useHistory} from "react-router-dom";
import {observer} from "mobx-react-lite";
import cn from "classnames";
import {MAIN_ROUTE} from "../../resources/consts";
import {loginIn} from "../../services/userDataService";
import {Context} from "../../index";
import Container from "../../components/common/Container/Container";
import Button, { Color } from "../../components/common/buttons/Button";
import Input, { InputType } from "../../components/common/Input";
import Wizard from "../../components/Wizard/Wizard";
import UserModel from "../../models/UserModel";
import StepsResource from "./resources/RegistrationStepsResource";
import localStorageHelper from "../../helpers/localStorageHelper";
import JsonParser from "../../helpers/jsonParser";
import {format, mapUserModel} from "../../helpers/mapper";
import '../style.m.css';

const Auth = observer(() => {
    const {main} = React.useContext(Context);
    const history = useHistory();
    const [login, setLogin] = React.useState(``);
    const [password, setPassword] = React.useState(``);
    const [registration, setRegistration] = React.useState({ ...UserModel });
    const [currentStep, setCurrentStep] = React.useState(null);
    const [launch, setLaunch] = React.useState(null);

    React.useEffect(() => {
        const localProgress = JsonParser.parse(localStorageHelper.getLocalRegistrationProgress());

        console.log(format([]))

        if (localProgress) {
            setLaunch(localProgress.launch);
            setCurrentStep(localProgress.currentStep);
            setRegistration({ ...registration, ...mapUserModel(localProgress) });
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

    const onRegistrationClick = async () => {
        try {
            localStorageHelper.deleteLocalRegistrationProgress();
            main.setUserModel({ ...mapUserModel(registration) });
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
            localStorageHelper.setLocalRegistrationProgress(JSON.stringify({
                ...registration,
                ...updatedData,
                currentStep,
                launch
            }));
        }
    };

    const onRegistrationStartClick = () => {
        setLaunch(!launch);
        localStorageHelper.deleteLocalRegistrationProgress();
    };

    const renderZeroStepContent = () => {
        if (launch) {
            return <React.Fragment>
                Наша команда из целого одного человека так рада, что Вы решили присоединиться к нашему сервису по подбору правильного питания!
                Здесь Вас ждет множество интересных функций и возможностей, которые помогут достичь своих целей
                и улучшить свое здоровье.
                <br /><br />
                Мы предлагаем персональные рекомендации по питанию, сформированный план приёма пищи, рецепты блюд, советы по тренировкам и многое другое!
            </React.Fragment>
        }

        return <React.Fragment>
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
        </React.Fragment>
    }

    return <Container>
        <Wizard
            data={registration}
            model={UserModel}
            stepsResource={StepsResource}
            updateData={updateRegistration}
            onComplete={onRegistrationClick}
            setCurrentStep={setCurrentStep}
            currentStep={currentStep}
            launch={launch}
        >
            <div className={cn("card")}>
                <div className="title">
                    <span className="green__title">Авторизируйтесь</span>
                    или
                    <span className="orange__title">Зарегистрируйтесь</span>
                </div>
                <div className={cn({ ["card--registration"]: launch})}>
                    {renderZeroStepContent()}
                </div>
                <Button
                    stayActive
                    color={Color.orange}
                    classname="registration__button"
                    active={launch}
                    onClick={onRegistrationStartClick}
                >
                    {launch ? `К авторизации` : `Регистрация`}
                </Button>
            </div>
        </Wizard>
    </Container>
});

export default Auth;
