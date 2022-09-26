import PropTypes from "prop-types";

const protocolPropTypes = {
    data: PropTypes.shape({
        index: PropTypes.number,
        id: PropTypes.number.isRequired,
        registration: PropTypes.string,
        status: PropTypes.bool,
        violator: PropTypes.number,
        victim: PropTypes.number
    })
}

export default protocolPropTypes;
