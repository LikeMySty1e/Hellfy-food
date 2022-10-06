import React from 'react';
import {observer} from "mobx-react-lite";
import hijackingByMarkPropTypes from "./resources/hijackingByMarkPropTypes";
import HijackingByMarkModal from "./HijackingByMarkModal";

const HijackingByMarkRow = observer(props => {
    const { data } = props;
    const [isShow, setIsShow] = React.useState(false)

    return (
        <React.Fragment>
            <tr onDoubleClick={() => setIsShow(true)}>
                <td>{data.index || `error`}</td>
                <td>{data.mark || `error`}</td>
                <td>{data.reportCount || `error`}</td>
            </tr>

            <HijackingByMarkModal isShow={isShow} handleClose={() => setIsShow(false)} data={data}/>
        </React.Fragment>
    );
});

HijackingByMarkRow.propTypes = {
    ...hijackingByMarkPropTypes
};

export default HijackingByMarkRow;