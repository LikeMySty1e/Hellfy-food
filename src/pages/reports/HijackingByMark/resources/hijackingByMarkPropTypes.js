import PropTypes from "prop-types";

const hijackingByMarkPropTypes = {
    data: PropTypes.shape({
        index: PropTypes.number,
        mark: PropTypes.string,
        reportCount: PropTypes.number
    })
}

export default hijackingByMarkPropTypes;
