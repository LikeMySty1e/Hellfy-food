import React from 'react';
import PropTypes from 'prop-types';
import cn from "classnames";
import Checkbox from "../../common/Checkbox/Checkbox";
import Autocomplete from "../../common/Autocomplete/Autocomplete";
import RoundButton, {ButtonDirection} from "../../common/buttons/RoundButton";
import IngredientsResource from "../../../resources/ingredientsResource";
import Tag from "../../common/Tag";

const Step4 = props => {
    const {
        isLast,
        index,
        hide,
        pushStep,
        currentStep,
        data,
        updateData
    } = props;
    const {
        favouriteIngredients,
        unfavouredIngredients,
        blackListIngredients,
        isDigestive,
        isAllergic
    } = data;

    const availableFavourites = React.useMemo(() => {
        const selectedValues = favouriteIngredients.map(item => item.value);

        return IngredientsResource.filter(item => !selectedValues.includes(item.value)) || [];
    }, [favouriteIngredients]);

    const availableUnfavoured = React.useMemo(() => {
        const selectedValues = unfavouredIngredients.map(item => item.value);

        return IngredientsResource.filter(item => !selectedValues.includes(item.value)) || [];
    }, [unfavouredIngredients]);

    const availableBlackList = React.useMemo(() => {
        const selectedValues = blackListIngredients.map(item => item.value);

        return IngredientsResource.filter(item => !selectedValues.includes(item.value)) || [];
    }, [blackListIngredients]);

    const onFavouriteTagClick = value => {
        updateData({ favouriteIngredients: favouriteIngredients.filter(item => item.value !== value) });
    };

    const onUnfavouredTagClick = value => {
        updateData({ unfavouredIngredients: unfavouredIngredients.filter(item => item.value !== value) });
    };

    const onBlackListTagClick = value => {
        updateData({ blackListIngredients: blackListIngredients.filter(item => item.value !== value) });
    };

    const goNext = () => pushStep(index + 1);

    return <div className={cn("step__card", { ["step__card--hide"]: hide })}>
        <div className="orange__title">Предпочтения в еде</div>
        Знание ваших предпочтений в еде помогает создать индивидуальный план питания,
        который соответствует вашему вкусу. <br/><br />
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
        {(isAllergic || isDigestive) && <React.Fragment>
            Не рекомендуется включать в черный список продукты,
            которые вы любите или не любите, так как это может отрицательно повлиять
            на выбор здорового питания. <br/> <br />
            Блюда с продуктами из черного списка никогда не появятся в Вашем плане питания.<br /><br />
            <Autocomplete
                clearAfterSelect
                placeholder={`Черный список`}
                data={availableBlackList}
                onSelect={selectedItem => updateData({blackListIngredients: [...blackListIngredients, selectedItem]})}
            />
            <div className="tag__group">
                {blackListIngredients.map(item => <Tag {...item} onClick={onBlackListTagClick} />)}
            </div><br />
        </React.Fragment>
        }
        {!isLast && <RoundButton
            disabled={currentStep > index}
            onClick={goNext}
            direction={ButtonDirection.bottomRight}
            arrowDirection={ButtonDirection.right}
        />}
    </div>
};

Step4.propTypes = {
    isLast: PropTypes.bool,
    updateData: PropTypes.func.isRequired,
    data: PropTypes.object
};

export default Step4;