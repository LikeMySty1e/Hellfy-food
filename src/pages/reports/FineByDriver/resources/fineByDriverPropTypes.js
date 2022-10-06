import PropTypes from "prop-types";

const fineByDriverPropTypes = {
    data: PropTypes.shape({
        index: PropTypes.number,
        driver: PropTypes.string,
        fineCount: PropTypes.number,
        fineSum: PropTypes.string
    })
}

export default fineByDriverPropTypes;