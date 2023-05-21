import React from 'react';
import {useHistory} from "react-router-dom";
import {observer} from "mobx-react-lite";
import cn from "classnames";
import {MAIN_ROUTE} from "../../resources/consts";
import {Context} from "../../index";
import Container from "../../components/common/Container/Container";
import Button, { Color } from "../../components/common/buttons/Button";
import Input, {InputIcon, InputType} from "../../components/common/Input";
import Wizard from "../../components/Wizard/Wizard";
import UserModel from "../../models/UserModel";
import StepsResource from "./resources/RegistrationStepsResource";
import { ReactComponent as UserIcon } from "../../icons/common/user.m.svg";
import { ReactComponent as LockIcon } from "../../icons/common/lock.m.svg";
import localStorageHelper from "../../helpers/localStorageHelper";
import JsonParser from "../../helpers/jsonParser";
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

        console.log(localProgress);
        // console.log(format([]))

        if (localProgress) {
            setLaunch(localProgress.launch);
            setCurrentStep(localProgress.currentStep);
            setRegistration({ ...registration, ...localProgress });
        }
    }, []);

    React.useEffect(() => {
        main.setValidationError(`auth`, ``);
    }, [login, password, registration]);

    const onLoginClick = async () => {
        localStorageHelper.deleteLocalRegistrationProgress();

        const result = await main.login(login, password);

        if (result) {
            history.push(MAIN_ROUTE);
        }
    };

    const onRegistrationClick = async () => {
        // localStorageHelper.deleteLocalRegistrationProgress();

        const result = await main.registrate(registration);

        if (result) {
            history.push(MAIN_ROUTE);
        }
    };

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
                <br /><br />
            </React.Fragment>
        }

        return <React.Fragment>
            <Input
                value={login}
                onChange={value => setLogin(value)}
                error={!!main.validationState.auth}
                message={!!main.validationState.auth && main.validationState.auth}
                classname="registration__input"
                label={"Логин"}
                icons={[
                    {
                        Icon: UserIcon,
                        side: InputIcon.left
                    }
                ]}
            />
            <Input
                value={password}
                type={InputType.password}
                onChange={value => setPassword(value)}
                disabled={!!main.validationState.auth}
                classname="registration__input"
                label={"Пароль"}
                icons={[
                    {
                        Icon: LockIcon,
                        side: InputIcon.left
                    }
                ]}
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

    if (main.pendingState.ingredients) {
        return null;
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
                <div className="auth__title">
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
