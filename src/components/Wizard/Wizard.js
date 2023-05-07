import React from 'react';
import cn from "classnames";
import PropTypes from 'prop-types';
import StepsResource from "./resources/StepsResource";
import SideEnum from "./enums/SideEnum";
import UserModel from "../../models/UserModel";
import './style.css';

const transitionDelay = 350;
let hideInterval;
let deleteTimeout;

const Wizard = props => {
    const {
        data,
        children,
        launch
    } = props;
    const [steps, setSteps] = React.useState([]);

    const hideStep = stepIndex => {
        const updatedSteps = steps.map((step, index) => {
            return index >= stepIndex ? {...step, hide: true} : step
        });

        setSteps([...updatedSteps]);
    };

    const pushStep = step => setSteps([...steps, step]);

    React.useEffect(() => {
        clearInterval(hideInterval);
        clearTimeout(deleteTimeout);

        if (launch) {
            const initSteps = StepsResource
                .map((step, index) => index <= data.currentStep ? step : null)
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
                props.updateData({ ...UserModel, currentStep: null }, true);
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
                data={data}
                updateData={props.updateData}
                onComplete={props.onComplete}
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
};

Wizard.propTypes = {
    data: PropTypes.object,
    updateData: PropTypes.func,
    onComplete: PropTypes.func,
    children: PropTypes.node,
    launch: PropTypes.bool
};

export default Wizard;