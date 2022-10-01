import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import PropTypes from "prop-types";
import {Form} from "react-bootstrap";
import {Context} from "../../../index";
import carPropTypes from "./resources/carPropTypes";
import ModalWrapper from "../../../components/ModalWrapper/ModalWrapper";

const CarModal = observer(props => {
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
            modalTitle={`Автомобиль`}
        >
            <Form className="mt-3">
                <Form.Group className="mb-3">
                    <Form.Label>Id</Form.Label>
                    <Form.Control value={state.id} disabled/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Рег. Номер</Form.Label>
                    <Form.Control value={state.number} onChange={onInputChange} disabled/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Марка</Form.Label>
                    <Form.Control value={state.mark} disabled/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Модель</Form.Label>
                    <Form.Control value={state.model} disabled/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Дата страхования</Form.Label>
                    <Form.Control value={state.insurance} disabled/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Объём двигателя</Form.Label>
                    <Form.Control value={state.engine} onChange={onInputChange} disabled/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Водитель</Form.Label>
                    <Form.Control id={"owner"} value={state.owner} onChange={onInputChange}/>
                </Form.Group>
            </Form>
        </ModalWrapper>
    );
});

CarModal.propTypes = {
    isShow: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    ...carPropTypes
}

export default CarModal;