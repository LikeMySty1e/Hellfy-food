import PropTypes from "prop-types";

const hijackingPropTypes = {
    data: PropTypes.shape({
        index: PropTypes.number,
        id: PropTypes.number.isRequired,
        incidentDate: PropTypes.string,
        relevance: PropTypes.bool,
        owner: PropTypes.number,
        employee: PropTypes.number,
        car: PropTypes.number
    })
}

export default hijackingPropTypes;
