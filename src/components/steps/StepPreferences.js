import React from 'react';
import PropTypes from 'prop-types';
import {observer} from "mobx-react-lite";
import Checkbox from "../common/Checkbox/Checkbox";
import Autocomplete from "../common/Autocomplete/Autocomplete";
import {ButtonDirection} from "../common/buttons/RoundButton";
import {Context} from "../../index";
import CommonStep from "./CommonStep";
import Tag from "../common/Tag";
import { ReactComponent as CookieIcon } from "../../icons/common/cookie.m.svg";

const StepPreferences = observer(props => {
    const {main} = React.useContext(Context);
    const {
        data,
        showIcon,
        isEdit,
        updateData
    } = props;
    const {
        favouriteIngredients,
        unfavouredIngredients,
        blacklistIngredients,
        isDigestive,
        isAllergic
    } = data;

    const showBlackList = React.useMemo(() => {
        return isEdit || isDigestive || isAllergic;
    }, [isEdit, isDigestive, isAllergic]);

    const availableIngredients = React.useMemo(() => {
        const selectedValues = [...favouriteIngredients, ...unfavouredIngredients, ...blacklistIngredients]
            .map(item => item.value);

        return main.ingredients.filter(item => !selectedValues.includes(item.value)) || [];
    }, [unfavouredIngredients, favouriteIngredients, blacklistIngredients, main.ingredients]);

    const availableBlackList = React.useMemo(() => {
        const selectedValues = blacklistIngredients.map(item => item.value);

        return main.ingredients.filter(item => !selectedValues.includes(item.value)) || [];
    }, [blacklistIngredients, main.ingredients]);

    const addToBlackList = selectedItem => {
        const filteredFavourites = favouriteIngredients.filter(ingredient => ingredient.value !== selectedItem.value);
        const filteredUnfavored = unfavouredIngredients.filter(ingredient => ingredient.value !== selectedItem.value);

        updateData({
            blacklistIngredients: [...blacklistIngredients, selectedItem],
            favouriteIngredients: filteredFavourites,
            unfavouredIngredients: filteredUnfavored
        });
    };

    const onTagClick = (value, field) => {
        if (!value || !data.hasOwnProperty(field)) {
            return;
        }

        updateData({ [field]: data[field].filter(item => item?.value !== value) });
    };

    return <CommonStep
        {...props}
        stepFilled
        Icon={(isEdit && showIcon) ? CookieIcon: null}
        direction={ButtonDirection.bottomRight}
        iconDirection={ButtonDirection.right}
    >
        <div className="orange__title">Предпочтения в еде</div>
        {!isEdit && <React.Fragment>
            Знание ваших предпочтений в еде помогает создать индивидуальный план питания,
            который соответствует вашему вкусу. <br/><br />
        </React.Fragment>}
        <Autocomplete
            clearAfterSelect
            placeholder={`Любимые продукты`}
            data={availableIngredients}
            onSelect={selectedItem => updateData({ favouriteIngredients: [...favouriteIngredients, selectedItem] })}
        />
        <div className="tag__group">
            {favouriteIngredients.map(item => <Tag {...item} onClick={value => onTagClick(value, `favouriteIngredients`)} />)}
        </div><br />
        <Autocomplete
            clearAfterSelect
            placeholder={`Нелюбимые продукты`}
            data={availableIngredients}
            onSelect={selectedItem => updateData({ unfavouredIngredients: [...unfavouredIngredients, selectedItem] })}
        />
        <div className="tag__group">
            {unfavouredIngredients.map(item => <Tag {...item} onClick={value => onTagClick(value, `unfavouredIngredients`)} />)}
        </div><br />
        {!isEdit && <React.Fragment>
            У вас есть...<br />
            <div className="step__row">
                <Checkbox
                    value={isDigestive}
                    classname="step__checkbox"
                    onChange={value => updateData({ isDigestive: value })}
                >
                    <span className="green">Проблемы с пищеварением</span>
                </Checkbox>
                <Checkbox
                    value={isAllergic}
                    classname="step__checkbox"
                    onChange={value => updateData({ isAllergic: value })}
                >
                    <span className="green">Аллергия</span>
                </Checkbox>
            </div><br />
        </React.Fragment>}
        {showBlackList && <React.Fragment>
            {!isEdit && <React.Fragment>
                Блюда с продуктами из черного списка никогда не появятся в Вашем плане питания.<br /><br />
            </React.Fragment>}
            <Autocomplete
                clearAfterSelect
                placeholder={`Черный список`}
                data={availableBlackList}
                onSelect={addToBlackList}
            />
            <div className="tag__group">
                {blacklistIngredients.map(item => <Tag {...item} onClick={value => onTagClick(value, `blacklistIngredients`)} />)}
            </div><br />
        </React.Fragment>}
    </CommonStep>
});

StepPreferences.propTypes = {
    classname: PropTypes.string,
    isEdit: PropTypes.bool,
    isLast: PropTypes.bool,
    updateData: PropTypes.func.isRequired,
    data: PropTypes.object
};

export default StepPreferences;