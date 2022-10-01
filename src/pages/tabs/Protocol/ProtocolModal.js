import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import PropTypes from "prop-types";
import {Form} from "react-bootstrap";
import {Context} from "../../../index";
import protocolPropTypes from "./resources/protocolPropTypes";
import ModalWrapper from "../../../components/ModalWrapper/ModalWrapper";
import ComplexInputSection from "../../../components/ComplexInputSection/ComplexInputSection";

const ProtocolModal = observer(props => {
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
            modalTitle={`Протокол`}
        >
            <Form className="mt-3">
                <Form.Group className="mb-3">
                    <Form.Label>Id</Form.Label>
                    <Form.Control value={state.id} disabled/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Дата регистрации</Form.Label>
                    <Form.Control id={"registration"} value={state.registration} onChange={onInputChange}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Check label={`Статус`} type={'checkbox'} id={"status"} checked={state.status} onChange={onInputChange}/>
                </Form.Group>
                <ComplexInputSection
                    onChange={onInputChange}
                    defaultTitle={`Нарушитель`}
                    id={`violator`}
                    firstTitle={`Id`}
                    secondTitle={`Имя`}
                    value={state.violator}
                />
                <ComplexInputSection
                    onChange={onInputChange}
                    defaultTitle={`Потерпевший`}
                    id={`victim`}
                    firstTitle={`Id`}
                    secondTitle={`Имя`}
                    value={state.victim}
                />
            </Form>
        </ModalWrapper>
    );
});

ProtocolModal.propTypes = {
    isShow: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    ...protocolPropTypes
}

export default ProtocolModal;