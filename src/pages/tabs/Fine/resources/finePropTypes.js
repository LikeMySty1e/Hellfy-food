import PropTypes from "prop-types";

const finePropTypes = {
    data: PropTypes.shape({
        index: PropTypes.number,
        id: PropTypes.number.isRequired,
        payment: PropTypes.number,
        status: PropTypes.bool
    })
}

export default finePropTypes;
