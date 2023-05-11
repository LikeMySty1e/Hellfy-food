import React from 'react';
import PropTypes from 'prop-types';
import cn from "classnames";
import Input, {InputType} from "../../common/Input";
import RoundButton, {ButtonDirection} from "../../common/buttons/RoundButton";
import Checkbox from "../../common/Checkbox/Checkbox";
import {useValidation} from "../../../hooks/useValidation";
import {isNull, isValid} from "../../../helpers/checkIsHelper";
import GenderEnum from "../../../enums/GenderEnum";
import Autocomplete from "../../common/Autocomplete/Autocomplete";
import profResource from "../../../resources/profResource";

const Step3 = props => {
    const {
        isLast,
        index,
        hide,
        data,
        updateData,
        currentStep,
        pushStep
    } = props;
    const {
        gender,
        profession,
        name,
        weight,
        height,
        age
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
    }), [gender, name, weight, height, age]);

    const onSet = (value, field, validation) => {
        validation && validation(value);
        updateData({ [field]: value });
    };

    const goNext = () => pushStep(index + 1);

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
                maxLength={2}
                label={"Возраст (лет)"}
                error={!isAgeValid}
                message={!isNameValid ? `Введено недопустимое значение` : ``}
                onChange={value => onSet(value, `age`, validateAge)}
            />
        </div>
        <Autocomplete
            selected={profession}
            placeholder={`Профессия`}
            data={profResource}
            error={!isProfessionValid}
            message={!isProfessionValid ? `Введите корректное название профессии` : ``}
            onSelect={({ value }) => onSet(value, `profession`, validateProfession)}
        />
        Ваш пол<br />
        <div className="step__row">
            <Checkbox
                value={gender === GenderEnum.man}
                classname="step__checkbox"
                onChange={() => updateData({ gender: gender === GenderEnum.man ? GenderEnum.women : GenderEnum.man })}
            >
                <span className="green">Мужчина</span>
            </Checkbox>
            <Checkbox
                value={gender === GenderEnum.women}
                classname="step__checkbox"
                onChange={() => updateData({ gender: gender === GenderEnum.women ? GenderEnum.man :GenderEnum.women })}
            >
                <span className="green">Женщина</span>
            </Checkbox>
        </div><br />
        {!isLast && <RoundButton
            onClick={goNext}
            disabled={!stepFilled || currentStep > index}
            direction={ButtonDirection.bottomLeft}
        />}
    </div>
};

Step3.propTypes = {
    isLast: PropTypes.bool,
    index: PropTypes.number,
    data: PropTypes.object,
    updateData: PropTypes.func.isRequired,
    hide: PropTypes.bool,
    pushStep: PropTypes.func
};

export default Step3;