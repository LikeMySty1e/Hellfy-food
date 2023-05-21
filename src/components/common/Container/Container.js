import React from 'react';
import cn from "classnames";
import PropTypes from "prop-types";
import './style.css';

const Container = ({ children, isFlex = false }) => {
    return <div className={cn(`container`, { "container-flex": isFlex })}>
        {children}
    </div>;
};

Container.propTypes = {
    isFlex: PropTypes.bool
}

export default Container;