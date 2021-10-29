import React, { Fragment, useState } from 'react';
import { Link } from "react-router-dom";
import {
    Row,
    Col,
    InputGroup,
    FormControl,
    Button,
} from 'react-bootstrap';
import Email from '../assets/Images/email-white.png'
import Gmaps from '../assets/Images/gmaps-white.png'
import Ig from '../assets/Images/ig-white.png'
import Wa from '../assets/Images/wa-white.png'
import Logo from '../assets/Images/rect logo after compress.png'
import FooterImg from '../assets/Images/footer.png'
export default function Footer() {
    return (
        <div className="position-relative">
            <div style={{ display: "block", overflow: "hidden", position: "relative", boxSizing: "border-box", margin: 0 }}>
                <div style={{ display: "block", boxSizing: "border-box", paddingTop: "26.283367556468175%" }}>
                    <img alt="Footer" src={FooterImg} sizes="100vw" style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0, boxSizing: "border-box", padding: 0, border: "none", margin: "auto", display: "block", width: 0, height: 0, minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "fill" }} />
                </div>
            </div>
            <div className="translate-middle top-0 start-50 position-absolute">
                <img alt="Zeal Icon" src={Logo} width="60px" />
            </div>
            <div className="translate-middle top-50 start-50 position-absolute">
                <div>
                    <Row className="d-flex justify-content-center mb-3">
                        <Col sm={2} md={2}>
                            <img src={Gmaps} style={{ height: 35 }} />
                        </Col>
                        <Col sm={2} md={2}>
                            <img src={Email} style={{ height: 35 }} />
                        </Col>
                        <Col sm={2} md={2}>
                            <img src={Ig} style={{ height: 35 }} />
                        </Col>
                        <Col sm={2} md={2}>
                            <img src={Wa} style={{ height: 35 }} />
                        </Col>
                    </Row>
                    <InputGroup>
                        <FormControl
                            placeholder="Join NewsLetter"
                            aria-label="Join NewsLetter"
                        />
                        <Button className="btn btn-primary">
                            Subscribe
                        </Button>
                    </InputGroup>
                </div>
            </div>
            <div className="translate-middle bottom-0 start-50 position-absolute text-white">
                © 2021 Zeal Indonesia. All rights reserved.
            </div>
        </div>
    )
}