import React from 'react';
import {
    Form,
} from 'react-bootstrap';
import { Controller } from 'react-hook-form';

export default function ZealForm(props) {
    return (
        <Form.Group className="mb-3" controlId={props.controlId}>
            <Form.Label style={{ fontSize: 18 }} className="normMedium text-zeal">{props.label}</Form.Label>
            <Controller name={props.name} control={props.controlForm} rules={props.rulesForm} render={({ field, fieldState }) =>
                <Form.Control isInvalid={fieldState.invalid} type={props.type} placeholder={props.placeholder} {...field} onChange={(e) => field.onChange(e.target.value)} />
            } />
        </Form.Group>
    )
}