import React from 'react';
import PropTypes from 'prop-types';
import {observer} from "mobx-react-lite";
import cn from "classnames";
import Input, {InputType} from "../../common/Input";
import RoundButton, {ButtonDirection} from "../../common/buttons/RoundButton";
import Checkbox from "../../common/Checkbox/Checkbox";
import {useValidation} from "../../../hooks/useValidation";
import {isNull, isValid} from "../../../helpers/checkIsHelper";
import GenderEnum from "../../../enums/GenderEnum";
import Autocomplete from "../../common/Autocomplete/Autocomplete";
import profResource from "../../../resources/profResource";

const CommonStep = observer(props => {
    const {
        isLast,
        index,
        direction,
        arrowDirection,
        hide,
        stepFilled,
        children,
        currentStep,
        pushStep
    } = props;
    const stepRef = React.useRef(null);

    React.useEffect(() => {
        if (stepRef.current) {
            window.scrollTo({ top: (stepRef.current.offsetTop - 300) || 0, behavior: `smooth` });
        }
    }, []);

    const goNext = () => pushStep(index + 1);

    return <div ref={stepRef} className={cn("step__card", { ["step__card--hide"]: hide })}>
        {children}
        {!isLast && <RoundButton
            onClick={goNext}
            disabled={!stepFilled || currentStep > index}
            direction={direction}
            arrowDirection={arrowDirection}
        />}
    </div>
});

CommonStep.defaultProps = {
    direction: ButtonDirection.bottomLeft,
    arrowDirection: ButtonDirection.left
};

CommonStep.propTypes = {
    isLast: PropTypes.bool,
    index: PropTypes.number,
    direction: PropTypes.oneOf(ButtonDirection),
    arrowDirection: PropTypes.oneOf(ButtonDirection),
    stepFilled: PropTypes.bool,
    hide: PropTypes.bool,
    pushStep: PropTypes.func
};

export default CommonStep;