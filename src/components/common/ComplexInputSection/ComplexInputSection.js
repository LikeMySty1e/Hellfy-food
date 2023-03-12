import React from 'react';
import PropTypes from 'prop-types';
import {Form} from "react-bootstrap";

const ComplexInputSection = props => {
    const [title, setTitle] = React.useState(``);

    const getTitle = value => {
        if (!value) {
            setTitle(``)
            return null;
        }

        const valueToInt = Number.parseInt(value)

        if (!Number.isNaN(valueToInt)) {
            setTitle(` — ` + props.firstTitle)
            return null;
        }

        setTitle(` — ` + props.secondTitle)
    }

    React.useEffect(() => {
        getTitle(props.value);
    }, [props.value])

    return (
        <Form.Group className="mb-3">
            <Form.Label>{props.defaultTitle + title}</Form.Label>
            <Form.Control
                title={title}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
            />
        </Form.Group>
    );
};

ComplexInputSection.propTypes = {
    defaultTitle: PropTypes.string,
    firstTitle: PropTypes.string,
    secondTitle: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    id: PropTypes.string,
    onChange: PropTypes.func
};

export default ComplexInputSection;