import React from 'react';
import PropTypes from "prop-types";
import cn from 'classnames';
import ColorEnum from "./enums/ColorEnum";
import './style.css';

export const Switch = ({ value, onChange, color = ColorEnum.green }) => {
    return (
        <>
            <label className='switch'>
                <input type='checkbox' checked={value} onChange={onChange} />
                <span className={`my-slider my-slider--${color}`}></span>
            </label>
        </>
    );
};

Switch.propTypes = {
    value: PropTypes.bool,
    onChange: PropTypes.func,
    color: PropTypes.oneOf(ColorEnum)
};

export default Switch;
