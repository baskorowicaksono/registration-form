import React, { Fragment, useState, forwardRef, useImperativeHandle } from 'react';
import {
    Row,
    Col,
    Modal,
} from 'react-bootstrap';
import {
    IconButton,
} from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Step from './Step'

const ModalForm = (props, ref) => {
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
    }
    useImperativeHandle(ref, () => ({
        handleShow() {
            setShow(true)
        }
    }));
    return (
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            centered
            contentClassName="modalmodal"
        >
            <Modal.Header style={{ padding: "0 0 25px 35px", borderBottom: 0 }}>
                <Row>
                    <Col className="pe-0" style={{ paddingTop: 35 }} xs={10} sm={10} md={10} lg={10} xl={10}>
                        <Modal.Title style={{ margin: 0, fontSize: 20, letterSpacing: 1 }} className="nuromBold">Yuk, isi form dibawah ini untuk menerima link download Ebook!</Modal.Title>
                    </Col>
                    <Col className="ps-0 d-flex justify-content-end" xs={2} sm={2} md={2} lg={2} xl={2}>
                        <div>
                            <IconButton onClick={handleClose}>
                                <HighlightOffIcon />
                            </IconButton>
                        </div>
                    </Col>
                </Row>
            </Modal.Header>
            <Modal.Body style={{ padding: "0 35px" }}>
                <Step handleClose={handleClose} />
            </Modal.Body>
        </Modal>
    )
}
export default forwardRef(ModalForm);