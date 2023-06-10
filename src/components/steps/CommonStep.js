import React from 'react';
import PropTypes from 'prop-types';
import {observer} from "mobx-react-lite";
import cn from "classnames";
import RoundButton, {ButtonDirection} from "../common/buttons/RoundButton";

const CommonStep = observer(props => {
    const {
        isLast,
        classname,
        index,
        direction,
        arrowDirection,
        hide,
        stepFilled,
        children,
        onClick,
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

    const onStepClick = () => {
        onClick && onClick(index);
    };

    return <div onClick={onStepClick} ref={stepRef} className={cn("step__card", classname, { ["step__card--hide"]: hide })}>
        {children}
        {!isLast && !!pushStep && <RoundButton
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
    classname: PropTypes.string,
    isLast: PropTypes.bool,
    index: PropTypes.number,
    direction: PropTypes.oneOf(ButtonDirection),
    arrowDirection: PropTypes.oneOf(ButtonDirection),
    stepFilled: PropTypes.bool,
    hide: PropTypes.bool,
    pushStep: PropTypes.func
};

export default CommonStep;