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
import ZealForm from "./ZealForm"
import Axios from "axios";
export default function Step(props) {
    const radios = [
        { name: 'P', value: 'perempuan' },
        { name: 'L', value: 'laki-laki' },
    ];
    const [activeStep, setActiveStep] = React.useState(0);
    const defaultValues = {
        namaLengkap: '',
        email: '',
        nomorTelepon: '',
        jenisKelamin: '',
        pekerjaan: '',
        instansi: "",
        kota: '',
        tanggalLahir: "",
        media: '',
        tujuan: '',
        minat: ''
    }
    const { control, formState: { errors }, handleSubmit, reset } = useForm({ defaultValues: defaultValues, mode: "onBlur" });
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const onSubmit = (data) => {
        Axios.post((window.location.pathname === "/detail/digital-marketing" ? "/miniclass/digital-marketing/add-user" : (window.location.pathname === "/detail/graphic-design" ? "/miniclass/graphic-design/add-user" : "/miniclass/web-development/add-user")), {
            nama: data.namaLengkap,
            email: data.email,
            jenis_kelamin: data.jenisKelamin,
            pekerjaan: data.pekerjaan,
            kota: data.kota,
            tanggal_lahir: data.tanggalLahir,
            media_info: data.media,
            tujuan: data.tujuan,
            minat: data.minat
        }).then(res => {
            console.log(res.data);
        })
        // console.log(data);
        setActiveStep(0)
        reset()
        props.handleClose()
    };
    function FormWrap() {
        if (activeStep === 0) {
            return (
                <Fragment>
                    <ZealForm controlForm={control} controlId="namaLengkap" name="namaLengkap" placeholder="Nama Lengkap" type="text" label="Nama Lengkap" />
                    <ZealForm controlForm={control} controlId="email" name="email" placeholder="Email Aktif" type="email" label="Email" />
                    <ZealForm controlForm={control} controlId="nomorTelepon" name="nomorTelepon" placeholder="Nomor Telepon" type="number" label="Nomor Telepon" />
                    <p style={{ margin: 0, fontSize: 18 }} className="normMedium mb-2">Jenis Kelamin</p>
                    <Controller name="jenisKelamin" control={control} rules={{ required: true }} render={({ field, fieldState }) =>
                        <ButtonGroup>
                            {radios.map((radio, idx) => (
                                <ToggleButton
                                    key={idx}
                                    id={radio.value}
                                    type="radio"
                                    value={radio.value}
                                    variant={fieldState.invalid ? "outline-danger" : "outline-secondary"}
                                    style={{ width: 40, height: 40, borderRadius: 3, borderColor: '#c8c8c8' }}
                                    className="d-flex align-items-center justify-content-center me-2 mb-4"
                                    checked={field.value === radio.value}
                                    onChange={(e) => field.onChange(e.currentTarget.value)}
                                >
                                    {radio.name}
                                </ToggleButton>
                            ))}
                        </ButtonGroup>
                    } />
                </Fragment>
            )
        } else if (activeStep === 1) {
            return (
                <Fragment>
                    <ZealForm controlForm={control} controlId="pekerjaan" name="pekerjaan" placeholder="Pekerjaan Kamu Saat Ini" type="text" label="Pekerjaan" />
                    <ZealForm controlForm={control} controlId="instansi" name="instansi" placeholder="Nama Perusahaan/Universitas Kamu" type="text" label="Perusahaan/Universitas" />
                    <ZealForm controlForm={control} controlId="kota" name="kota" placeholder="Kota Tempat Tinggal" type="text" label="Kota" />
                    <Form.Group className="mb-4" controlId="tanggalLahir">
                        <Form.Label style={{ fontSize: 18 }} className="normMedium">Tanggal Lahir</Form.Label>
                        <Controller name="tanggalLahir" control={control} rules={{ required: true }} render={({ field, fieldState }) =>
                            <Form.Control className={fieldState.invalid ? "is-invalid" : ""} type="text" placeholder="dd/mm/yyyy"  {...field} onChange={(e) => field.onChange(e.target.value)} />
                        } />
                    </Form.Group>
                </Fragment>
            )
        } return (
            <div style={{marginBottom: 115}}>
                <ZealForm controlForm={control} controlId="media" name="media" placeholder="Instagram/Web/Event" type="text" label="Darimana Kamu Mengetahui Zeal?" />
                <ZealForm controlForm={control} controlId="tujuan" name="tujuan" placeholder="Apa Tujuanmu?" type="text" label="Apa Tujuan Kamu Mengikuti Mini Class?" />
                <ZealForm controlForm={control} controlId="minat" name="minat" placeholder="Kamu ingin belajar tentang apa?" type="text" label="Apa yang Kamu Ingin Pelajari?" />
            </div>
        )
    }
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormWrap />
            <div className="d-flex justify-content-center mb-4">
                <MobileStepper
                    variant="dots"
                    steps={3}
                    position="static"
                    activeStep={activeStep}
                />
            </div>
            <div style={{ paddingBottom: 35 }} className="d-flex justify-content-center">
                {
                    activeStep === 2 ?
                        <Button type="submit" className="w-75" style={{ backgroundColor: "#1F2B52" }}>
                            Send
                        </Button> :
                        <Button onClick={handleNext} className="w-75" style={{ backgroundColor: "#1F2B52" }}>
                            Next
                        </Button>
                }
            </div>
        </Form>
    )
}