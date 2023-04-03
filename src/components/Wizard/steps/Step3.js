import React from 'react';
import PropTypes from 'prop-types';
import cn from "classnames";
import Input, {InputType} from "../../common/Input";
import StepsResource from "../resources/StepsResource";
import RoundButton, {ButtonDirection} from "../../common/buttons/RoundButton";
import Checkbox from "../../common/Checkbox/Checkbox";
import {useValidation} from "../../../hooks/useValidation";
import {isNull, isValid} from "../../../helpers/checkIsHelper";
import GenderEnum from "../../../enums/GenderEnum";

const Step3 = props => {
    const {
        hide,
        data,
        updateData,
        pushStep
    } = props;
    const {
        gender,
        profession,
        name,
        weight,
        height,
        age,
        isDigestive,
        isAllergic,
        currentStep
    } = data;
    const [isNameValid, validateName] = useValidation(name,true, isValid);
    const [isWeightValid, validateWeight] = useValidation(weight,true, isValid);
    const [isHeightValid, validateHeight] = useValidation(height,true, isValid);
    const [isProfessionValid, validateProfession] = useValidation(profession,true, isValid);
    const [isAgeValid, validateAge] = useValidation(age,true, isValid);

    const stepFilled = React.useMemo(() => isValid({
        gender: !isNull(gender),
        profession,
        name,
        weight,
        height,
        age,
        isNameValid,
        isWeightValid,
        isHeightValid,
        isAgeValid
    }), [name, weight, height, age]);

    const onSet = (value, field, validation) => {
        validation && validation(value);
        updateData({ [field]: value });
    };

    const goNext = () => {
        if (currentStep > 2) {
            return;
        }

        updateData({ currentStep: 3 });
        pushStep(StepsResource[3]);
    };

    return <div className={cn("step__card", { ["step__card--hide"]: hide })}>
        <div className="orange__title">О вашем персонаже</div>
        Мы спрашиваем ваш рост, вес, возраст, кол-во тренировок и профессию, чтобы понимать,
        сколько калорий вам нужно потреблять в день, какие пищевые группы вам следует увеличить или
        уменьшить в рационе, и какой тип питания будет наиболее эффективным для вас.<br /><br />
        <Input
            value={name}
            label={"Имя"}
            error={!isNameValid}
            message={!isNameValid ? `Имя не может быть пустым` : ``}
            onChange={value => onSet(value, `name`, validateName)}
        />
        <div className="step__row">
            <Input
                type={InputType.numbers}
                value={height}
                maxLength={3}
                classname="step__input--small"
                label={"Рост (см)"}
                error={!isHeightValid}
                onChange={value => onSet(value, `height`, validateHeight)}
            />
            <Input
                type={InputType.numbers}
                value={weight}
                maxLength={3}
                classname="step__input--small"
                label={"Вес (кг)"}
                error={!isWeightValid}
                onChange={value => onSet(value, `weight`, validateWeight)}
            />
            <Input
                type={InputType.numbers}
                value={age}
                maxLength={3}
                label={"Возраст (лет)"}
                error={!isAgeValid}
                message={!isNameValid ? `Введено недопустимое значение` : ``}
                onChange={value => onSet(value, `age`, validateAge)}
            />
        </div>
        <Input
            value={profession}
            label={"Профессия"}
            error={!isProfessionValid}
            message={!isProfessionValid ? `Введите корректное название профессии` : ``}
            onChange={value => onSet(value, `profession`, validateProfession)}
        />
        Ваш пол<br />
        <div className="step__row">
            <Checkbox
                value={gender === GenderEnum.man}
                classname="step__checkbox"
                onChange={() => updateData({ gender: GenderEnum.man })}
            >
                <span className="green">Мужчина</span>
            </Checkbox>
            <Checkbox
                value={gender === GenderEnum.women}
                classname="step__checkbox"
                onChange={() => updateData({ gender: GenderEnum.women })}
            >
                <span className="green">Женщина</span>
            </Checkbox>
        </div><br />
        У вас есть...<br />
        <div className="step__row">
            <Checkbox
                value={isDigestive}
                classname="step__checkbox"
                onChange={value => updateData({ isDigestive: value })}
            >
                <span className="green">Проблемы с пищеварением</span>
            </Checkbox>
            <Checkbox
                value={isAllergic}
                classname="step__checkbox"
                onChange={value => updateData({ isAllergic: value })}
            >
                <span className="green">Аллергия</span>
            </Checkbox>
        </div><br />
        <RoundButton
            active={currentStep > 2}
            onClick={goNext}
            disabled={!stepFilled}
            direction={ButtonDirection.bottomLeft}
        />
    </div>
};

Step3.propTypes = {
    data: PropTypes.object,
    updateData: PropTypes.func.isRequired,
    hide: PropTypes.bool,
    pushStep: PropTypes.func
};

export default Step3;