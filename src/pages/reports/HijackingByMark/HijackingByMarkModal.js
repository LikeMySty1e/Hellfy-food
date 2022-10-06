import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import PropTypes from "prop-types";
import {Form} from "react-bootstrap";
import {Context} from "../../../index";
import hijackingByMarkPropTypes from "./resources/hijackingByMarkPropTypes";
import ModalWrapper from "../../../components/ModalWrapper/ModalWrapper";

const HijackingByMarkModal = observer(props => {
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
            modalTitle={`Статистика угоняемости по марке`}
        >
            <Form className="mt-3">
                <Form.Group className="mb-3">
                    <Form.Label>Марка</Form.Label>
                    <Form.Control value={state.mark} disabled/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Раскрыто угонов</Form.Label>
                    <Form.Control value={state.reportCount} disabled/>
                </Form.Group>
            </Form>
        </ModalWrapper>
    );
});

HijackingByMarkModal.propTypes = {
    isShow: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    ...hijackingByMarkPropTypes
}

export default HijackingByMarkModal;