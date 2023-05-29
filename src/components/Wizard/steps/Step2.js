import React from 'react';
import PropTypes from 'prop-types';
import cn from "classnames";
import Input, {InputType} from "../../common/Input";
import Checkbox from "../../common/Checkbox/Checkbox";
import RoundButton, {ButtonDirection} from "../../common/buttons/RoundButton";
import {isEmail, isValid} from "../../../helpers/checkIsHelper";
import {useValidation} from "../../../hooks/useValidation";

const Step2 = props => {
    const {
        isLast,
        index,
        hide,
        pushStep,
        currentStep,
        data,
        updateData
    } = props;
    const {
        password,
        email,
        subscription
    } = data;
    const [isEmailValid, validateEmail] = useValidation(email,email ? isEmail(email) : true, isEmail);
    const [isPasswordValid, validatePassword] = useValidation(password,true, isValid);
    const stepRef = React.useRef(null);

    React.useEffect(() => {
        if (stepRef.current) {
            window.scrollTo({ top: (stepRef.current.offsetTop - 300) || 0, behavior: `smooth` });
        }
    }, []);

    const stepFilled = React.useMemo(() => isValid({
        email,
        password,
        isEmailValid,
        isPasswordValid
    }), [password, email]);

    const onSet = (value, field, validation) => {
        validation && validation(value);
        updateData({ [field]: value });
    };

    const goNext = () => pushStep(index + 1);

    return <div ref={stepRef} className={cn("step__card", { ["step__card--hide"]: hide })}>
        <div className="green__title">Данные авторизации</div>
        <Input
            value={email}
            onBlur={value => onSet(value, `email`, validateEmail)}
            type={InputType.email}
            error={!isEmailValid}
            message={!isEmailValid ? `Почтовый адрес указан неверно` : ``}
            label={"Электронная почта"}
        />
        <Input
            type={InputType.password}
            value={password}
            onChange={value => onSet(value, `password`, validatePassword)}
            error={!isPasswordValid}
            message={!isPasswordValid ? `Введите непустой пароль` : ``}
            label={"Пароль"}
        />
        <Checkbox
            onChange={value => updateData({ subscription: value })}
            classname="step__checkbox"
            value={subscription}
        >
            <span className="green">Получать рассылку</span>
        </Checkbox> <br />
        {!isLast && <RoundButton
            onClick={goNext}
            disabled={!stepFilled || currentStep > index}
            direction={ButtonDirection.bottomRight}
            arrowDirection={ButtonDirection.right}
        />}
    </div>
};

Step2.propTypes = {
    isLast: PropTypes.bool,
    index: PropTypes.number,
    updateData: PropTypes.func.isRequired,
    data: PropTypes.object,
    subscription: PropTypes.bool
};

export default Step2;