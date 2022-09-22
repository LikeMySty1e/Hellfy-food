import React from 'react';
import {observer} from "mobx-react-lite";
import employeePropTypes from "./resources/employeePropTypes";
import EmployeeModal from "./EmployeeModal";

const DriverRow = observer(props => {
    const { data } = props;
    const [isShow, setIsShow] = React.useState(false)

    return (
        <React.Fragment>
            <tr onDoubleClick={() => setIsShow(true)}>
                <td>{data.index || `error`}</td>
                <td>{data.id || `error`}</td>
                <td>{data.fullname || `error`}</td>
                <td>{data.birthday || `error`}</td>
                <td>{data.contract || `error`}</td>
                <td>{data.phone || `error`}</td>
                <td>{data.position || `error`}</td>
                <td>{data.rank || `error`}</td>
            </tr>

            <EmployeeModal isShow={isShow} handleClose={() => setIsShow(false)} data={data}/>
        </React.Fragment>
    );
});

DriverRow.propTypes = {
    ...employeePropTypes
};

export default DriverRow;