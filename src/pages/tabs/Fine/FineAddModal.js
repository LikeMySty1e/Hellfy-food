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
    severity: ``,
    status: false
}

const FineAddModal = observer(props => {
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
                    <Form.Label>Степень тяжести</Form.Label>
                    <Form.Control id={"severity"} value={state.severity} onChange={onInputChange}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Check label={`Статус оплаты`} type={'checkbox'} id={"status"} checked={state.status} onChange={onCheckboxChange}/>
                </Form.Group>
            </Form>
        </ModalWrapper>
    );
});

FineAddModal.propTypes = {
    isShow: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired
}

export default FineAddModal;