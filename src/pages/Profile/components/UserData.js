import React from 'react';
import cn from "classnames";
import {observer} from "mobx-react-lite";
import {Context} from "../../../index";
import RoundButton, {ButtonDirection} from "../../../components/common/buttons/RoundButton";
import { ReactComponent as CheckIcon } from "../../../icons/common/check.m.svg";
import EditStepsResource from "../resources/EditStepsResource";
import userModel from "../../../models/UserModel";
import './style.m.scss';

const UserData = observer(() => {
    const {main} = React.useContext(Context);
    const [userInfo, setUserInfo] = React.useState({ ...userModel, ...main.userModel });
    const [editSuccess, setEditSuccess] = React.useState(false);
    const [isDirty, setIsDirty] = React.useState(false);
    const [currentStep, setCurrentStep] = React.useState(0);

    React.useEffect(() => setUserInfo({ ...userModel, ...main.userModel }), [main.userModel]);

    const goNext = () => setCurrentStep(currentStep === 2 ? 0 : currentStep + 1);

    const saveUserInfo = () => {
        main.editUserInfo(userInfo)
            .then(result => {
                setEditSuccess(result);

                if (result) {
                    setTimeout(() => setIsDirty(false), 400);
                }
            });
    };

    const renderCurrent = () => {
        const { Step } = EditStepsResource[currentStep];

        return <Step
            isEdit
            showIcon={false}
            classname={cn("info__step", "info__step--active")}
            data={userInfo}
            updateData={updatedData => {
                setUserInfo({...userInfo, ...updatedData});
                setEditSuccess(false);
                setIsDirty(true);
            }}
        />
    };

    return <div className="user__edit">
        {renderCurrent()}
        {EditStepsResource
            .filter(step => step.index !== currentStep)
            .map((step, arrIndex) => {
                const { Step } = step;

                return <Step
                    isEdit
                    showIcon
                    onClick={() => setCurrentStep(step.index)}
                    classname={cn("info__step", `info__step--hidden`, `info__step--hidden--${arrIndex}` )}
                    data={main.userModel}
                />;
            })}
        <RoundButton
            canBeActive={false}
            classname="edit__swipe"
            onClick={goNext}
            direction={ButtonDirection.right}
            iconDirection={ButtonDirection.right}
        />
        <RoundButton
            active={editSuccess}
            disabled={main.pendingState.editUserInfo}
            canBeActive={false}
            classname={cn("edit__save", { "edit__save--showed": isDirty })}
            onClick={saveUserInfo}
            direction={ButtonDirection.right}
            iconDirection={ButtonDirection.top}
            Icon={CheckIcon}
        />
    </div>;
});

export default UserData;