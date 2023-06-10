import React from 'react';
import PropTypes from 'prop-types';
import {observer} from "mobx-react-lite";
import Checkbox from "../common/Checkbox/Checkbox";
import Autocomplete from "../common/Autocomplete/Autocomplete";
import {ButtonDirection} from "../common/buttons/RoundButton";
import {Context} from "../../index";
import CommonStep from "./CommonStep";
import Tag from "../common/Tag";

const StepPreferences = observer(props => {
    const {main} = React.useContext(Context);
    const {
        data,
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

    const availableFavourites = React.useMemo(() => {
        const selectedValues = favouriteIngredients.map(item => item.value);

        return main.ingredients.filter(item => !selectedValues.includes(item.value)) || [];
    }, [favouriteIngredients, main.ingredients]);

    const availableUnfavoured = React.useMemo(() => {
        const selectedValues = unfavouredIngredients.map(item => item.value);

        return main.ingredients.filter(item => !selectedValues.includes(item.value)) || [];
    }, [unfavouredIngredients, main.ingredients]);

    const availableBlackList = React.useMemo(() => {
        const selectedValues = blacklistIngredients.map(item => item.value);

        return main.ingredients.filter(item => !selectedValues.includes(item.value)) || [];
    }, [blacklistIngredients, main.ingredients]);

    const onFavouriteTagClick = value => {
        updateData({ favouriteIngredients: favouriteIngredients.filter(item => item.value !== value) });
    };

    const onUnfavouredTagClick = value => {
        updateData({ unfavouredIngredients: unfavouredIngredients.filter(item => item.value !== value) });
    };

    const onBlackListTagClick = value => {
        updateData({ blacklistIngredients: blacklistIngredients.filter(item => item.value !== value) });
    };

    return <CommonStep
        {...props}
        stepFilled
        direction={ButtonDirection.bottomRight}
        arrowDirection={ButtonDirection.right}
    >
        <div className="orange__title">Предпочтения в еде</div>
        {!isEdit && <React.Fragment>
            Знание ваших предпочтений в еде помогает создать индивидуальный план питания,
            который соответствует вашему вкусу. <br/><br />
        </React.Fragment>}
        <Autocomplete
            clearAfterSelect
            placeholder={`Любимые продукты`}
            data={availableFavourites}
            onSelect={selectedItem => updateData({ favouriteIngredients: [...favouriteIngredients, selectedItem] })}
        />
        <div className="tag__group">
            {favouriteIngredients.map(item => <Tag {...item} onClick={onFavouriteTagClick} />)}
        </div><br />
        <Autocomplete
            clearAfterSelect
            placeholder={`Нелюбимые продукты`}
            data={availableUnfavoured}
            onSelect={selectedItem => updateData({ unfavouredIngredients: [...unfavouredIngredients, selectedItem] })}
        />
        <div className="tag__group">
            {unfavouredIngredients.map(item => <Tag {...item} onClick={onUnfavouredTagClick} />)}
        </div><br />
        {!isEdit && <React.Fragment>
            У вас есть...<br />
            <div className="step__row">
                <Checkbox
                    value={isDigestive}
                    classname="step__checkbox"
                    onChange={value => updateData({isDigestive: value})}
                >
                    <span className="green">Проблемы с пищеварением</span>
                </Checkbox>
                <Checkbox
                    value={isAllergic}
                    classname="step__checkbox"
                    onChange={value => updateData({isAllergic: value})}
                >
                    <span className="green">Аллергия</span>
                </Checkbox>
            </div><br />
        </React.Fragment>}
        {(isAllergic || isDigestive) && <React.Fragment>
            {!isEdit && <React.Fragment>
                Блюда с продуктами из черного списка никогда не появятся в Вашем плане питания.<br /><br />
            </React.Fragment>}
            <Autocomplete
                clearAfterSelect
                placeholder={`Черный список`}
                data={availableBlackList}
                onSelect={selectedItem => updateData({blacklistIngredients: [...blacklistIngredients, selectedItem]})}
            />
            <div className="tag__group">
                {blacklistIngredients.map(item => <Tag {...item} onClick={onBlackListTagClick} />)}
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