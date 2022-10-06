import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import PropTypes from "prop-types";
import {Form} from "react-bootstrap";
import {Context} from "../../../index";
import ModalWrapper from "../../../components/ModalWrapper/ModalWrapper";
import validationHelper from "../../../helpers/validationHelper";
import ComplexInputSection from "../../../components/ComplexInputSection/ComplexInputSection";
import SelectSection from "../../../components/SelectSection/SelectSection";
import employeeRankResource from "../../../resources/employeeRankResource";

const defaultModel = {
    description: ``,
    protocol: ``,
    video: ``,
    fine: ``
}

const ProtocolPositionAddModal = observer(props => {
    const {main} = useContext(Context);
    const {isShow, handleClose} = props;
    const [state, setState] = React.useState({...defaultModel});

    React.useEffect(() => {
        setState({...defaultModel});
    }, [isShow]);

    const onInputChange = (e) => setState({ ...state, [e.target.id]: e.target.value });

    return (
        <ModalWrapper
            isShow={isShow}
            handleClose={handleClose}
            addButtonText={`Сохранить`}
            addButtonDisabled={!validationHelper.validateState(state)}
            modalTitle={`Добавить новую запись`}
        >
            <Form className="mt-3">
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

ProtocolPositionAddModal.propTypes = {
    isShow: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired
}

export default ProtocolPositionAddModal;