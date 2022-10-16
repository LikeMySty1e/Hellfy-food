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
import {mapEmployeeToSave} from "../../../helpers/mapper";
import urls from "../../../resources/urls";

const defaultModel = {
    fullname: ``,
    birthday: ``,
    contract: ``,
    phone: ``,
    position: ``,
    rank: employeeRankResource[0].value,
}

const EmployeeAddModal = observer(props => {
    const {main} = useContext(Context);
    const {isShow, handleClose} = props;
    const [state, setState] = React.useState({...defaultModel});

    React.useEffect(() => {
        setState({...defaultModel});
    }, [isShow]);

    const onInputChange = (e) => setState({ ...state, [e.target.id]: e.target.value });

    const onAddRow = () => main.addRow(`add_employee`, mapEmployeeToSave(state), urls.getEmployee);

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
                <ComplexInputSection
                    onChange={onInputChange}
                    defaultTitle={`Должность`}
                    id={`position`}
                    firstTitle={`Id`}
                    secondTitle={`Наименование`}
                    value={state.position}
                />
                <SelectSection
                    title={`Звание`}
                    id={"rank"}
                    value={state.rank}
                    data={employeeRankResource}
                    onSelect={onInputChange}
                />
            </Form>
        </ModalWrapper>
    );
});

EmployeeAddModal.propTypes = {
    isShow: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired
}

export default EmployeeAddModal;