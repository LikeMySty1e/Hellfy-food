import React from 'react';
import cn from "classnames";
import {observer} from "mobx-react-lite";
import Input, {InputType} from "../../../components/common/Input";
import Autocomplete from "../../../components/common/Autocomplete";
import Tag from "../../../components/common/Tag";
import {isValid} from "../../../helpers/checkIsHelper";
import {useValidation} from "../../../hooks/useValidation";
import profResource from "../../../resources/profResource";
import {Context} from "../../../index";
import '../style.css';

const UserData = observer(() => {
    const {main} = React.useContext(Context);
    const {
        profession,
        weight,
        height,
        age,
        favouriteIngredients,
        unfavouredIngredients,
        blackListIngredients,
        isDigestive,
        isAllergic
    } = main.userModel;
    const [isWeightValid, validateWeight] = useValidation(weight,true, isValid);
    const [isHeightValid, validateHeight] = useValidation(height,true, isValid);
    const [isProfessionValid, validateProfession] = useValidation(profession,true, isValid);
    const [isAgeValid, validateAge] = useValidation(age,true, isValid);

    const availableFavourites = React.useMemo(() => {
        const selectedValues = favouriteIngredients.map(item => item.value);

        return main.ingredients.filter(item => !selectedValues.includes(item.value)) || [];
    }, [favouriteIngredients]);

    const availableUnfavoured = React.useMemo(() => {
        const selectedValues = unfavouredIngredients.map(item => item.value);

        return main.ingredients.filter(item => !selectedValues.includes(item.value)) || [];
    }, [unfavouredIngredients]);

    const availableBlackList = React.useMemo(() => {
        const selectedValues = blackListIngredients.map(item => item.value);

        return main.ingredients.filter(item => !selectedValues.includes(item.value)) || [];
    }, [blackListIngredients]);

    const onFavouriteTagClick = value => {
        main.updateUserData(`favouriteIngredients`, favouriteIngredients.filter(item => item.value !== value));
    };

    const onUnfavouredTagClick = value => {
        main.updateUserData(`unfavouredIngredients`, unfavouredIngredients.filter(item => item.value !== value));
    };

    const onBlackListTagClick = value => {
        main.updateUserData(`blackListIngredients`, blackListIngredients.filter(item => item.value !== value));
    };

    const onSet = (value, field, validation) => {
        validation && validation(value);
        main.updateUserData(field, value);
    };

    return <section className={cn("profile__section", "user__data")}>
        <div className="green__title">О вашем персонаже</div>
        <div className="step__row">
            <Input
                type={InputType.numbers}
                value={height}
                maxLength={3}
                classname="step__input--small"
                label={"Рост (см)"}
                error={!isHeightValid}
                onChange={value => onSet(value, `height`, validateHeight)}
            />
            <Input
                type={InputType.numbers}
                value={weight}
                maxLength={3}
                classname="step__input--small"
                label={"Вес (кг)"}
                error={!isWeightValid}
                onChange={value => onSet(value, `weight`, validateWeight)}
            />
            <Input
                type={InputType.numbers}
                value={age}
                maxLength={2}
                label={"Возраст (лет)"}
                error={!isAgeValid}
                message={!isAgeValid ? `Введено недопустимое значение` : ``}
                onChange={value => onSet(value, `age`, validateAge)}
            />
        </div>
        <Autocomplete
            label={`Профессия`}
            selected={profession}
            data={profResource}
            error={!isProfessionValid}
            message={!isProfessionValid ? `Введите корректное название профессии` : ``}
            onSelect={({ value }) => onSet(value, `profession`, validateProfession)}
        /><br />
        <div className="orange__title">Предпочтения в еде</div>
        <Autocomplete
            clearAfterSelect
            placeholder={`Любимые продукты`}
            data={availableFavourites}
            onSelect={selectedItem => main.updateUserData(`favouriteIngredients`, [...favouriteIngredients, selectedItem])}
        />
        <div className="tag__group">
            {favouriteIngredients.map(item => <Tag {...item} onClick={onFavouriteTagClick} />)}
        </div><br />
        <Autocomplete
            clearAfterSelect
            placeholder={`Нелюбимые продукты`}
            data={availableUnfavoured}
            onSelect={selectedItem => main.updateUserData(`unfavouriteIngredients`, [...unfavouredIngredients, selectedItem])}
        />
        <div className="tag__group">
            {unfavouredIngredients.map(item => <Tag {...item} onClick={onUnfavouredTagClick} />)}
        </div><br />
        <Autocomplete
            clearAfterSelect
            placeholder={`Черный список`}
            data={availableBlackList}
            onSelect={selectedItem => main.updateUserData(`blackListIngredients`, [...blackListIngredients, selectedItem])}
        />
        <div className="tag__group">
            {blackListIngredients.map(item => <Tag {...item} onClick={onBlackListTagClick} />)}
        </div><br />
    </section>;
});

export default UserData;