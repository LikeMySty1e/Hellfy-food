import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import PropTypes from "prop-types";
import {Form} from "react-bootstrap";
import {Context} from "../../../index";
import interceptionPropTypes from "./resources/interceptionPropTypes";
import ModalWrapper from "../../../components/ModalWrapper/ModalWrapper";

const InterceptionModal = observer(props => {
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
            modalTitle={`План-перехват`}
        >
            <Form className="mt-3">
                <Form.Group className="mb-3">
                    <Form.Label>Id</Form.Label>
                    <Form.Control value={state.id} disabled/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Дата начала</Form.Label>
                    <Form.Control id={"begin"} value={state.begin} onChange={onInputChange}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Дата окончания</Form.Label>
                    <Form.Control id={"end"} value={state.end} onChange={onInputChange}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Check label={`Статус`} type={'checkbox'} id={"status"} checked={state.status} onChange={onInputChange}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Угонщик</Form.Label>
                    <Form.Control id={"hijacker"} value={state.hijacker} onChange={onInputChange}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Заявление об угоне</Form.Label>
                    <Form.Control id={"claim"} value={state.claim} onChange={onInputChange}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Данные видеофиксации</Form.Label>
                    <Form.Control id={"video"} value={state.video} onChange={onInputChange}/>
                </Form.Group>
            </Form>
        </ModalWrapper>
    );
});

InterceptionModal.propTypes = {
    isShow: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    ...interceptionPropTypes
}

export default InterceptionModal;