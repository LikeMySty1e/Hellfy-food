import React from 'react';
import {observer} from "mobx-react-lite";
import protocolPropTypes from "./resources/protocolPropTypes";
import ProtocolModal from "./ProtocolModal";

const ProtocolRow = observer(props => {
    const { data } = props;
    const [isShow, setIsShow] = React.useState(false)

    return (
        <React.Fragment>
            <tr onDoubleClick={() => setIsShow(true)}>
                <td>{data.index || `error`}</td>
                <td>{data.id || `error`}</td>
                <td>{data.registration || `error`}</td>
                <td>{data.status.toString()}</td>
                <td>{data.violator || `error`}</td>
                <td>{data.victim || `error`}</td>
            </tr>

            <ProtocolModal isShow={isShow} handleClose={() => setIsShow(false)} data={data}/>
        </React.Fragment>
    );
});

ProtocolRow.propTypes = {
    ...protocolPropTypes
};

export default ProtocolRow;