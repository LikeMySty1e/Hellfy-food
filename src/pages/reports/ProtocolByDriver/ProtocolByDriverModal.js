import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import PropTypes from "prop-types";
import {Form} from "react-bootstrap";
import {Context} from "../../../index";
import protocolByDriverPropTypes from "./resources/protocolByDriverPropTypes";
import ModalWrapper from "../../../components/ModalWrapper/ModalWrapper";

const ProtocolByDriverModal = observer(props => {
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
            modalTitle={`Статистика нарушений ПДД`}
        >
            <Form className="mt-3">
                <Form.Group className="mb-3">
                    <Form.Label>Фио правонарушителя</Form.Label>
                    <Form.Control value={state.driver} disabled/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Кол-во протоколов</Form.Label>
                    <Form.Control value={state.protocolCount} disabled/>
                </Form.Group>
            </Form>
        </ModalWrapper>
    );
});

ProtocolByDriverModal.propTypes = {
    isShow: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    ...protocolByDriverPropTypes
}

export default ProtocolByDriverModal;