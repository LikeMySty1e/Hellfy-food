import React from 'react';
import PropTypes from 'prop-types';
import cn from "classnames";
import './style.css';

const Check = props => {
    const { value, classname, onClick, isHover } = props;
    const [checked, setChecked] = React.useState(value);

    React.useEffect(() => setChecked(value), [value]);

    const checkout = e => {
        setChecked(!checked);
        onClick && onClick(!checked);

        e.stopPropagation();
    };

    return <div
        className={cn("check", classname, { ["check--visible"]: checked || isHover })}
        onClick={checkout}
    />
};

Check.propTypes = {
    value: PropTypes.bool,
    isHover: PropTypes.bool,
    classname: PropTypes.string,
    onClick: PropTypes.func.isRequired
};

export default Check;