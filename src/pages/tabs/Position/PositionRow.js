import React from 'react';
import {observer} from "mobx-react-lite";
import positionPropTypes from "./resources/positionPropTypes";
import PositionModal from "./PositionModal";

const PositionRow = observer(props => {
    const { data } = props;
    const [isShow, setIsShow] = React.useState(false)

    return (
        <React.Fragment>
            <tr onDoubleClick={() => setIsShow(true)}>
                <td>{data.index || `error`}</td>
                <td>{data.id || `error`}</td>
                <td>{data.name || `error`}</td>
                <td>{data.description || `error`}</td>
                <td>{data.salary || `error`}</td>
            </tr>

            <PositionModal isShow={isShow} handleClose={() => setIsShow(false)} data={data}/>
        </React.Fragment>
    );
});

PositionRow.propTypes = {
    ...positionPropTypes
};

export default PositionRow;