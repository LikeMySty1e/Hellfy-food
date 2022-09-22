import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import PropTypes from "prop-types";
import {Form} from "react-bootstrap";
import {Context} from "../../../index";
import employeePropTypes from "./resources/employeePropTypes";
import ModalWrapper from "../../../components/ModalWrapper/ModalWrapper";

const EmployeeModal = observer(props => {
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
            modalTitle={`Сотрудник`}
        >
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Id</Form.Label>
                    <Form.Control value={state.id} disabled/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>ФИО</Form.Label>
                    <Form.Control id={"fullname"} value={state.fullname} onChange={onInputChange}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Дата рождения</Form.Label>
                    <Form.Control id={"birthday"} value={state.birthday} onChange={onInputChange}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Контракт</Form.Label>
                    <Form.Control id={"contract"} value={state.contract} onChange={onInputChange}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Номер телефона</Form.Label>
                    <Form.Control id={"phone"} value={state.phone} onChange={onInputChange}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Должность</Form.Label>
                    <Form.Control id={"position"} value={state.position} onChange={onInputChange}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Звание</Form.Label>
                    <Form.Control id={"rank"} value={state.rank} onChange={onInputChange}/>
                </Form.Group>
            </Form>
        </ModalWrapper>
    );
});

EmployeeModal.propTypes = {
    isShow: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    ...employeePropTypes
}

export default EmployeeModal;