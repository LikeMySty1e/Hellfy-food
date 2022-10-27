import React from 'react';
import {observer} from "mobx-react-lite";
import carPropTypes from "./resources/carPropTypes";
import CarModal from "./CarModal";

const CarRow = observer(props => {
    const { data } = props;
    const [isShow, setIsShow] = React.useState(false)

    return (
        <React.Fragment>
            <tr>
                <td>{data.index || `error`}</td>
                <td>{data.id || `error`}</td>
                <td>{data.number || `error`}</td>
                <td>{data.mark || `error`}</td>
                <td>{data.model || `error`}</td>
                <td>{data.insurance || `error`}</td>
                <td>{data.engine || `error`}</td>
                <td>{data.owner || `error`}</td>
            </tr>

            <CarModal isShow={isShow} handleClose={() => setIsShow(false)} data={data}/>
        </React.Fragment>
    );
});

CarRow.propTypes = {
    ...carPropTypes
};

export default CarRow;