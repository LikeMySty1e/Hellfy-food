import React from 'react';
import cn from "classnames";
import PropTypes from 'prop-types';
import ButtonDirectionEnum from "./enums/ButtonDirectionEnum";
import './style.css';

const RoundButton = props => {
    const {
        active,
        direction,
        disabled,
        arrowDirection,
        showed
    } = props;
    const [isActive, setIsActive] = React.useState(active);

    React.useEffect(() => setIsActive(active), [active]);

    const getButtonClassnames = () => {
        return cn(
            "round__native",
            "round__button",
            `round__button--${arrowDirection || direction}`,
            {
                "round__button--active": isActive
            }
        )
    };

    const getContainerClassnames = () => {
        return cn(`round__container`, {
            "round__container--active": isActive,
            "round__container--showed": showed,
            "round__container--disabled": disabled
        });
    };

    const onButtonClick = () => {
        const { onClick } = props;

        setIsActive(true);
        onClick && onClick(true);
    };

    return <div className={cn(`round__wrapper`, `round__wrapper--${direction}`)}>
        <div
            role="button"
            className={getContainerClassnames()}
            onClick={onButtonClick}
        >
            <button disabled={disabled} className={getButtonClassnames()}>🡡</button>
        </div>
    </div>;
};

RoundButton.defaultProps = {
    direction: ButtonDirectionEnum.left,
    showed: true,
    disabled: false
}

RoundButton.propTypes = {
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    showed: PropTypes.bool,
    direction: PropTypes.oneOf(Object.values(ButtonDirectionEnum)),
    arrowDirection: PropTypes.oneOf(Object.values(ButtonDirectionEnum)),
    active: PropTypes.bool
};

export default RoundButton;