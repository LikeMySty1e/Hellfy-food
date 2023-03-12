import React from 'react';
import PropTypes from 'prop-types';
import Button, {Color} from "../../common/Button";
import cn from "classnames";

const Step2 = props => {
    const { hide } = props;

    console.log(`2`, hide)

    return <div className={cn("step__card", { ["step__card--hide"]: hide })}>
        <Button
            color={Color.green}
            classname="registration__button"
        >
            Войти
        </Button>
        <Button
            color={Color.green}
            classname="registration__button"
        >
            Войти
        </Button>
    </div>
};

Step2.propTypes = {
    
};

export default Step2;