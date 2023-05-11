import React from 'react';
import PropTypes from 'prop-types';
import {observer} from "mobx-react-lite";
import cn from 'classnames';
import {Context} from "../../index";
import BrunchImagesEnum from "../../enums/BrunchImagesEnum";
import {formatTime} from "../../helpers/timeFormatHelper";
import Check from "../common/Check/Check";
import './style.css';

const FoodCard = observer(props => {
    const {
        id,
        brunch,
        kkal,
        title,
        description,
        avPrice,
        avTime,
        checked,
        isFadeout,
        onClick
    } = props;
    const { main } = React.useContext(Context);
    const [isHover, setIsHover] = React.useState(false);
    const parsedAvTime = React.useMemo(() => formatTime(avTime), [avTime]);

    const checkoutFood = value => main.setFoodChecked(value, id);

    return <div
        onClick={() => onClick(id)}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className={cn("food__container", { ["food__container--fadeout"]: isFadeout } )}
    >
        <Check value={checked} isHover={isHover} onClick={checkoutFood} classname={"food__check"} />
        <div className={`food__icon food__icon--${brunch}`}>
            <img src={`./images/${brunch}.png`} alt='Завтрак'/>
        </div>
        <div className="food__content">
            <div className="food__header">
                <h3 className="food__title">{title}</h3>
                {kkal && <span className="food__calories">{kkal} ккал</span>}
            </div>
            {description}
            {avPrice && <div className="food__price">~{avPrice} руб.</div>}
            <div className="food__time">{parsedAvTime}</div>
        </div>
        </div>;
});


FoodCard.defaultProps = {
    brunch: BrunchImagesEnum.breakfast,
    checked: false,
    isFadeout: false
}

FoodCard.propTypes = {
    id: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    brunch: PropTypes.oneOf(BrunchImagesEnum),
    title: PropTypes.string,
    kkal: PropTypes.number,
    description: PropTypes.string,
    avPrice: PropTypes.number,
    checked: PropTypes.bool,
    isFadeout: PropTypes.bool
};

export default FoodCard;