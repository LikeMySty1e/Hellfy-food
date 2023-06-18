import React from 'react';
import cn from "classnames";
import PropTypes from 'prop-types';
import ButtonDirectionEnum from "./enums/ButtonDirectionEnum";
import SvgIcon from "../../SvgIcon/SvgIcon";
import {Spinner} from "react-bootstrap";
import './style.css';

const RoundButton = props => {
    const {
        canBeActive,
        Icon,
        loading,
        active,
        direction,
        classname,
        disabled,
        iconDirection,
        showed
    } = props;
    const [isActive, setIsActive] = React.useState(active);
    const [isHover, setIsHover] = React.useState(false);

    React.useEffect(() => setIsActive(active), [active]);

    const getButtonClassnames = () => {
        return cn(
            "round__native",
            "round__button",
            {
                [`round__button--${iconDirection || direction}`]: !loading,
                "round__button--active": isActive,
                "round__button--hover": isHover
            }
        )
    };

    const getContainerClassnames = () => {
        return cn(`round__container`, classname,
            {
            "round__container--active": isActive,
            "round__container--showed": showed,
            "round__container--disabled": disabled
        });
    };

    const onButtonClick = () => {
        const { onClick } = props;

        setIsActive(canBeActive);
        onClick && onClick(true);
    };

    const renderContent = () => {
        if (Icon) {
            return <SvgIcon classname={cn("round__icon", {
                "round__icon--hover": isHover,
                "round__icon--active": isActive
            })} Icon={Icon} />
        }

        return `🡡`;
    };

    return <div
        className={cn(`round__wrapper`, `round__wrapper--${direction}`)}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
    >
        {loading && <div className={cn("loader__container", classname)}>
            <Spinner
                className={cn("my__loader--mini", "round__loader")}
                animation="border"
                variant="secondary"
            />
        </div>}
        {!loading && <div
            role="button"
            className={getContainerClassnames()}
            onClick={onButtonClick}
        >
            <button disabled={disabled} className={getButtonClassnames()}>
                {renderContent()}
            </button>
        </div>}
    </div>;
};

RoundButton.defaultProps = {
    direction: ButtonDirectionEnum.left,
    loading: false,
    showed: true,
    canBeActive: true,
    disabled: false
}

RoundButton.propTypes = {
    Icon: PropTypes.element,
    canBeActive: PropTypes.bool,
    loading: PropTypes.bool,
    classname: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    showed: PropTypes.bool,
    direction: PropTypes.oneOf(Object.values(ButtonDirectionEnum)),
    iconDirection: PropTypes.oneOf(Object.values(ButtonDirectionEnum)),
    active: PropTypes.bool
};

export default RoundButton;