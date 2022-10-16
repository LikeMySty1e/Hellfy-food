import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import PropTypes from "prop-types";
import {Form} from "react-bootstrap";
import {Context} from "../../../index";
import ModalWrapper from "../../../components/ModalWrapper/ModalWrapper";
import validationHelper from "../../../helpers/validationHelper";
import {mapVideoToSave} from "../../../helpers/mapper";
import tableTabEnum from "../../../enums/TableTabEnum";
import urls from "../../../resources/urls";

const defaultModel = {
    date: ``,
    time: ``,
    victimCarNumber: ``,
    violatorCarNumber: ``,
}

const VideoAddModal = observer(props => {
    const {main} = useContext(Context);
    const {isShow, handleClose} = props;
    const [state, setState] = React.useState({...defaultModel});

    React.useEffect(() => {
        setState({...defaultModel});
    }, [isShow]);

    const onInputChange = (e) => setState({ ...state, [e.target.id]: e.target.value });

    const onAddRow = () => main.addRow(`add_video_data`, mapVideoToSave(state), urls.getVideo);

    return (
        <ModalWrapper
            isShow={isShow}
            handleClose={handleClose}
            addButtonText={`Сохранить`}
            onAdd={onAddRow}
            addButtonDisabled={!validationHelper.validateState(state)}
            modalTitle={`Добавить новую запись`}
        >
            <Form className="mt-3">
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

VideoAddModal.propTypes = {
    isShow: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired
}

export default VideoAddModal;