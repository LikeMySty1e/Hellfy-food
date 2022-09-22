import React from 'react';
import {observer} from "mobx-react-lite";
import videoPropTypes from "./resources/videoPropTypes";
import VideoModal from "./VideoModal";

const VideoRow = observer(props => {
    const { data } = props;
    const [isShow, setIsShow] = React.useState(false)

    return (
        <React.Fragment>
            <tr onDoubleClick={() => setIsShow(true)}>
                <td>{data.index || `error`}</td>
                <td>{data.id || `error`}</td>
                <td>{data.date || `error`}</td>
                <td>{data.time || `error`}</td>
                <td>{data.victimCarNumber || `error`}</td>
                <td>{data.violatorCarNumber || `error`}</td>
            </tr>

            <VideoModal isShow={isShow} handleClose={() => setIsShow(false)} data={data}/>
        </React.Fragment>
    );
});

VideoRow.propTypes = {
    ...videoPropTypes
};

export default VideoRow;