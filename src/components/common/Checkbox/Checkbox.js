import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import './style.css';

const id = `checkbox__${generateUniqueID()}`;

const Checkbox = props => {
    const {
        value,
        onChange,
        classname
    } = props;
    const [checked, setChecked] = React.useState(value);

    const getClassName = () => {
        const { loading, disabled } = props;

        return cn(`checkboxWrapper`, {
            'checkboxWrapper--checked': checked,
            'checkboxWrapper--disabled': disabled,
            'checkboxWrapper--loading': loading
        });
    };

    const onCheck = () => {
        setChecked(!checked);
        onChange && onChange(!checked);
    };

    return <div className={classname}>
        <label
            htmlFor={id}
            className={getClassName()}
            onClick={e => e.stopPropagation()}
        >
        <span
            className="checkbox"
            role="presentation"
        />
            <input
                id={id}
                type="checkbox"
                className="checkbox__native"
                checked={checked}
                // disabled={this.isDisabledNative()}
                onChange={onCheck}
                // onFocus={this.onFocus}
                // onBlur={this.onBlur}
            />
            <span className="checkbox__label">
                {props.children || props.text}
            </span>
        </label>
    </div>
};

Checkbox.propTypes = {
    value: PropTypes.bool,
    text: PropTypes.string,
    classname: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

export default Checkbox;