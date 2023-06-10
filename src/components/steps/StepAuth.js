import React from 'react';
import PropTypes from 'prop-types';
import Input, {InputIcon, InputType} from "../common/Input";
import Checkbox from "../common/Checkbox/Checkbox";
import {ButtonDirection} from "../common/buttons/RoundButton";
import {isEmail, isValid} from "../../helpers/checkIsHelper";
import {useValidation} from "../../hooks/useValidation";
import { ReactComponent as UserIcon } from "../../icons/common/user.m.svg";
import { ReactComponent as LockIcon } from "../../icons/common/lock.m.svg";
import CommonStep from "./CommonStep";

const StepAuth = props => {
    const {
        data,
        // isEdit,
        updateData
    } = props;
    const {
        password,
        email,
        subscription
    } = data;
    const [isEmailValid, validateEmail] = useValidation(email,email ? isEmail(email) : true, isEmail);
    const [isPasswordValid, validatePassword] = useValidation(password,true, isValid);

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

    return <CommonStep
        {...props}
        stepFilled={stepFilled}
        direction={ButtonDirection.bottomRight}
        arrowDirection={ButtonDirection.right}
    >
        <div className="green__title">Данные авторизации</div>
        <Input
            value={email}
            onBlur={value => onSet(value, `email`, validateEmail)}
            type={InputType.email}
            error={!isEmailValid}
            message={!isEmailValid ? `Почтовый адрес указан неверно` : ``}
            label={"Электронная почта"}
            icons={[
                {
                    Icon: UserIcon,
                    side: InputIcon.left
                }
            ]}
        />
        <Input
            type={InputType.password}
            value={password}
            onChange={value => onSet(value, `password`, validatePassword)}
            error={!isPasswordValid}
            message={!isPasswordValid ? `Введите непустой пароль` : ``}
            label={"Пароль"}
            icons={[
                {
                    Icon: LockIcon,
                    side: InputIcon.left
                }
            ]}
        />
        <Checkbox
            onChange={value => updateData({ subscription: value })}
            classname="step__checkbox"
            value={subscription}
        >
            <span className="green">Получать рассылку</span>
        </Checkbox> <br />
    </CommonStep>
};

StepAuth.propTypes = {
    classname: PropTypes.string,
    isEdit: PropTypes.bool,
    isLast: PropTypes.bool,
    index: PropTypes.number,
    updateData: PropTypes.func.isRequired,
    data: PropTypes.object,
    subscription: PropTypes.bool
};

export default StepAuth;