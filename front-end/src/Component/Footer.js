import React from 'react';
import {
    Row,
    Col,
    InputGroup,
    FormControl,
    Button,
} from 'react-bootstrap';
import {
    Hidden,
} from '@mui/material';
import Email from '../assets/Images/email-white.png'
import Gmaps from '../assets/Images/gmaps-white.png'
import Ig from '../assets/Images/ig-white.png'
import Wa from '../assets/Images/wa-white.png'
import Logo from '../assets/Images/rect logo after compress.png'
import FooterImg from '../assets/Images/footer.png'
import { createTheme } from '@mui/material/styles';
import {
    makeStyles,
} from '@mui/styles';
const theme = createTheme();
const footerStyles = makeStyles(() => ({
    footerIcon: {
        [theme.breakpoints.down('sm')]: {
            height: 22
        },
        [theme.breakpoints.between('sm', 'md')]: {
            height: 30
        },
        [theme.breakpoints.between('md', 'xl')]: {
            height: 35
        }
    },
    zealIcon: {
        [theme.breakpoints.down('sm')]: {
            width: 35
        },
        [theme.breakpoints.between('sm', 'md')]: {
            width: 45
        },
        [theme.breakpoints.between('md', 'xl')]: {
            width: 60
        }
    },
    copyright: {
        [theme.breakpoints.down('sm')]: {
            fontSize: 11
        },
        [theme.breakpoints.between('sm', 'md')]: {
            fontSize: 15
        },
        [theme.breakpoints.between('md', 'lg')]: {
            fontSize: 15
        },
        [theme.breakpoints.between('lg', 'xl')]: {
            fontSize: 18
        }
    },
}));
export default function Footer() {
    const classes = footerStyles()
    return (
        <div className="position-relative">
            <div style={{ display: "block", overflow: "hidden", position: "relative", boxSizing: "border-box", margin: 0 }}>
                <div style={{ display: "block", boxSizing: "border-box", paddingTop: "26.283367556468175%" }}>
                    <img alt="Footer" src={FooterImg} sizes="100vw" style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0, boxSizing: "border-box", padding: 0, border: "none", margin: "auto", display: "block", width: 0, height: 0, minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "fill" }} />
                </div>
            </div>
            <div className="translate-middle top-0 start-50 position-absolute">
                <img alt="Zeal Icon" src={Logo} className={classes.zealIcon} />
            </div>
            <div className="translate-middle top-50 start-50 position-absolute">
                <div>
                    <Row className="d-flex justify-content-center mb-3">
                        <Col xs={3} sm={2} md={2}>
                            <img alt="iconMap" src={Gmaps} className={classes.footerIcon} />
                        </Col>
                        <Col xs={3} sm={2} md={2}>
                            <img alt="iconEmail" src={Email} className={classes.footerIcon} />
                        </Col>
                        <Col xs={3} sm={2} md={2}>
                            <img alt="iconInsta" src={Ig} className={classes.footerIcon} />
                        </Col>
                        <Col xs={3} sm={2} md={2}>
                            <img alt="iconWa" src={Wa} className={classes.footerIcon} />
                        </Col>
                    </Row>
                    <Hidden smDown>
                        <InputGroup size="sm">
                            <FormControl
                                placeholder="Subscribe"
                            />
                            <Button style={{backgroundColor: '#3935EB', borderColor: '#3935EB'}}>
                                Subscribe
                            </Button>
                        </InputGroup>
                    </Hidden>
                </div>
            </div>
            <div className="translate-middle bottom-0 start-50 position-absolute text-white">
                <p className={`m-0 ${classes.copyright}`}>© 2021 Zeal Indonesia. All rights reserved.</p>
            </div>
        </div>
    )
}