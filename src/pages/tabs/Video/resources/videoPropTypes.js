import PropTypes from "prop-types";

const videoPropTypes = {
    data: PropTypes.shape({
        index: PropTypes.number,
        id: PropTypes.number.isRequired,
        date: PropTypes.string,
        time: PropTypes.string,
        victimCarNumber: PropTypes.string,
        violatorCarNumber: PropTypes.string,
    })
}

export default videoPropTypes;
