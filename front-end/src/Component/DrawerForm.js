import React, {  useState, forwardRef, useImperativeHandle } from 'react';
import {
    IconButton,
    SwipeableDrawer,
    Grid
} from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Step from './Step'

const DrawerForm = (props, ref) => {
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
        <SwipeableDrawer
            anchor="bottom"
            open={show}
            onClose={handleClose}
            onOpen={() => setShow(true)}
            style={{height: '100%'}}
        >
            <div style={{ padding: "0 0 25px 35px", borderBottom: 0, height: 120 }}>
                <Grid container style={{height: '100%'}}>
                    <Grid item className="pe-0" style={{ paddingTop: 35 }} xs={10} sm={10} md={10} lg={10} xl={10}>
                        {callActive === 3 ? "" : <h1 style={{ margin: 0, fontSize: 20 }} className="nuromBold text-zeal">Yuk, isi form dibawah ini untuk menerima link download Ebook!</h1>}
                    </Grid>
                    <Grid item className="ps-0 d-flex justify-content-end" xs={2} sm={2} md={2} lg={2} xl={2}>
                        <div>
                            <IconButton onClick={handleClose}>
                                <HighlightOffIcon style={{color: '#1F2B52'}} />
                            </IconButton>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div style={{ padding: "0 35px" }}>
                <Step handleClose={handleClose} handleCallActive={handleCallActive} />
            </div>
        </SwipeableDrawer>
    )
}
export default forwardRef(DrawerForm);