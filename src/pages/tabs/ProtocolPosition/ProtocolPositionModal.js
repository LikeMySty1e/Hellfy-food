import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import PropTypes from "prop-types";
import {Form} from "react-bootstrap";
import {Context} from "../../../index";
import protocolPositionPropTypes from "./resources/protocolPositionPropTypes";
import ModalWrapper from "../../../components/ModalWrapper/ModalWrapper";

const HijackingModal = observer(props => {
    const {main} = useContext(Context);
    const {isShow, handleClose, data} = props;
    const [state, setState] = React.useState({...data, changed: false});

    React.useEffect(() => {
        setState({...data, changed: false});
    }, [isShow]);

    const onInputChange = (e) => setState({ ...state, [e.target.id]: e.target.value, changed: true });

    const onRowDelete = () => main.deleteRow({ id: state.id, property: `protocol_pos_id`}, `delete_protocol_position/${state.id}`);

    return (
        <ModalWrapper
            isShow={isShow}
            handleClose={handleClose}
            deleteButtonText={`Удалить`}
            onDelete={onRowDelete}
            editButtonText={`Редактировать`}
            editButtonDisabled={!state.changed}
            modalTitle={`Позиция протокола`}
        >
            <Form className="mt-3">
                <Form.Group className="mb-3">
                    <Form.Label>Id</Form.Label>
                    <Form.Control value={state.id} disabled/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Описание</Form.Label>
                    <Form.Control id={"description"} value={state.description} onChange={onInputChange}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Протокол</Form.Label>
                    <Form.Control id={"protocol"} value={state.protocol} onChange={onInputChange}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Данные видеофиксации</Form.Label>
                    <Form.Control id={"video"} value={state.video} onChange={onInputChange}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Штраф</Form.Label>
                    <Form.Control id={"fine"} value={state.fine} onChange={onInputChange}/>
                </Form.Group>
            </Form>
        </ModalWrapper>
    );
});

HijackingModal.propTypes = {
    isShow: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    ...protocolPositionPropTypes
}

export default HijackingModal;