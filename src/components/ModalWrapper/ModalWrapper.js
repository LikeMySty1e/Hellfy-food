import React from 'react';
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Container} from "react-bootstrap";

const ModalWrapper = props => {
    const {
        isShow, handleClose, modalTitle,
        editButtonText, editButtonDisabled,
        deleteButtonText, children
    } = props;

    return (
        <Modal show={isShow} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{modalTitle}</Modal.Title>
            </Modal.Header>
            <Container>
                {children}
            </Container>
            <Modal.Footer>
                {deleteButtonText && <Button variant="danger" onClick={handleClose}>
                    {deleteButtonText}
                </Button>}
                {editButtonText && <Button variant="success" onClick={handleClose} disabled={editButtonDisabled}>
                    {editButtonText}
                </Button>}
            </Modal.Footer>
        </Modal>
    );
};

ModalWrapper.propTypes = {
    isShow: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    deleteButtonText: PropTypes.string,
    editButtonText: PropTypes.string,
    editButtonDisabled: PropTypes.bool,
    modalTitle: PropTypes.string,
    children: PropTypes.node
}

export default ModalWrapper;