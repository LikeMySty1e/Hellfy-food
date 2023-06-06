import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import InputIconEnum from "./enums/InputIconEnum";
import InputTypeEnum from "./enums/InputTypeEnum";
import {validateInput} from "./helpers/validateHelper";
import SvgIcon from "../SvgIcon/SvgIcon";
import './style.css';

const Input = props => {
    const {
        label,
        icons,
        maxLength,
        disabled,
        warning,
        classname,
        style,
        placeholder,
        error,
        message,
        value,
        onChange,
        onFocus,
        onInput,
        onBlur,
        type
    } = props;
    const [query, setQuery] = React.useState(value ? `${value}` : ``);
    const [isFocused, setIsFocused] = React.useState(false);
    const inputRef = React.useRef(null);

    const hasRightIcon = React.useMemo(() => !!icons.some(icon => icon.side === InputIconEnum.right), [icons]);
    const hasLeftIcon = React.useMemo(() => !!icons.some(icon => icon.side === InputIconEnum.left), [icons]);

    React.useEffect(() => setQuery(value), [value]);

    const getClassnames = () => {
        return cn(
            "input", "input__native", classname,
            { ["input__warning"]: warning },
            { ["input__error"]: error },
            {
                ["input--rightIcon"]: hasRightIcon,
                ["input--leftIcon"]: hasLeftIcon
            }
        )
    };

    const onInputFocus = () => {
        setIsFocused(true);

        onFocus && onFocus();
    };

    const onInputBlur = e => {
        setIsFocused(false);

        onBlur && onBlur(e.target.value, e);
    };

    const onInputActuallyInput = e => {
        onInput && onInput(e.target.value, e);
    };

    const onInputChange = e => {
        if (!validateInput(e.target.value, type, maxLength)) {
            return;
        }

        setQuery(e.target.value);
        onChange && onChange(e.target.value, e);
    };

    const renderRightIcon = () => {
        const iconData = icons.find(icon => icon.side === InputIconEnum.left);

        if (!iconData) {
            return null;
        }

        return <SvgIcon
            classname={cn(
                "icon",
                "left__icon",
                iconData.classname,
                {
                    "icon--active": isFocused || !!query,
                    "icon--error": error
                }
            )}
            Icon={iconData.Icon}
        />;
    }

    const renderLeftIcon = () => {
        const iconData = icons.find(icon => icon.side === InputIconEnum.right);

        if (!iconData) {
            return null;
        }

        return <SvgIcon
            classname={cn(
                "icon",
                "right__icon",
                iconData.classname,
                {
                    "icon--active": isFocused || !!query,
                    "icon--error": error
                }
            )}
            Icon={iconData.Icon}
        />;
    }

    const getLabel = () => {
        if (!label) {
            return null;
        }

        return <div
            onClick={() => inputRef.current.focus()}
            className={cn("input__label", {
                "input__label--leftIcon": hasLeftIcon,
                "input__label--active": isFocused || !!query,
                "input__label--error": (isFocused || !!query) && error,
            })}
        >
            {label}
        </div>;
    };

    return <div className="input__wrapper" style={style}>
        <div className="input__container">
            {renderLeftIcon()}
            <input
                type={type}
                ref={inputRef}
                onChange={onInputChange}
                onInput={onInputActuallyInput}
                onFocus={onInputFocus}
                onBlur={onInputBlur}
                disabled={disabled}
                value={query || ``}
                placeholder={placeholder}
                className={getClassnames()}
            />
            {renderRightIcon()}
        </div>
        {getLabel()}
        <div className={cn("input__message", { "input__message--error": error })}>
            {message}
        </div>
    </div>
};

Input.defaultProps = {
    icons: [],
    type: InputTypeEnum.text,
    value: ``,
    placeholder: ``,
    title: ``,
    warming: false,
    error: false,
    disabled: false
};

Input.propTypes = {
    icons: PropTypes.arrayOf(PropTypes.shape({})),
    maxLength: PropTypes.number,
    label: PropTypes.string,
    disabled: PropTypes.bool,
    message: PropTypes.string,
    warning: PropTypes.bool,
    error: PropTypes.bool,
    classname: PropTypes.string,
    style: PropTypes.shape({}),
    placeholder: PropTypes.string,
    type: PropTypes.oneOf(Object.values(InputTypeEnum)),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, null]),
    onChange: PropTypes.func,
    onInput: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func
};

export default Input;