import React from 'react';
import PropTypes from 'prop-types';
import cn from "classnames";
import SvgIcon from "../SvgIcon/SvgIcon";
import './style.css';

const Check = props => {
    const { value, classname, CheckIcon, onClick, isHover } = props;
    const [checked, setChecked] = React.useState(value);

    React.useEffect(() => setChecked(value), [value]);

    const checkout = e => {
        setChecked(!checked);
        onClick && onClick(!checked);

        e.stopPropagation();
    };

    if (!CheckIcon) {
        return null;
    }

    return <div onClick={checkout}>
        <SvgIcon Icon={CheckIcon} classname={cn("check", classname, { ["check--visible"]: checked || isHover })} />
    </div>;
};

Check.propTypes = {
    value: PropTypes.bool,
    isHover: PropTypes.bool,
    classname: PropTypes.string,
    onClick: PropTypes.func.isRequired
};

export default Check;