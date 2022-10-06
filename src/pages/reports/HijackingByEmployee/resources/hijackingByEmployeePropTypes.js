import PropTypes from "prop-types";

const hijackingByEmployeePropTypes = {
    data: PropTypes.shape({
        index: PropTypes.number,
        employee: PropTypes.string,
        reportCount: PropTypes.number
    })
}

export default hijackingByEmployeePropTypes;