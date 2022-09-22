import React from 'react';
import {observer} from "mobx-react-lite";
import driverPropTypes from "./resources/driverPropTypes";
import DriverModal from "./DriverModal";

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
                <td>{data.license || `error`}</td>
                <td>{data.criminal.toString()}</td>
            </tr>

            <DriverModal isShow={isShow} handleClose={() => setIsShow(false)} data={data}/>
        </React.Fragment>
    );
});

DriverRow.propTypes = {
    ...driverPropTypes
};

export default DriverRow;