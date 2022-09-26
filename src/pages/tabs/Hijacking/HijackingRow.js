import React from 'react';
import {observer} from "mobx-react-lite";
import hijackingPropTypes from "./resources/hijackingPropTypes";
import HijackingModal from "./HijackingModal";

const HijackingRow = observer(props => {
    const { data } = props;
    const [isShow, setIsShow] = React.useState(false)

    return (
        <React.Fragment>
            <tr onDoubleClick={() => setIsShow(true)}>
                <td>{data.index || `error`}</td>
                <td>{data.id || `error`}</td>
                <td>{data.incidentDate || `error`}</td>
                <td>{data.relevance.toString()}</td>
                <td>{data.owner || `error`}</td>
                <td>{data.employee || `error`}</td>
                <td>{data.car || `error`}</td>
            </tr>

            <HijackingModal isShow={isShow} handleClose={() => setIsShow(false)} data={data}/>
        </React.Fragment>
    );
});

HijackingRow.propTypes = {
    ...hijackingPropTypes
};

export default HijackingRow;