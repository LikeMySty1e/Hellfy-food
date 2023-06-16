import React from 'react';
import PropTypes from 'prop-types';
import {observer} from "mobx-react-lite";
import cn from 'classnames';
import {Context} from "../../index";
import BrunchImagesEnum from "../../enums/BrunchImagesEnum";
// import {formatTime} from "../../helpers/timeFormatHelper";
import Check from "../common/Check/Check";
import {ReactComponent as CheckIcon} from "../../icons/common/check.m.svg";
import {ReactComponent as LikeIcon} from "../../icons/common/like.m.svg";
import './style.css';

const FoodCard = observer(props => {
    const {
        mealtime,
        mealtimeFood,
        checked,
        liked,
        isFadeout,
        onClick
    } = props;
    const {
        averagePrice,
        description,
        kkal,
        name,
    } = mealtimeFood;
    const { main } = React.useContext(Context);
    const [isHover, setIsHover] = React.useState(false);
    // const parsedAvTime = React.useMemo(() => formatTime(avTime), [avTime]);

    const checkoutFood = value => main.setFoodChecked(value, mealtime);

    return <div
        onClick={() => onClick(mealtime)}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className={cn("food__container", { ["food__container--fadeout"]: isFadeout } )}
    >
        <Check
            value={checked}
            isHover={isHover}
            onClick={checkoutFood}
            classname={"food__check"}
            CheckIcon={CheckIcon}
        />
        <div className={`food__icon food__icon--${mealtime}`}>
            <img src={`./images/${mealtime}.png`} alt='Завтрак'/>
        </div>
        <div className="food__content">
            <div className="food__header">
                <h3 className="food__title">{name}</h3>
                {kkal && <span className="food__calories">{kkal} ккал</span>}
            </div>
            {description}
            {averagePrice && <div className="food__price">~{averagePrice} руб.</div>}
            {/*<div className="food__time">{parsedAvTime}</div>*/}
        </div>
        <Check
            value={liked}
            isHover={isHover}
            onClick={checkoutFood}
            classname={"food__like"}
            CheckIcon={LikeIcon}
        />
        </div>;
});


FoodCard.defaultProps = {
    mealtime: BrunchImagesEnum.breakfast,
    mealtimeFood: {},
    checked: false,
    isFadeout: false
}

FoodCard.propTypes = {
    onClick: PropTypes.func.isRequired,
    mealtime: PropTypes.oneOf(BrunchImagesEnum),
    mealtimeFood: PropTypes.shape({
        averagePrice: PropTypes.number,
        description: PropTypes.string,
        kkal: PropTypes.number,
        name: PropTypes.string,
    }),
    checked: PropTypes.bool,
    isFadeout: PropTypes.bool
};

export default FoodCard;