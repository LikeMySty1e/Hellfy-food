import React from 'react';
import cn from "classnames";
import PropTypes from 'prop-types';
import StepsResource from "./resources/StepsResource";
import SideEnum from "./enums/SideEnum";
import './style.css';
import {set} from "mobx";

const transitionDelay = 350;
let hideInterval;
let deleteTimeout;

const Wizard = props => {
    const { children, launch } = props;
    const [steps, setSteps] = React.useState([]);

    const hideStep = stepIndex => {
        const updatedSteps = steps.map((step, index) => {
            return index >= stepIndex ? {...step, hide: true} : step
        });

        setSteps([...updatedSteps]);
    }

    React.useEffect(() => {
        clearInterval(hideInterval);
        clearTimeout(deleteTimeout);

        if (launch) {
            setSteps([StepsResource[0]]);
        } else if (steps.length) {
            let index = steps.length - 1;

            hideInterval = setInterval(() => {
                hideStep(index);
                index = index - 1;

                if (index < 0) {
                    clearInterval(hideInterval);
                }
            }, 350);

            deleteTimeout = setTimeout(() => setSteps([]), transitionDelay * steps.length + transitionDelay);
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

            return <Step hide={step.hide} />;
        })
    }

    return <div className="wizard">
            <div className={cn("wizard__column", "wizard__column--left")}>
                <div className="step--initial">{children}</div>
                {getSteps(SideEnum.left)}
            </div>
        {steps.length
            ? <div className="wizard__column">
                {getSteps(SideEnum.right)}
            </div>
            : null
        }
        </div>;
};

Wizard.propTypes = {
    children: PropTypes.node,
    launch: PropTypes.bool
};

export default Wizard;