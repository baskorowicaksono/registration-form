import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';

import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Editor } from 'primereact/editor';
import { FileUpload } from 'primereact/fileupload';
import { InputNumber } from 'primereact/inputnumber';
import { classNames } from 'primereact/utils';
import { Checkbox } from 'primereact/checkbox';

import {
    Container,
    Card,
    Row,
    Col
} from 'react-bootstrap';
export default function Form() {
    const defaultValues = {
        namaMiniclass: '',
        deskripsiMiniclass: '',
        materi: '',
        linkMeeting: '',
        persiapan: '',
        statusProgramId: null,
        posterProgram: '',
        biaya: 0,
        displayEvent: false
    }
    const status = [
        { status: "Coming Soon", statusId: 1 },
        { status: "On Progress", statusId: 2 },
        { status: "Done", statusId: 3 },
    ]
    const { control, formState: { errors }, handleSubmit, reset } = useForm({ defaultValues, mode: "onBlur" });

    const onSubmit = (data) => {
        console.log(data);
        reset();
    };
    function editorHeader() {
        return (
            <span className="ql-formats">
                <select class="ql-font"></select>
                <select class="ql-size"></select>
                <button className="ql-bold" aria-label="Bold"></button>
                <button className="ql-italic" aria-label="Italic"></button>
                <button className="ql-underline" aria-label="Underline"></button>
                <select class="ql-align">
                    <option selected></option>
                    <option value="center"></option>
                    <option value="right"></option>
                    <option value="justify"></option>
                </select>
                <button class="ql-list" value="ordered"></button>
                <button class="ql-list" value="bullet"></button>
            </span>
        );
    }
    return (
        <div className="d-flex justify-content-center p-5">
            <Card className="w-75">
                <Card.Header className="bg-dark text-white text-center">Miniclass Form</Card.Header>
                <Container className="px-5 py-3">
                    <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
                        <Row className="my-3">
                            <Col xs={3}>
                                <label>Nama Miniclass</label>
                            </Col>
                            <Col>
                                <Controller name="namaMiniclass" control={control} rules={{ required: true }} render={({ field, fieldState }) => (
                                    <InputText id={field.name} className={classNames({ 'p-invalid': fieldState.invalid })} {...field} onChange={(e) => field.onChange(e.target.value)} />
                                )} />
                            </Col>
                        </Row>
                        <Row className="my-3">
                            <Col xs={3}>
                                <label>Status Program</label>
                            </Col>
                            <Col>
                                <Controller name="statusProgramId" control={control} rules={{ required: true }} render={({ field, fieldState }) => (
                                    <Dropdown id={field.name} className={classNames({ 'p-invalid': fieldState.invalid })} value={field.value} onChange={(e) => field.onChange(e.value)} options={status} optionLabel="status" optionValue="statusId" />
                                )} />
                            </Col>
                        </Row>
                        <Row className="my-3">
                            <Col xs={3}>
                                <label> Deskripsi Miniclass</label>
                            </Col>
                            <Col>
                                <Controller name="deskripsiMiniclass" control={control} rules={{ required: true }} render={({ field, fieldState }) => (
                                    <Editor headerTemplate={editorHeader()} id={field.name} className={classNames({ 'p-invalid': fieldState.invalid })} {...field} onTextChange={(e) => field.onChange(e.htmlValue)} />
                                )} />
                            </Col>
                        </Row>
                        <Row className="my-3">
                            <Col xs={3}>
                                <label>Materi</label>
                            </Col>
                            <Col>
                                <Controller name="materi" control={control} rules={{ required: true }} render={({ field, fieldState }) => (
                                    <Editor headerTemplate={editorHeader()} id={field.name} className={classNames({ 'p-invalid': fieldState.invalid })} {...field} onTextChange={(e) => field.onChange(e.htmlValue)} />
                                )} />
                            </Col>
                        </Row>
                        <Row className="my-3">
                            <Col xs={3}>
                                <label>Link Meeting</label>
                            </Col>
                            <Col>
                                <Controller name="linkMeeting" control={control} rules={{ required: true }} render={({ field, fieldState }) => (
                                    <InputText id={field.name} className={classNames({ 'p-invalid': fieldState.invalid })} {...field} onChange={(e) => field.onChange(e.target.value)} />
                                )} />
                            </Col>
                        </Row>
                        <Row className="my-3">
                            <Col xs={3}>
                                <label>Persiapan</label>
                            </Col>
                            <Col>
                                <Controller name="persiapan" control={control} rules={{ required: true }} render={({ field, fieldState }) => (
                                    <Editor headerTemplate={editorHeader()} id={field.name} className={classNames({ 'p-invalid': fieldState.invalid })} {...field} onTextChange={(e) => field.onChange(e.htmlValue)} />
                                )} />
                            </Col>
                        </Row>
                        <Row className="my-3">
                            <Col xs={3}>
                                <label>Biaya</label>
                            </Col>
                            <Col>
                                <Controller name="biaya" control={control} rules={{ required: true }} render={({ field, fieldState }) => (
                                    <InputNumber inputId={field.name} className={classNames({ 'p-invalid': fieldState.invalid })} value={field.value} onValueChange={(e) => field.onChange(e.value)} mode="currency" currency="IDR" />
                                )} />
                            </Col>
                        </Row>
                        <Row className="my-3">
                            <Col xs={3}>
                                <label>Poster Program</label>
                            </Col>
                            <Col>
                                <Controller name="posterProgram" control={control} rules={{ required: true }} render={({ field, fieldState }) => (
                                    <FileUpload customUpload uploadHandler={(e) => field.onChange(e.files)} id={field.name} className={classNames({ 'p-invalid': fieldState.invalid })} {...field} mode="basic" accept="image/*" maxFileSize={1000000} />
                                )} />
                            </Col>
                        </Row>
                        <div className="my-3 d-flex align-items-center">
                            <Controller name="displayEvent" control={control} rules={{ required: true }} render={({ field, fieldState }) => (
                                <Checkbox inputId={field.name} onChange={(e) => field.onChange(e.checked)} checked={field.value} className={classNames({ 'p-invalid': fieldState.invalid })} />
                            )} />
                            <label htmlFor="displayEvent" className={classNames({ 'p-error': errors.displayEvent })}>Display Event</label>
                        </div>
                        <Button style={{ width: 200 }} type="submit" label="Submit" className="p-mt-2" />
                    </form>
                </Container>
            </Card>
        </div>
    );
}