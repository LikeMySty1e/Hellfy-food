import PropTypes from "prop-types";

const carPropTypes = {
    data: PropTypes.shape({
        index: PropTypes.number,
        id: PropTypes.number.isRequired,
        number: PropTypes.string,
        insurance: PropTypes.string,
        engine: PropTypes.number,
        owner: PropTypes.number,
        mark: PropTypes.string,
        model: PropTypes.string
    })
}

export default carPropTypes;