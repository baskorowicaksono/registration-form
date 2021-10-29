import React from 'react';
import {
    Button,
} from 'react-bootstrap';
import { createTheme } from '@mui/material/styles';
import {
    makeStyles,
} from '@mui/styles';
const theme = createTheme();
const buttonStyles = makeStyles(() => ({
    button: {
        [theme.breakpoints.down('sm')]: {
            fontSize: 12,
        },
        [theme.breakpoints.between('sm', 'md')]: {
            fontSize: 18,
        },
        [theme.breakpoints.between('md', 'xl')]: {
            fontSize: 22,
        },
    },
}));
export function ZealButtonPrimary(props){
    const classes = buttonStyles();
    return(
        <Button onClick={props.handleClick} className={`nuromBold ${classes.button} ${props.class}`} style={{ backgroundColor: '#1F2B52', borderRadius: 10, color: "#fff", borderColor: '#1F2B52' }}>{props.title}</Button>
    )
}

export function ZealButtonSecondary(props){
    const classes = buttonStyles();
    return(
        <Button onClick={props.handleClick} className={`nuromBold ${classes.button} ${props.class}`} style={{ backgroundColor: '#fff', borderRadius: 10, color: '#1F2B52', borderColor: '#fff' }}>{props.title}</Button>
    )
}
