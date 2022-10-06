import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import PropTypes from "prop-types";
import {Form} from "react-bootstrap";
import {Context} from "../../../index";
import ModalWrapper from "../../../components/ModalWrapper/ModalWrapper";
import validationHelper from "../../../helpers/validationHelper";
import ComplexInputSection from "../../../components/ComplexInputSection/ComplexInputSection";

const defaultModel = {
    incidentDate: ``,
    relevance: false,
    owner: ``,
    employee: ``,
    car: ``
}

const HijackingAddModal = observer(props => {
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
                    <Form.Label>Дата проишествия</Form.Label>
                    <Form.Control id={"incidentDate"} value={state.incidentDate} onChange={onInputChange}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Check label={`Актуальность`} type={'checkbox'} id={"relevance"} checked={state.relevance} onChange={onCheckboxChange}/>
                </Form.Group>
                <ComplexInputSection
                    onChange={onInputChange}
                    defaultTitle={`Водитель`}
                    id={`owner`}
                    firstTitle={`Id`}
                    secondTitle={`Имя`}
                    value={state.owner}
                />
                <ComplexInputSection
                    onChange={onInputChange}
                    defaultTitle={`Сотрудник`}
                    id={`employee`}
                    firstTitle={`Id`}
                    secondTitle={`Имя`}
                    value={state.employee}
                />
                <ComplexInputSection
                    onChange={onInputChange}
                    defaultTitle={`Автомобиль`}
                    id={`car`}
                    firstTitle={`Id`}
                    secondTitle={`Гос. номер`}
                    value={state.car}
                />
            </Form>
        </ModalWrapper>
    );
});

HijackingAddModal.propTypes = {
    isShow: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired
}

export default HijackingAddModal;