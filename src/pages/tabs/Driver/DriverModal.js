import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import PropTypes from "prop-types";
import {Form} from "react-bootstrap";
import {Context} from "../../../index";
import driverPropTypes from "./resources/driverPropTypes";
import ModalWrapper from "../../../components/ModalWrapper/ModalWrapper";
import {mapDriverToSave} from "../../../helpers/mapper";
import urls from "../../../resources/urls";

const DriverModal = observer(props => {
    const {main} = useContext(Context);
    const {isShow, handleClose, data} = props;
    const [state, setState] = React.useState({...data, changed: false});

    React.useEffect(() => {
        setState({...data, changed: false});
    }, [isShow]);

    const onInputChange = (e) => setState({ ...state, [e.target.id]: e.target.value, changed: true });
    const onCheckboxChange = (e) => setState({ ...state, [e.target.id]: !state[e.target.id], changed: true});

    const onRowDelete = () => main.deleteRow({ id: state.id, property: `owner_id`}, `delete_car_owner/${state.id}`);
    const onRowEdit = () => main.updateRow(`update_car_owner`, { ...mapDriverToSave(state), owner_id: state.id }, urls.getDriver);

    return (
        <ModalWrapper
            isShow={isShow}
            handleClose={handleClose}
            deleteButtonText={`Удалить`}
            onDelete={onRowDelete}
            editButtonText={`Редактировать`}
            onEdit={onRowEdit}
            editButtonDisabled={!state.changed}
            modalTitle={`Водитель`}
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
                    <Form.Label>Водительские права</Form.Label>
                    <Form.Control id={"license"} value={state.license} onChange={onInputChange}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Check label={`Судимость`} type={'checkbox'} id={"criminal"} checked={state.criminal} onChange={onCheckboxChange}/>
                </Form.Group>
            </Form>
        </ModalWrapper>
    );
});

DriverModal.propTypes = {
    isShow: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    ...driverPropTypes
}

export default DriverModal;