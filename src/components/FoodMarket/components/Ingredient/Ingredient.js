import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Ingredient = props => {
    const { ingredient } = props;

    const [ name, value ] = React.useMemo(() => ingredient.split(`-`), [ingredient]);

    return <div className="ingredient">
        <div className="ingredient__name">{name}</div>
        <div className="ingredient__value">{value}</div>
        </div>;
};

Ingredient.propTypes = {
    ingredient: PropTypes.string
};

export default Ingredient;