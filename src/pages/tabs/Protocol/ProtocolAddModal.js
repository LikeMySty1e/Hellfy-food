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
    registration: ``,
    status: false,
    violator: ``,
    victim: ``
}

const ProtocolAddModal = observer(props => {
    const {main} = useContext(Context);
    const {isShow, handleClose} = props;
    const [state, setState] = React.useState({...defaultModel});

    React.useEffect(() => {
        setState({...defaultModel});
    }, [isShow]);

    const onInputChange = (e) => setState({ ...state, [e.target.id]: e.target.value });
    const onCheckboxChange = (e) => setState({ ...state, [e.target.id]: !state[e.target.id] });

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
                    <Form.Label>Дата регистрации</Form.Label>
                    <Form.Control id={"registration"} value={state.registration} onChange={onInputChange}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Check label={`Статус`} type={'checkbox'} id={"status"} checked={state.status} onChange={onCheckboxChange}/>
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

ProtocolAddModal.propTypes = {
    isShow: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired
}

export default ProtocolAddModal;