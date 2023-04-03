import React from 'react';
import PropTypes from 'prop-types';
import '../../style.css';

const ListItem = props => {
    const { text, value, onSelect } = props;

    return <div
        key={`${text}_${value}`}
        className="autocomplete__item"
        onClick={() => onSelect(value)}
    >
        {text}
    </div>;
};

ListItem.propTypes = {
    text: PropTypes.string,
    value: PropTypes.number,
    onSelect: PropTypes.func
};

export default ListItem;