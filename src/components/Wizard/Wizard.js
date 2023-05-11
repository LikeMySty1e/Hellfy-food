import React from 'react';
import {observer} from "mobx-react-lite";
import cn from "classnames";
import PropTypes from 'prop-types';
import SideEnum from "./enums/SideEnum";
import './style.css';

const transitionDelay = 350;
let hideInterval;
let deleteTimeout;

const Wizard = observer(props => {
    const {
        data,
        children,
        currentStep,
        setCurrentStep,
        model,
        updateData,
        stepsResource,
        launch
    } = props;
    const [steps, setSteps] = React.useState([]);

    const hideStep = stepIndex => {
        const updatedSteps = steps.map((step, index) => {
            return index >= stepIndex ? {...step, hide: true} : step
        });

        setSteps([...updatedSteps]);
    };

    const pushStep = step => {
        setCurrentStep(step);
        setSteps([...steps, stepsResource[step]]);
    }

    React.useEffect(() => {
        clearInterval(hideInterval);
        clearTimeout(deleteTimeout);

        if (launch) {
            const initSteps = stepsResource
                .map((step, index) => index <= currentStep ? step : null)
                .filter(Boolean);

            setSteps([...initSteps]);
        } else if (steps.length) {
            let index = steps.length - 1;

            hideInterval = setInterval(() => {
                hideStep(index);
                index = index - 1;

                if (index < 0) {
                    clearInterval(hideInterval);
                }
            }, 350);

            deleteTimeout = setTimeout(() => {
                setSteps([]);
                setCurrentStep(null);
                updateData({ ...model }, true);
            }, transitionDelay * steps.length + transitionDelay);
        }

        return () => {
            clearInterval(hideInterval);
            clearTimeout(deleteTimeout);
        };
    }, [launch]);

    const getSteps = side => {
        if (!steps.length) {
            return null;
        }

        return steps.filter(step => step.side === side).map(step => {
            const Step = step.component;

            return <Step
                index={step.index}
                isLast={step.index === stepsResource.length}
                data={data}
                updateData={updateData}
                onComplete={props.onComplete}
                currentStep={currentStep}
                pushStep={pushStep}
                hide={step.hide}
            />;
        })
    }

    return <div className="wizard">
        <div className={cn("wizard__column", "wizard__column--left")}>
            <div className="step--initial">{children}</div>
            {getSteps(SideEnum.left)}
        </div>
        {!!steps.length && <div className="wizard__column">
            {getSteps(SideEnum.right)}
        </div>}
        </div>;
});

Wizard.defaultProps = {
    allStepsShowed: false
}

Wizard.propTypes = {
    currentStep: PropTypes.number,
    data: PropTypes.object,
    model: PropTypes.object,
    stepsResource: PropTypes.arrayOf(PropTypes.shape({ component: PropTypes.element, side: PropTypes.string })),
    setCurrentStep: PropTypes.func,
    updateData: PropTypes.func.isRequired,
    onComplete: PropTypes.func,
    children: PropTypes.node,
    launch: PropTypes.bool
};

export default Wizard;