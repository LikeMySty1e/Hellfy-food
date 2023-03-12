import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import ButtonColorEnum from "./enums/ButtonColorEnum";
import './style.css';

const Button = props => {
    const {
        active,
        onClick,
        children,
        disabled,
        style
    } = props;
    const [isActive, setIsActive] = React.useState(active);

    React.useEffect(() => setIsActive(active), [active]);

    const onButtonClick = () => {
        if (disabled) {
            return;
        }

        setIsActive(!isActive);
        onClick && onClick(!isActive);
    };

    const getClassname = () => {
        const { color, classname } = props;

        return cn(
            "button",
            "button__native",
            `button--${color}`,
            { [`button--${color}--active`]: color && isActive },
            classname
        );
    }

    return <button
        disabled={disabled}
        style={{ ...style }}
        className={getClassname()}
        onClick={onButtonClick}
    >
        {children}
    </button>;
};

Button.defaultProps = {
    color: ButtonColorEnum.white,
    active: false
};

Button.propTypes = {
    disabled: PropTypes.bool,
    style: PropTypes.object,
    active: PropTypes.bool,
    color: PropTypes.oneOf(Object.values(ButtonColorEnum)),
    classname: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

export default Button;