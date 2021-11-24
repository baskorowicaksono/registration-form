import React from 'react';
import { Link } from "react-router-dom";
import {
    Card,
    Row,
    Col
} from 'react-bootstrap';
import { Heading2, Paragraf } from './Text';
import {ZealButtonPrimary} from './ZealButton';
import { createTheme } from '@mui/material/styles';
import {
    makeStyles,
} from '@mui/styles';
const theme = createTheme();
const cardStyles = makeStyles(() => ({
    card: {
        [theme.breakpoints.down('sm')]: {
            width: 370,
            padding: 18,
            borderRadius: 50
        },
        [theme.breakpoints.between('sm', 'md')]: {
            width: 550,
            padding: 30,
            borderRadius: 80
        },
        [theme.breakpoints.between('md', 'xl')]: {
            width: 350,
            padding: 35,
            borderRadius: 80
        },
    },
    cardImg: {
        [theme.breakpoints.down('sm')]: {
            width: 100,
            height: 100
        },
        [theme.breakpoints.between('sm', 'md')]: {
            width: 170,
            height: 170
        },
        [theme.breakpoints.between('md', 'xl')]: {
            width: 170,
            height: 170
        },
    },
}));
export default function ClassCard(props) {
    const classes = cardStyles();
    return (
        <Card className={classes.card} style={{ boxShadow: '0px 3px 4px rgba(0, 0, 0, 0.25)' }}>
            <Row>
                <Col xs={5} sm={5} md={5} lg={12} xl={12} className="d-flex justify-content-center align-items-center mb-lg-3 mb-md-0">
                    <img alt="CardImg" src={require(`../assets/Images/${props.cardImg}.png`).default} className={`rounded-circle ${classes.cardImg}`} />
                </Col>
                <Col xs={7} sm={7} md={7} lg={12} xl={12}>
                    <Card.Body className="text-md-start text-zeal mt-3 p-0 text-lg-center">
                        <Heading2 text={props.title} class="mb-lg-3 mb-md-2 mb-1" />
                        <Card.Text>
                            <Paragraf text={props.desc} class="normLight" />
                        </Card.Text>
                        <Link to={`/detail/${props.link}`}>
                            <ZealButtonPrimary title="Gabung Sekarang" class=" mt-lg-4 mt-md-3 mt-1 mb-lg-3 mb-md-0 px-3" />
                        </Link>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    )
}