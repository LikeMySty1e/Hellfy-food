import React from 'react';
import PropTypes from 'prop-types';
import cn from "classnames";
import StepsResource from "../resources/StepsResource";
import Input, {InputType} from "../../common/Input";
import Checkbox from "../../common/Checkbox/Checkbox";
import RoundButton, {ButtonDirection} from "../../common/buttons/RoundButton";
import {isEmail, isValid} from "../../../helpers/checkIsHelper";
import {useValidation} from "../../../hooks/useValidation";

const Step2 = props => {
    const {
        hide,
        pushStep,
        data,
        updateData
    } = props;
    const {
        login,
        password,
        email,
        subscription,
        currentStep
    } = data;
    const [isLoginValid, validateLogin] = useValidation(login,true, isValid);
    const [isEmailValid, validateEmail] = useValidation(email,email ? isEmail(email) : true, isEmail);
    const [isPasswordValid, validatePassword] = useValidation(password,true, isValid);

    const stepFilled = React.useMemo(() => isValid({
        email,
        login,
        password,
        isLoginValid,
        isEmailValid,
        isPasswordValid
    }), [login, password, email]);

    const onSet = (value, field, validation) => {
        validation && validation(value);
        updateData({ [field]: value });
    };

    const goNext = () => {
        if (!stepFilled || currentStep > 1) {
            return;
        }

        updateData({ currentStep: 2 });
        pushStep(StepsResource[2]);
    };

    return <div className={cn("step__card", { ["step__card--hide"]: hide })}>
        <div className="green__title">Данные авторизации</div>
        <Input
            value={login}
            onChange={value => onSet(value, `login`, validateLogin)}
            error={!isLoginValid}
            message={!isLoginValid ? `Введите что-нибудь` : ``}
            label={"Логин"} />
        <Input
            value={email}
            onBlur={value => onSet(value, `email`, validateEmail)}
            type={InputType.email}
            error={!isEmailValid}
            message={!isEmailValid ? `Почтовый адрес указан неверно` : ``}
            label={"Электронная почта"}
        />
        <Checkbox
            onChange={value => updateData({ subscription: value })}
            classname="step__checkbox"
            value={subscription}
        >
            <span className="green">Получать рассылку</span>
        </Checkbox> <br />
        <Input
            type={InputType.password}
            value={password}
            onChange={value => onSet(value, `password`, validatePassword)}
            error={!isPasswordValid}
            message={!isPasswordValid ? `Введите непустой пароль` : ``}
            label={"Пароль"}
        />
        <RoundButton
            active={currentStep > 1}
            onClick={goNext}
            disabled={!stepFilled}
            direction={ButtonDirection.bottomRight}
            arrowDirection={ButtonDirection.right}
        />
    </div>
};

Step2.propTypes = {
    updateData: PropTypes.func.isRequired,
    data: PropTypes.object,
    subscription: PropTypes.bool
};

export default Step2;