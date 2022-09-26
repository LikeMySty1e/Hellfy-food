import PropTypes from "prop-types";

const protocolPositionPropTypes = {
    data: PropTypes.shape({
        index: PropTypes.number,
        id: PropTypes.number.isRequired,
        description: PropTypes.string,
        protocol: PropTypes.number,
        video: PropTypes.number,
        fine: PropTypes.number
    })
}

export default protocolPositionPropTypes;
