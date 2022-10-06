import React from 'react';
import {Form} from "react-bootstrap";
import PropTypes from 'prop-types';
import {observer} from "mobx-react-lite";

const SelectSection = observer(props => {
    const { data, value, title, onSelect, id } = props;

    const getOptionList = React.useCallback(() => {
        const activeElement = data.find(option => `${option.value}` === `${value}`);
        const sortedList = [activeElement, ...data.filter(option => `${option.value}` !== `${value}`)];

        return sortedList.map(element => <option key={element.text} value={element.value}>{element.text}</option>)
    }, [value]);

    return (
        <Form.Group className="mb-3">
            <Form.Label>{title}</Form.Label>
            <Form.Select id={id} onChange={onSelect} aria-label="Default select example">
                {getOptionList()}
            </Form.Select>
        </Form.Group>
    );
});

SelectSection.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.number, text: PropTypes.string })),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    id: PropTypes.string,
    title: PropTypes.string,
    onSelect: PropTypes.func
};

export default SelectSection;