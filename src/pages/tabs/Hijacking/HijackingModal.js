import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import PropTypes from "prop-types";
import {Form} from "react-bootstrap";
import {Context} from "../../../index";
import hijackingPropTypes from "./resources/hijackingPropTypes";
import ModalWrapper from "../../../components/ModalWrapper/ModalWrapper";

const HijackingModal = observer(props => {
    const {main} = useContext(Context);
    const {isShow, handleClose, data} = props;
    const [state, setState] = React.useState({...data, changed: false});

    React.useEffect(() => {
        setState({...data, changed: false});
    }, [isShow]);

    const onInputChange = (e) => setState({ ...state, [e.target.id]: e.target.value, changed: true });

    return (
        <ModalWrapper
            isShow={isShow}
            handleClose={handleClose}
            deleteButtonText={`Удалить`}
            editButtonText={`Редактировать`}
            editButtonDisabled={!state.changed}
            modalTitle={`Заявление об угоне`}
        >
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Id</Form.Label>
                    <Form.Control value={state.id} disabled/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Дата проишествия</Form.Label>
                    <Form.Control id={"incidentDate"} value={state.incidentDate} onChange={onInputChange}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Check label={`Актуальность`} type={'checkbox'} id={"relevance"} checked={state.relevance} onChange={onInputChange}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Водитель</Form.Label>
                    <Form.Control id={"owner"} value={state.owner} onChange={onInputChange}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Сотрудник</Form.Label>
                    <Form.Control id={"employee"} value={state.employee} onChange={onInputChange}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Автомобиль</Form.Label>
                    <Form.Control id={"car"} value={state.car} onChange={onInputChange}/>
                </Form.Group>
            </Form>
        </ModalWrapper>
    );
});

HijackingModal.propTypes = {
    isShow: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    ...hijackingPropTypes
}

export default HijackingModal;