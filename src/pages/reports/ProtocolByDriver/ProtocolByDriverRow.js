import React from 'react';
import {observer} from "mobx-react-lite";
import protocolByDriverPropTypes from "./resources/protocolByDriverPropTypes";
import ProtocolByDriverModal from "./ProtocolByDriverModal";

const ProtocolByDriverRow = observer(props => {
    const { data } = props;
    const [isShow, setIsShow] = React.useState(false)

    return (
        <React.Fragment>
            <tr onDoubleClick={() => setIsShow(true)}>
                <td>{data.index || `error`}</td>
                <td>{data.driver || `error`}</td>
                <td>{data.protocolCount || `error`}</td>
            </tr>

            <ProtocolByDriverModal isShow={isShow} handleClose={() => setIsShow(false)} data={data}/>
        </React.Fragment>
    );
});

ProtocolByDriverRow.propTypes = {
    ...protocolByDriverPropTypes
};

export default ProtocolByDriverRow;