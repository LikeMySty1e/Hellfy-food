import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import PropTypes from "prop-types";
import {Form} from "react-bootstrap";
import {Context} from "../../../index";
import employeePropTypes from "./resources/employeePropTypes";
import ModalWrapper from "../../../components/common/ModalWrapper/ModalWrapper";
import SelectSection from "../../../components/common/SelectSection/SelectSection";
import employeeRankResource from "../../../resources/employeeRankResource";
import ComplexInputSection from "../../../components/common/ComplexInputSection/ComplexInputSection";
import {mapEmployeeToSave} from "../../../helpers/mapper";
import urls from "../../../resources/urls";

const EmployeeModal = observer(props => {
    const {main} = useContext(Context);
    const {isShow, handleClose, data} = props;
    const [state, setState] = React.useState({...data, changed: false});

    React.useEffect(() => {
        setState({...data, changed: false});
    }, [isShow]);

    const onInputChange = (e) => setState({ ...state, [e.target.id]: e.target.value, changed: true });

    const onRowDelete = () => main.deleteRow({ id: state.id, property: `employee_id`}, `delete_employee/${state.id}`);
    const onRowEdit = () => main.updateRow(`update_employee`, { ...mapEmployeeToSave(state), employee_id: state.id }, urls.getEmployee);

    return (
        <ModalWrapper
            isShow={isShow}
            handleClose={handleClose}
            deleteButtonText={`Удалить`}
            onDelete={onRowDelete}
            editButtonText={`Редактировать`}
            onEdit={onRowEdit}
            editButtonDisabled={!state.changed}
            modalTitle={`Сотрудник`}
        >
            <Form className="mt-3">
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

EmployeeModal.propTypes = {
    isShow: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    ...employeePropTypes
}

export default EmployeeModal;