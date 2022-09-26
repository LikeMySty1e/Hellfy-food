import PropTypes from "prop-types";

const interceptionPropTypes = {
    data: PropTypes.shape({
        index: PropTypes.number,
        id: PropTypes.number.isRequired,
        begin: PropTypes.string,
        end: PropTypes.string,
        status: PropTypes.bool,
        hijacker: PropTypes.string,
        claim: PropTypes.number,
        video: PropTypes.number
    })
}

export default interceptionPropTypes;
