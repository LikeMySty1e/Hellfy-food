import React from 'react';
import {observer} from "mobx-react-lite";
import protocolPositionPropTypes from "./resources/protocolPositionPropTypes";
import ProtocolPositionModal from "./ProtocolPositionModal";

const ProtocolPositionRow = observer(props => {
    const { data } = props;
    const [isShow, setIsShow] = React.useState(false)

    return (
        <React.Fragment>
            <tr onDoubleClick={() => setIsShow(true)}>
                <td>{data.index || `error`}</td>
                <td>{data.id || `error`}</td>
                <td>{data.description || `error`}</td>
                <td>{data.protocol || `error`}</td>
                <td>{data.video || `error`}</td>
                <td>{data.fine || `error`}</td>
            </tr>

            <ProtocolPositionModal isShow={isShow} handleClose={() => setIsShow(false)} data={data}/>
        </React.Fragment>
    );
});

ProtocolPositionRow.propTypes = {
    ...protocolPositionPropTypes
};

export default ProtocolPositionRow;