import React from 'react';
import cn from "classnames";
import PropTypes from "prop-types";
import './style.m.scss';

const Container = ({ children, isFlex = false, style = {} }) => {
    return <div className={cn(`container`, { "container-flex": isFlex })} style={style}>
        {children}
    </div>;
};

Container.propTypes = {
    style: PropTypes.shape({}),
    isFlex: PropTypes.bool
}

export default Container;