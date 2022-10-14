import PropTypes from "prop-types";

const hijackingPropTypes = {
    data: PropTypes.shape({
        index: PropTypes.number,
        id: PropTypes.number.isRequired,
        incidentDate: PropTypes.string,
        relevance: PropTypes.bool,
        owner: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        employee: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        car: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    })
}

export default hijackingPropTypes;
