import PropTypes from "prop-types";

const positionPropTypes = {
    data: PropTypes.shape({
        index: PropTypes.number,
        id: PropTypes.number.isRequired,
        name: PropTypes.string,
        description: PropTypes.string,
        salary: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    })
}

export default positionPropTypes;
