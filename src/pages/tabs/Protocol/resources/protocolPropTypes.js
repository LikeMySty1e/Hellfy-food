import PropTypes from "prop-types";

const protocolPropTypes = {
    data: PropTypes.shape({
        index: PropTypes.number,
        id: PropTypes.number.isRequired,
        registration: PropTypes.string,
        status: PropTypes.bool,
        violator: PropTypes.string,
        victim: PropTypes.string
    })
}

export default protocolPropTypes;
