import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import InputIconEnum from "./enums/InputIconEnum";
import InputTypeEnum from "./enums/InputTypeEnum";
import './style.css';

const passwordDenySpaces = (value, type) => (type === InputTypeEnum.password && value.includes(` `));

const Input = props => {
    const {
        label,
        disabled,
        warning,
        classname,
        placeholder,
        error,
        icon,
        message,
        value,
        onChange,
        onInput,
        type,
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
    };

    const onInputActuallyInput = e => {
        onInput && onInput(query, e);
    };

    const onInputChange = e => {
        if (passwordDenySpaces(e.target.value, type)) {
            return;
        }

        setQuery(e.target.value);
        onChange && onChange(e.target.value, e);
    };

    const getLabel = () => {
        if (!label) {
            return null;
        }

        return <div
            onClick={() => inputRef.current.focus()}
            className={cn("input__label", {
                "input__label--active": isFocused || !!query,
                "input__label--error": (isFocused || !!query) && error,
            })}
        >
            {label}
        </div>;
    };

    return <div className="input__wrapper">
        <input
            type={type}
            ref={inputRef}
            onChange={onInputChange}
            onInput={onInputActuallyInput}
            onFocus={onInputFocus}
            onBlur={onInputBlur}
            disabled={disabled}
            value={query}
            placeholder={placeholder}
            className={getClassnames()}
        />
        {getLabel()}
        <div className={cn("input__message", { "input__message--error": error })}>
            {message}
        </div>
    </div>
};

Input.defaultProps = {
    type: InputTypeEnum.text,
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
    type: PropTypes.oneOf(Object.values(InputTypeEnum)),
    icon: PropTypes.oneOf(Object.values(InputIconEnum)),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    onInput: PropTypes.func,
    onBlur: PropTypes.func
};

export default Input;