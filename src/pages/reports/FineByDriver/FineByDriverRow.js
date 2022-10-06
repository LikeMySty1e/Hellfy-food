import React from 'react';
import {observer} from "mobx-react-lite";
import fineByDriverPropTypes from "./resources/fineByDriverPropTypes";
import FineByDriverModal from "./FineByDriverModal";

const FineByDriverRow = observer(props => {
    const { data } = props;
    const [isShow, setIsShow] = React.useState(false)

    return (
        <React.Fragment>
            <tr onDoubleClick={() => setIsShow(true)}>
                <td>{data.index || `error`}</td>
                <td>{data.driver || `error`}</td>
                <td>{data.fineCount || `error`}</td>
                <td>{data.fineSum || `error`}</td>
            </tr>

            <FineByDriverModal isShow={isShow} handleClose={() => setIsShow(false)} data={data}/>
        </React.Fragment>
    );
});

FineByDriverRow.propTypes = {
    ...fineByDriverPropTypes
};

export default FineByDriverRow;