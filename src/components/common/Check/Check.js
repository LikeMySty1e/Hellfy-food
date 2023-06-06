import React from 'react';
import PropTypes from 'prop-types';
import cn from "classnames";
import SvgIcon from "../SvgIcon/SvgIcon";
import { ReactComponent as CheckIcon } from "../../../icons/common/check.m.svg";
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