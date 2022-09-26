import React from 'react';
import {observer} from "mobx-react-lite";
import interceptionPropTypes from "./resources/interceptionPropTypes";
import InterceptionModal from "./InterceptionModal";

const HijackingRow = observer(props => {
    const { data } = props;
    const [isShow, setIsShow] = React.useState(false)

    return (
        <React.Fragment>
            <tr onDoubleClick={() => setIsShow(true)}>
                <td>{data.index || `error`}</td>
                <td>{data.id || `error`}</td>
                <td>{data.begin || `error`}</td>
                <td>{data.end || `error`}</td>
                <td>{data.status.toString()}</td>
                <td>{data.hijacker || `error`}</td>
                <td>{data.claim || `error`}</td>
                <td>{data.video || `error`}</td>
            </tr>

            <InterceptionModal isShow={isShow} handleClose={() => setIsShow(false)} data={data}/>
        </React.Fragment>
    );
});

HijackingRow.propTypes = {
    ...interceptionPropTypes
};

export default HijackingRow;