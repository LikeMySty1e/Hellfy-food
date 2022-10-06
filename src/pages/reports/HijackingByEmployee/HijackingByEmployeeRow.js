import React from 'react';
import {observer} from "mobx-react-lite";
import hijackingByEmployeePropTypes from "./resources/hijackingByEmployeePropTypes";
import HijackingByEmployeeModal from "./HijackingByEmployeeModal";

const HijackingByEmployeeRow = observer(props => {
    const { data } = props;
    const [isShow, setIsShow] = React.useState(false)

    return (
        <React.Fragment>
            <tr onDoubleClick={() => setIsShow(true)}>
                <td>{data.index || `error`}</td>
                <td>{data.employee || `error`}</td>
                <td>{data.reportCount || `error`}</td>
            </tr>

            <HijackingByEmployeeModal isShow={isShow} handleClose={() => setIsShow(false)} data={data}/>
        </React.Fragment>
    );
});

HijackingByEmployeeRow.propTypes = {
    ...hijackingByEmployeePropTypes
};

export default HijackingByEmployeeRow;