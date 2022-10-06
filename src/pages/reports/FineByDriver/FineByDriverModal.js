import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import PropTypes from "prop-types";
import {Form} from "react-bootstrap";
import {Context} from "../../../index";
import fineByDriverPropTypes from "./resources/fineByDriverPropTypes";
import ModalWrapper from "../../../components/ModalWrapper/ModalWrapper";

const FineByDriverModal = observer(props => {
    const {main} = useContext(Context);
    const {isShow, handleClose, data} = props;
    const [state, setState] = React.useState({...data});

    React.useEffect(() => {
        setState({...data});
    }, [isShow]);

    return (
        <ModalWrapper
            isShow={isShow}
            handleClose={handleClose}
            deleteButtonText={`Удалить`}
            modalTitle={`Сведения о штрафах гражданина`}
        >
            <Form className="mt-3">
                <Form.Group className="mb-3">
                    <Form.Label>Фио правонарушителя</Form.Label>
                    <Form.Control value={state.driver} disabled/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Кол-во штрафов</Form.Label>
                    <Form.Control value={state.fineCount} disabled/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Сумма штрафов</Form.Label>
                    <Form.Control value={state.fineSum} disabled/>
                </Form.Group>
            </Form>
        </ModalWrapper>
    );
});

FineByDriverModal.propTypes = {
    isShow: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    ...fineByDriverPropTypes
}

export default FineByDriverModal;