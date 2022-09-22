import PropTypes from "prop-types";

const driverPropTypes = {
    data: PropTypes.shape({
        index: PropTypes.number,
        id: PropTypes.number.isRequired,
        fullname: PropTypes.string,
        birthday: PropTypes.string,
        license: PropTypes.string,
        criminal: PropTypes.bool
    })
}

export default driverPropTypes;
