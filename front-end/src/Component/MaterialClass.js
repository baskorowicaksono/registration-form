import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {Paragraf} from './Text'
import { createTheme } from '@mui/material/styles';
import {
    makeStyles,
} from '@mui/styles';
const theme = createTheme();
const materialStyles = makeStyles(() => ({
    materialIcon: {
        [theme.breakpoints.down('sm')]: {
            fontSize: "16px !important"
        },
        [theme.breakpoints.between('sm', 'lg')]: {
            fontSize: "22px !important"
        },
        [theme.breakpoints.between('lg', 'xl')]: {
            fontSize: "26px !important"
        }
    },
}));
export default function MaterialClass(props){
    const classes = materialStyles()
    return(
        <div className="d-flex align-items-center mb-2">
            <CheckCircleIcon style={{color: '#3935EB'}} className={classes.materialIcon} />
            <Paragraf class="nuromBold text-zeal mt-1 ms-3" text={props.material} />
        </div>
    )
}