import React from 'react';
import { createTheme } from '@mui/material/styles';
import {
    makeStyles,
} from '@mui/styles';
const theme = createTheme();
const textStyles = makeStyles(() => ({
    h1: {
        [theme.breakpoints.down('sm')]: {
            fontSize: 28
        },
        [theme.breakpoints.between('sm', 'lg')]: {
            fontSize: 53
        },
        [theme.breakpoints.between('lg', 'xl')]: {
            fontSize: 62
        }
    },
    h2: {
        [theme.breakpoints.down('sm')]: {
            fontSize: 22
        },
        [theme.breakpoints.between('sm', 'lg')]: {
            fontSize: 27
        },
        [theme.breakpoints.between('lg', 'xl')]: {
            fontSize: 32
        }
    },
    p: {
        [theme.breakpoints.down('sm')]: {
            fontSize: 14
        },
        [theme.breakpoints.between('sm', 'lg')]: {
            fontSize: 20
        },
        [theme.breakpoints.between('lg', 'xl')]: {
            fontSize: 24
        }
    },
}));
export function Heading1(props) {
    const classes = textStyles();
    return (
        <h1 className={`nuromBold text-white ${classes.h1} mb-0`} style={{ fontWeight: 700 }}>{props.text}</h1>
    )
}
export function Heading2(props) {
    const classes = textStyles();
    return (
        <h2 style={{ fontWeight: 700 }} className={`nuromBold mb-0 ${classes.h2} ${props.class}`}>{props.text}</h2>
    )
}
export function Paragraf(props) {
    const classes = textStyles();
    return (
        <p className={`m-0 ${classes.p} ${props.class}`}>{props.text}</p>
    )
}