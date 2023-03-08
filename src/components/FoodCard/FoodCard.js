import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import BrunchImagesEnum from "../../enums/BrunchImagesEnum";
import {formatTime} from "../../helpers/timeFormatHelper";
import './style.css';

const FoodCard = props => {
    const {
        brunch,
        kkal,
        title,
        description,
        avPrice,
        avTime,
        isFadeout
    } = props;

    const parsedAvTime = React.useMemo(() => formatTime(avTime), [avTime]);

    return <div className={cn("food__container", { ["food__container--fadeout"]: isFadeout } )}>
        <div className={`food__icon food__icon--${brunch}`}>
            <img src={`./images/${brunch}.png`} alt='Завтрак'/>
        </div>
        <div className="food__content">
            <div className="food__header">
                <h3 className="food__title">{title}</h3>
                {kkal && <span className="food__calories">{kkal} ккал</span>}
            </div>
            {description}
            {avPrice && <div className="food_price">~{avPrice} руб.</div>}
            <div className="food__time">{parsedAvTime}</div>
        </div>
        </div>;
};

FoodCard.defaultProps = {
    brunch: BrunchImagesEnum.breakfast,
    isFadeout: false
}

FoodCard.propTypes = {
    brunch: PropTypes.oneOf(BrunchImagesEnum),
    title: PropTypes.string,
    kkal: PropTypes.number,
    description: PropTypes.string,
    avPrice: PropTypes.number,
    isFadeout: PropTypes.bool
};

export default FoodCard;