import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import PropTypes from "prop-types";
import {Form} from "react-bootstrap";
import {Context} from "../../../index";
import finePropTypes from "./resources/finePropTypes";
import ModalWrapper from "../../../components/ModalWrapper/ModalWrapper";

const FineModal = observer(props => {
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
            modalTitle={`Штраф`}
        >
            <Form className="mt-3">
                <Form.Group className="mb-3">
                    <Form.Label>Id</Form.Label>
                    <Form.Control value={state.id} disabled/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Сумма штрафа</Form.Label>
                    <Form.Control id={"payment"} value={state.payment} onChange={onInputChange}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Check label={`Статус оплаты`} type={'checkbox'} id={"status"} checked={state.status} onChange={onInputChange}/>
                </Form.Group>
            </Form>
        </ModalWrapper>
    );
});

FineModal.propTypes = {
    isShow: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    ...finePropTypes
}

export default FineModal;