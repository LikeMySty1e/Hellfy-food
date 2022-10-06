import PropTypes from "prop-types";

const protocolByDriverPropTypes = {
    data: PropTypes.shape({
        index: PropTypes.number,
        driver: PropTypes.string,
        protocolCount: PropTypes.number
    })
}

export default protocolByDriverPropTypes;