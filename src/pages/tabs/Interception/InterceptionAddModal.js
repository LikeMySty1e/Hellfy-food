import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import PropTypes from "prop-types";
import {Form} from "react-bootstrap";
import {Context} from "../../../index";
import ModalWrapper from "../../../components/ModalWrapper/ModalWrapper";
import validationHelper from "../../../helpers/validationHelper";
import {mapInterceptionToSave} from "../../../helpers/mapper";
import urls from "../../../resources/urls";

const defaultModel = {
    begin: ``,
    end: ``,
    status: false,
    hijacker: ``,
    claim: ``,
    video: ``
}

const InterceptionAddModal = observer(props => {
    const {main} = useContext(Context);
    const {isShow, handleClose} = props;
    const [state, setState] = React.useState({...defaultModel});

    React.useEffect(() => {
        setState({...defaultModel});
    }, [isShow]);

    const onInputChange = (e) => setState({ ...state, [e.target.id]: e.target.value });
    const onCheckboxChange = (e) => setState({ ...state, [e.target.id]: !state[e.target.id] });

    const onAddRow = () => main.addRow(`add_interception_plan`, mapInterceptionToSave(state), urls.getInterception);

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
                    <Form.Label>Дата начала</Form.Label>
                    <Form.Control id={"begin"} value={state.begin} onChange={onInputChange}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Дата окончания</Form.Label>
                    <Form.Control id={"end"} value={state.end} onChange={onInputChange}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Check label={`Статус`} type={'checkbox'} id={"status"} checked={state.status} onChange={onCheckboxChange}/>
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

InterceptionAddModal.propTypes = {
    isShow: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired
}

export default InterceptionAddModal;