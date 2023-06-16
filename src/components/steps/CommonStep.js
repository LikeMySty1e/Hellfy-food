import React from 'react';
import PropTypes from 'prop-types';
import {observer} from "mobx-react-lite";
import cn from "classnames";
import RoundButton, {ButtonDirection} from "../common/buttons/RoundButton";
import SvgIcon from "../common/SvgIcon/SvgIcon";

const CommonStep = observer(props => {
    const {
        isLast,
        Icon,
        classname,
        index,
        direction,
        iconDirection,
        hide,
        stepFilled,
        children,
        onClick,
        currentStep,
        pushStep
    } = props;
    const [isHover, setIsHover] = React.useState(false);
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

    return <div
        onClick={onStepClick}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        ref={stepRef}
        className={cn("step__card", classname, { ["step__card--hide"]: hide })}
    >
        {Icon && <SvgIcon classname={cn("step__icon", { "step__icon--shown": isHover })} Icon={Icon} />}
        {children}
        {!isLast && !!pushStep && <RoundButton
            onClick={goNext}
            disabled={!stepFilled || currentStep > index}
            direction={direction}
            iconDirection={iconDirection}
        />}
    </div>
});

CommonStep.defaultProps = {
    direction: ButtonDirection.bottomLeft,
    iconDirection: ButtonDirection.left
};

CommonStep.propTypes = {
    classname: PropTypes.string,
    isLast: PropTypes.bool,
    index: PropTypes.number,
    direction: PropTypes.oneOf(ButtonDirection),
    iconDirection: PropTypes.oneOf(ButtonDirection),
    stepFilled: PropTypes.bool,
    hide: PropTypes.bool,
    pushStep: PropTypes.func
};

export default CommonStep;