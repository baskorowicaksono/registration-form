import React, { useState, forwardRef, useImperativeHandle } from 'react';
import {
    Modal,
} from 'react-bootstrap';
import {
    IconButton,
    Grid
} from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Step from './Step'

const ModalForm = (props, ref) => {
    const [show, setShow] = useState(false);
    const [callActive, setCallActive] = useState(0)
    const handleClose = () => {
        setShow(false);
        setCallActive(0)
    }
    useImperativeHandle(ref, () => ({
        handleShow() {
            setShow(true)
        }
    }));
    const handleCallActive = () => {
        setCallActive((prevCallActive) => prevCallActive + 1)
    }
    return (
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            centered
            contentClassName="modalmodal"
        >
            <Modal.Header style={{ padding: "0 0 25px 35px", borderBottom: 0, height: 120 }}>
                <Grid container style={{height: '100%'}}>
                    <Grid item className="pe-0" style={{ paddingTop: 35 }} xs={10} sm={10} md={10} lg={10} xl={10}>
                        {callActive === 3 ? "" : <Modal.Title style={{ margin: 0, fontSize: 20 }} className="nuromBold text-zeal">Yuk, isi form dibawah ini untuk menerima link download Ebook!</Modal.Title>}
                    </Grid>
                    <Grid item className="ps-0 d-flex justify-content-end" xs={2} sm={2} md={2} lg={2} xl={2}>
                        <div>
                            <IconButton onClick={handleClose}>
                                <HighlightOffIcon style={{color: '#1F2B52'}} />
                            </IconButton>
                        </div>
                    </Grid>
                </Grid>
            </Modal.Header>
            <Modal.Body style={{ padding: "0 35px" }}>
                <Step handleClose={handleClose} handleCallActive={handleCallActive} />
            </Modal.Body>
        </Modal>
    )
}
export default forwardRef(ModalForm);