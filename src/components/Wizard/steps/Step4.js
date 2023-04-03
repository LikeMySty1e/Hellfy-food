import React from 'react';
import PropTypes from 'prop-types';
import cn from "classnames";
import StepsResource from "../resources/StepsResource";
import Input, {InputType} from "../../common/Input";
import Checkbox from "../../common/Checkbox/Checkbox";
import RoundButton, {ButtonDirection} from "../../common/buttons/RoundButton";
import {isEmail, isValid} from "../../../helpers/checkIsHelper";
import {useValidation} from "../../../hooks/useValidation";
import Autocomplete from "../../common/Autocomplete/Autocomplete";
import IngredientsResource from "../../../resources/ingredientsResource";

const Step4 = props => {
    const {
        hide,
        pushStep,
        data,
        updateData
    } = props;
    const {
        currentStep
    } = data;

    // const stepFilled = React.useMemo(() => isValid({
    // }), []);

    const onSet = (value, field, validation) => {
        validation && validation(value);
        updateData({ [field]: value });
    };

    const goNext = () => {
        // if (!stepFilled || currentStep > 3) {
        //     return;
        // }

        updateData({ currentStep: 4 });
        pushStep(StepsResource[4]);
    };

    return <div className={cn("step__card", { ["step__card--hide"]: hide })}>
        <div className="green__title">Данные авторизации</div>
        <Autocomplete
            placeholder={`Любимые ингредиенты`}
            data={IngredientsResource}
            onSelect={value => console.log(value)}
        /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <RoundButton
            active={currentStep > 3}
            onClick={goNext}
            // disabled={!stepFilled}
            direction={ButtonDirection.bottomRight}
            arrowDirection={ButtonDirection.right}
        />
    </div>
};

Step4.propTypes = {
    updateData: PropTypes.func.isRequired,
    data: PropTypes.object,
    subscription: PropTypes.bool
};

export default Step4;