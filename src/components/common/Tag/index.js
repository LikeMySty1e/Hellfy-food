import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Tag = props => {
    const { text, value, onClick } = props;

    return <div
        role="button"
        className="tag"
        onClick={() => onClick(value)}
    >
        {text}
    </div>;
};

Tag.propTypes = {
    text: PropTypes.string,
    value: PropTypes.number,
    onClick: PropTypes.func
};

export default Tag;