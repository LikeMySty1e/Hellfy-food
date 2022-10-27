import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import PropTypes from "prop-types";
import {Form} from "react-bootstrap";
import {Context} from "../../../index";
import videoPropTypes from "./resources/videoPropTypes";
import ModalWrapper from "../../../components/ModalWrapper/ModalWrapper";
import {mapVideoToSave} from "../../../helpers/mapper";
import urls from "../../../resources/urls";

const VideoModal = observer(props => {
    const {main} = useContext(Context);
    const {isShow, handleClose, data} = props;
    const [state, setState] = React.useState({...data, changed: false});

    React.useEffect(() => {
        setState({...data, changed: false});
    }, [isShow]);

    const onInputChange = (e) => setState({ ...state, [e.target.id]: e.target.value, changed: true });

    const onRowDelete = () => main.deleteRow({ id: state.id, property: `video_id`}, `delete_video_data/${state.id}`);
    const onRowEdit = () => main.updateRow(`update_video_data`, { ...mapVideoToSave(state), video_id: state.id }, urls.getVideo);

    return (
        <ModalWrapper
            isShow={isShow}
            handleClose={handleClose}
            deleteButtonText={`Удалить`}
            onDelete={onRowDelete}
            editButtonText={`Редактировать`}
            onEdit={onRowEdit}
            editButtonDisabled={!state.changed}
            modalTitle={`Видеофиксация`}
        >
            <Form className="mt-3">
                <Form.Group className="mb-3">
                    <Form.Label>Id</Form.Label>
                    <Form.Control value={state.id} disabled/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Дата</Form.Label>
                    <Form.Control id={"date"} value={state.date} onChange={onInputChange}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Время</Form.Label>
                    <Form.Control id={"time"} value={state.time} onChange={onInputChange}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Номер машины потерпевшего</Form.Label>
                    <Form.Control id={"victimCarNumber"} value={state.victimCarNumber} onChange={onInputChange}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Номер машины виновника</Form.Label>
                    <Form.Control id={"violatorCarNumber"} value={state.violatorCarNumber} onChange={onInputChange}/>
                </Form.Group>
            </Form>
        </ModalWrapper>
    );
});

VideoModal.propTypes = {
    isShow: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    ...videoPropTypes
}

export default VideoModal;