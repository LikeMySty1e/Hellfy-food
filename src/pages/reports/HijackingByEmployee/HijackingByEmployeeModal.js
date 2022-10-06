import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import PropTypes from "prop-types";
import {Form} from "react-bootstrap";
import {Context} from "../../../index";
import hijackingByEmployeePropTypes from "./resources/hijackingByEmployeePropTypes";
import ModalWrapper from "../../../components/ModalWrapper/ModalWrapper";

const HijackingByEmployeeModal = observer(props => {
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
            modalTitle={`Отчёт раскрываемости по сотруднику`}
        >
            <Form className="mt-3">
                <Form.Group className="mb-3">
                    <Form.Label>Сотрудник</Form.Label>
                    <Form.Control value={state.employee} disabled/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Раскрыто угонов</Form.Label>
                    <Form.Control value={state.reportCount} disabled/>
                </Form.Group>
            </Form>
        </ModalWrapper>
    );
});

HijackingByEmployeeModal.propTypes = {
    isShow: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    ...hijackingByEmployeePropTypes
}

export default HijackingByEmployeeModal;