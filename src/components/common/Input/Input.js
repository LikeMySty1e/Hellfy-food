import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import InputIconEnum from "./enums/InputIconEnum";
import './style.css';

const Input = props => {
    const {
        label,
        disabled,
        warning,
        classname,
        placeholder,
        error,
        icon,
        value,
        onChange,
        onInput,
        onBlur
    } = props;
    const [query, setQuery] = React.useState(value ? `${value}` : ``);
    const [isFocused, setIsFocused] = React.useState(false);
    const inputRef = React.useRef(null);

    const getClassnames = () => {
        return cn(
            "input", "input__native", classname,
            { ["input__warning"]: warning },
            { ["input__error"]: error },
            { [`input__${icon}__icon`]: !!icon }
        )
    };

    const onInputFocus = () => setIsFocused(true);

    const onInputBlur = e => {
        setIsFocused(false);

        onBlur && onBlur(query, e);
    }

    const onInputChange = e => {
        setQuery(e.target.value);

        onChange && onChange(e.target.value, e);
    };

    const getLabel = () => {
        if (!label) {
            return null;
        }

        return <div
            onClick={() => inputRef.current.focus()}
            className={cn("input__label", { ["input__label--active"]: isFocused || !!query })}
        >
            {label}
        </div>;
    };

    return <div className="input__wrapper">
        <input
            ref={inputRef}
            onFocus={onInputFocus}
            onBlur={onInputBlur}
            disabled={disabled}
            value={query}
            placeholder={placeholder}
            className={getClassnames()}
            onChange={onInputChange}
        />
        {getLabel()}
    </div>
};

Input.defaultProps = {
    placeholder: ``,
    title: ``,
    warming: false,
    error: false,
    disabled: false
};

Input.propTypes = {
    label: PropTypes.string,
    disabled: PropTypes.bool,
    warning: PropTypes.bool,
    error: PropTypes.bool,
    classname: PropTypes.string,
    placeholder: PropTypes.string,
    icon: PropTypes.oneOf(Object.values(InputIconEnum)),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    onInput: PropTypes.func,
    onBlur: PropTypes.func
};

export default Input;