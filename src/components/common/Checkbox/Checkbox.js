import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { getUniqueId } from "../../../helpers/uniqueIdHelper";
import './style.css';

const Checkbox = props => {
    const {
        value,
        onChange,
        classname
    } = props;
    const [checked, setChecked] = React.useState(value);
    const id = React.useMemo(() => `checkbox__${getUniqueId()}`, []);

    React.useEffect(() => setChecked(value), [value]);

    const getClassName = () => {
        const { loading, disabled } = props;

        return cn(`checkboxWrapper`, {
            'checkboxWrapper--checked': checked,
            'checkboxWrapper--disabled': disabled,
            'checkboxWrapper--loading': loading
        });
    };

    const onCheck = e => {
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
                onChange={onCheck}
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