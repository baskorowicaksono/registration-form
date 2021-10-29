import React, { Fragment, useState, forwardRef, useImperativeHandle } from 'react';
import {
    Row,
    Col,
    Button,
    Form,
    ButtonGroup,
    ToggleButton
} from 'react-bootstrap';
import {
    MobileStepper,
    IconButton,
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';

export default function ZealForm(props) {
    return (
        <Form.Group className="mb-3" controlId={props.controlId}>
            <Form.Label style={{ fontSize: 18 }} className="normMedium">{props.label}</Form.Label>
            <Controller name={props.name} control={props.controlForm} rules={{ required: true }} render={({ field, fieldState }) =>
                <Form.Control className={fieldState.invalid ? "is-invalid" : ""} type={props.type} placeholder={props.placeholder} {...field} onChange={(e) => field.onChange(e.target.value)} />
            } />
        </Form.Group>
    )
}