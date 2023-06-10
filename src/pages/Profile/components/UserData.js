import React from 'react';
import cn from "classnames";
import {observer} from "mobx-react-lite";
import {Context} from "../../../index";
import RoundButton, {ButtonDirection} from "../../../components/common/buttons/RoundButton";
import EditStepsResource from "../resources/EditStepsResource";
import userModel from "../../../models/UserModel";
import './style.m.scss';

const UserData = observer(() => {
    const {main} = React.useContext(Context);
    const [userInfo, setUserInfo] = React.useState({ ...userModel, ...main.userModel });
    const [currentStep, setCurrentStep] = React.useState(0);

    React.useEffect(() => setUserInfo({ ...userModel, ...main.userModel }), [main.userModel]);

    const goNext = () => setCurrentStep(currentStep === 2 ? 0 : currentStep + 1);

    const renderCurrent = () => {
        const { Step } = EditStepsResource[currentStep];

        return <Step
            isEdit={true}
            classname={cn("info__step", "info__step--active")}
            data={userInfo}
            updateData={updatedData => setUserInfo({ ...userInfo, ...updatedData })}
        />
    };

    return <div className="user__edit">
        {renderCurrent()}
        {EditStepsResource
            .filter(step => step.index !== currentStep)
            .map((step, arrIndex) => {
                const { Step } = step;

                return <Step
                    isEdit={true}
                    classname={cn("info__step", `info__step--hidden`, `info__step--hidden--${arrIndex}` )}
                    data={main.userModel}
                    updateData={updatedData => setUserInfo({ ...userInfo, ...updatedData })}
                />;
            })}
        <RoundButton
            canBeActive={false}
            classname="edit__swipe"
            onClick={goNext}
            direction={ButtonDirection.right}
            arrowDirection={ButtonDirection.right}
        />
    </div>

    // return <section className={cn("profile__section", "user__data")}>
    //     <div className="green__title">О вашем персонаже</div>
    //     <div className="step__row">
    //         <Input
    //             type={InputType.numbers}
    //             value={height}
    //             maxLength={3}
    //             classname="step__input--small"
    //             label={"Рост (см)"}
    //             error={!isHeightValid}
    //             onChange={value => onSet(value, `height`, validateHeight)}
    //         />
    //         <Input
    //             type={InputType.numbers}
    //             value={weight}
    //             maxLength={3}
    //             classname="step__input--small"
    //             label={"Вес (кг)"}
    //             error={!isWeightValid}
    //             onChange={value => onSet(value, `weight`, validateWeight)}
    //         />
    //         <Input
    //             type={InputType.numbers}
    //             value={age}
    //             maxLength={2}
    //             label={"Возраст (лет)"}
    //             error={!isAgeValid}
    //             message={!isAgeValid ? `Введено недопустимое значение` : ``}
    //             onChange={value => onSet(value, `age`, validateAge)}
    //         />
    //     </div>
    //     <Autocomplete
    //         label={`Профессия`}
    //         selected={profession}
    //         data={profResource}
    //         error={!isProfessionValid}
    //         message={!isProfessionValid ? `Введите корректное название профессии` : ``}
    //         onSelect={({ value }) => onSet(value, `profession`, validateProfession)}
    //     /><br />
    //     <div className="orange__title">Предпочтения в еде</div>
    //     <Autocomplete
    //         clearAfterSelect
    //         placeholder={`Любимые продукты`}
    //         data={availableFavourites}
    //         onSelect={selectedItem => main.updateUserData(`favouriteIngredients`, [...favouriteIngredients, selectedItem])}
    //     />
    //     <div className="tag__group">
    //         {favouriteIngredients.map(item => <Tag {...item} onClick={onFavouriteTagClick} />)}
    //     </div><br />
    //     <Autocomplete
    //         clearAfterSelect
    //         placeholder={`Нелюбимые продукты`}
    //         data={availableUnfavoured}
    //         onSelect={selectedItem => main.updateUserData(`unfavouriteIngredients`, [...unfavouredIngredients, selectedItem])}
    //     />
    //     <div className="tag__group">
    //         {unfavouredIngredients.map(item => <Tag {...item} onClick={onUnfavouredTagClick} />)}
    //     </div><br />
    //     <Autocomplete
    //         clearAfterSelect
    //         placeholder={`Черный список`}
    //         data={availableBlackList}
    //         onSelect={selectedItem => main.updateUserData(`blackListIngredients`, [...blackListIngredients, selectedItem])}
    //     />
    //     <div className="tag__group">
    //         {blackListIngredients.map(item => <Tag {...item} onClick={onBlackListTagClick} />)}
    //     </div><br />
    // </section>;
});

export default UserData;