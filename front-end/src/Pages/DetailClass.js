import React, { Fragment, useRef } from 'react';
import {
    Row,
    Col,
    Container,
} from 'react-bootstrap';
import {
    Grid,
    Hidden
} from '@mui/material';
import { createTheme } from '@mui/material/styles';
import {
    makeStyles,
} from '@mui/styles';
import ModalForm from '../Component/ModalForm'
import { ZealButtonPrimary, ZealButtonSecondary } from "../Component/ZealButton"
import { Heading1, Heading2, Paragraf } from '../Component/Text'
import MaterialClass from "../Component/MaterialClass"
import DrawerForm from "../Component/DrawerForm"
import CircleLeft from '../assets/Images/circle-left.png'
import CircleRight from '../assets/Images/circle-right.png'
import "../assets/CSSs/index.css"


const theme = createTheme();
const detailStyles = makeStyles(() => ({
    bannerWrap: {
        [theme.breakpoints.down('sm')]: {
            padding: "40px 0 30px 0"
        },
        [theme.breakpoints.between('sm', 'md')]: {
            padding: "70px 0"
        },
        [theme.breakpoints.between('md', 'xl')]: {
            padding: "100px 0"
        }
    },
    imgWrap: {
        [theme.breakpoints.down('sm')]: {
            paddingRight: 0
        },
        [theme.breakpoints.between('sm', 'md')]: {
            paddingRight: 30
        },
        [theme.breakpoints.between('md', 'xl')]: {
            paddingRight: 100
        }
    },
    bannerImg: {
        [theme.breakpoints.down('sm')]: {
            height: 160
        },
        [theme.breakpoints.up('sm')]: {
            height: 250
        }
    },
    descWrap: {
        [theme.breakpoints.down('sm')]: {
            width: 200
        },
        [theme.breakpoints.between('sm', 'md')]: {
            width: 350
        },
        [theme.breakpoints.between('md', 'xl')]: {
            width: 450
        }
    },
    circleLeft: {
        [theme.breakpoints.down('sm')]: {
            height: 100
        },
        [theme.breakpoints.between('sm', 'lg')]: {
            height: 150
        },
        [theme.breakpoints.between('lg', 'xl')]: {
            height: 200
        }
    },
    circleRight: {
        [theme.breakpoints.down('sm')]: {
            height: 180,
            bottom: 50
        },
        [theme.breakpoints.between('sm', 'lg')]: {
            height: 250,
            bottom: 80
        },
        [theme.breakpoints.between('lg', 'xl')]: {
            height: 300,
            bottom: 100
        }
    },
    downloadWrap: {
        [theme.breakpoints.down('sm')]: {
            paddingBottom: 90
        },
        [theme.breakpoints.between('sm', 'lg')]: {
            paddingBottom: 120
        },
        [theme.breakpoints.between('lg', 'xl')]: {
            paddingBottom: 150
        }
    },
    benefitImg: {
        [theme.breakpoints.down('sm')]: {
            width: 90,
            height: 90
        },
        [theme.breakpoints.up('sm')]: {
            width: 120,
            height: 120
        }
    },
}));

export default function DetailClass(props) {
    const classes = detailStyles();
    const modalRef = useRef();
    const drawerRef = useRef();
    const benefits = [
        { benefitImg: 'benefit1', benefit: "Dapatkan Akses Pembelajaran Gratis" },
        { benefitImg: 'benefit2', benefit: "Tetap Update dengan Teknologi Terkini" },
        { benefitImg: 'benefit3', benefit: "Belajar dari Mentor Ahli di Bidangnya" },
        { benefitImg: 'benefit4', benefit: "Belajar Melalui Real Project" }
    ]
    const handleOpenModal = () => {
        modalRef.current.handleShow()
    }
    const handleOpenDrawer = () => {
        drawerRef.current.handleShow()
    }
    return (
        <Fragment>
            <div style={{ paddingTop: 55, width: "100%", overflow: 'hidden' }} className="bg-zeal">
                <Row className={classes.bannerWrap}>
                    <Col className={`d-flex justify-content-end align-items-center ${classes.imgWrap}`} xs={4} sm={4} md={4} lg={6} xl={6}>
                        <Hidden mdUp>
                            <img alt="bannerImg" src={require(`../assets/Images/${props.classImg}-mobile.png`).default} className={classes.bannerImg} />
                        </Hidden>
                        <Hidden mdDown>
                            <img alt="bannerImg" src={require(`../assets/Images/${props.classImg}.png`).default} style={{ width: 280, height: 280 }} />
                        </Hidden>
                    </Col>
                    <Col xs={8} sm={8} md={8} lg={6} xl={6}>
                        <Heading1 text={props.classTitle} />
                        <div className={classes.descWrap}>
                            <Paragraf class="normRegular mb-lg-5 mb-md-5 mb-sm-4 mb-2 text-white" text={props.classDesc} />
                            <Hidden smDown>
                                <ZealButtonSecondary handleClick={handleOpenModal} class="nuromBold px-4" title="Download Free Ebook" />
                            </Hidden>
                            <Hidden smUp>
                                <ZealButtonSecondary handleClick={handleOpenDrawer} class="nuromBold px-4" title="Download Free Ebook" />
                            </Hidden>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="d-flex justify-content-center">
                <div style={{ width: 570, marginTop: 100 }} className="text-center">
                    <Heading2 class="text-zeal" text={`Mengapa Kamu Harus Belajar ${props.classTitle} di Zeal?`} />
                </div>
            </div>
            <Container fluid style={{ marginTop: 70 }}>
                <Row>
                    {benefits.map((item, index) =>
                        <Col key={index} xs={6} sm={6} md={6} lg={3} xl={3} className="d-flex justify-content-center text-center mb-lg-0 mb-md-4 mb-sm-4 mb-4">
                            <div style={{ width: 220 }}>
                                <img alt="benefitImg" src={require(`../assets/Images/${item.benefitImg}.png`).default} className={`rounded-circle ${classes.benefitImg}`} />
                                <Paragraf class="normRegular text-zeal mt-3" text={item.benefit} />
                            </div>
                        </Col>
                    )}
                </Row>
            </Container>
            <div style={{ width: '100%', overflow: 'hidden', backgroundColor: "#E4E7EF", marginTop: 150, position: 'relative' }}>
                <img src={CircleLeft} alt="CircleLeft" className={classes.circleLeft} style={{ position: 'absolute', left: 0, top: 0, zIndex: 1 }} />
                <Grid container className="position-relative" style={{ zIndex: 1000 }}>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12} className="px-3">
                        <div className="d-flex justify-content-center w-100 pt-5">
                            <div className="text-center" style={{ width: 470 }}>
                                <Heading2 class="text-zeal" text="Apa yang Akan Kamu Pelajari?" />
                                <Paragraf class="normRegular text-zeal mt-2" text="Banyak ilmu yang bakal kamu dapat melalui Free Ebook nih!" />
                            </div>
                        </div>
                    </Grid>
                    <Grid container justifyContent="center" columnSpacing={{ xs: 1, sm: 3, md: 3, lg: 3, xl: 3 }}>
                        {props.material.map((item, index) =>
                            <Grid item key={index} className="d-inline-block pt-5">
                                <MaterialClass material={item.material1} />
                                <MaterialClass material={item.material2} />
                            </Grid>
                        )}
                    </Grid>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12} className={classes.downloadWrap}>
                        <div className="d-flex justify-content-center w-100 px-5" style={{ paddingTop: 100 }}>
                            <div className="text-center" style={{ width: 470 }}>
                                <Heading2 class="text-zeal mb-5" text={`Yuk Download Free Ebook ${props.classTitle} Sekarang!`} />
                                <Hidden smDown>
                                    <ZealButtonPrimary handleClick={handleOpenModal} class="nuromBold px-4" title="Download Free Ebook" />
                                </Hidden>
                                <Hidden smUp>
                                    <ZealButtonPrimary handleClick={handleOpenDrawer} class="nuromBold px-4" title="Download Free Ebook" />
                                </Hidden>
                            </div>
                        </div>
                    </Grid>
                </Grid>
                <img src={CircleRight} alt="CircleRight" className={classes.circleRight} style={{ position: 'absolute', right: 0, zIndex: 1 }} />
            </div>
            <ModalForm ref={modalRef} />
            <DrawerForm ref={drawerRef} />
        </Fragment>
    )
}