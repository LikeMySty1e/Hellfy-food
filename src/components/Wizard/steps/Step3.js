import React from 'react';
import PropTypes from 'prop-types';
import Button, {Color} from "../../common/buttons/Button";
import cn from "classnames";
import Input from "../../common/Input";
import StepsResource from "../resources/StepsResource";

const Step3 = props => {
    const { hide, pushStep } = props;

    return <div className={cn("step__card", { ["step__card--hide"]: hide })}>
        <div className="orange__title">О вашем персонаже</div>
        <Input label={"Имя"} />
        <div className="step__row">
            <Input classname="step__input--small" label={"Рост"} />
            <Input classname="step__input--small" label={"Вес"} />
            <Input label={"Возраст"} />
        </div>
        <br />

        <Button color={Color.green} onClick={() => pushStep(StepsResource[2])}>К следующему шагу</Button>
    </div>
};

Step3.propTypes = {
    
};

export default Step3;