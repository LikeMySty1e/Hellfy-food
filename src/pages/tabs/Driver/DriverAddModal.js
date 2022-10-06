import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import PropTypes from "prop-types";
import {Form} from "react-bootstrap";
import {Context} from "../../../index";
import ModalWrapper from "../../../components/ModalWrapper/ModalWrapper";
import validationHelper from "../../../helpers/validationHelper";

const defaultModel = {
    fullname: ``,
    birthday: ``,
    license: ``,
    criminal: false,
}

const DriverAddModal = observer(props => {
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

DriverAddModal.propTypes = {
    isShow: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired
}

export default DriverAddModal;