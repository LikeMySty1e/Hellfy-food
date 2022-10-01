import React from 'react';
import {observer} from "mobx-react-lite";
import finePropTypes from "./resources/finePropTypes";
import FineModal from "./FineModal";

const FineRow = observer(props => {
    const { data } = props;
    const [isShow, setIsShow] = React.useState(false)

    return (
        <React.Fragment>
            <tr onDoubleClick={() => setIsShow(true)}>
                <td>{data.index || `error`}</td>
                <td>{data.id || `error`}</td>
                <td>{data.payment || `error`}</td>
                <td>{data.status.toString()}</td>
            </tr>

            <FineModal isShow={isShow} handleClose={() => setIsShow(false)} data={data}/>
        </React.Fragment>
    );
});

FineRow.propTypes = {
    ...finePropTypes
};

export default FineRow;