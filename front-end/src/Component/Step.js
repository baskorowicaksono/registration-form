import React, { Fragment, useState } from 'react';
import {
    Button,
    Form,
    ButtonGroup,
    ToggleButton,
} from 'react-bootstrap';
import {
    MobileStepper,
} from '@mui/material';
import "react-datepicker/dist/react-datepicker.css";
import { useForm, Controller } from 'react-hook-form';
import ZealForm from "./ZealForm";
import Axios from "axios";
export default function Step(props) {
    const radios = [
        { name: 'P', value: 'perempuan' },
        { name: 'L', value: 'lakilaki' },
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
    const axiosInstance = Axios.create({baseURL: process.env.REACT_APP_API_URL})
    const { control, formState: { errors }, handleSubmit, reset } = useForm({ defaultValues: defaultValues, mode: "onBlur" });
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        props.handleCallActive()
    };

    // const handleBack = () => {
    //     setActiveStep((prevActiveStep) => prevActiveStep - 1);
    // };
    const onSubmit = (data) => {
        axiosInstance.post((window.location.pathname === "/detail/digital-marketing" ? "/miniclass/digital-marketing/add-user" : (window.location.pathname === "/detail/graphic-design" ? "/miniclass/graphic-design/add-user" : "/miniclass/web-development/add-user")), {
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
        reset();
        handleNext();
    };
    const handleFinish = () => {
        props.handleClose()
        setActiveStep(0);
    }
    function FormWrap() {
        if (activeStep === 0) {
            return (
                <Fragment>
                    <ZealForm controlForm={control} rulesForm={{ required: true }} controlId="namaLengkap" name="namaLengkap" placeholder="Nama Lengkap" type="text" label="Nama Lengkap" />
                    <ZealForm controlForm={control} rulesForm={{ required: true, pattern: /\S+@\S+\.\S+/ }} controlId="email" name="email" placeholder="Email Aktif" type="email" label="Email" />
                    <ZealForm controlForm={control} rulesForm={{ required: true }} controlId="nomorTelepon" name="nomorTelepon" placeholder="Nomor Telepon" type="number" label="Nomor Telepon" />
                    <p style={{ margin: 0, fontSize: 18 }} className="normMedium mb-2 text-zeal">Jenis Kelamin</p>
                    <Controller name="jenisKelamin" control={control} rules={{ required: true }} render={({ field, fieldState }) =>
                        <ButtonGroup>
                            {radios.map((radio, idx) => (
                                <ToggleButton
                                    required
                                    key={idx}
                                    id={radio.value}
                                    type="radio"
                                    value={radio.value}
                                    variant={fieldState.invalid ? "outline-danger" : ""}
                                    style={{ width: 40, height: 40, borderRadius: 3, borderColor: '#c8c8c8' }}
                                    className="d-flex align-items-center justify-content-center me-2 mb-3 custom-btn"
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
                    <ZealForm controlForm={control} rulesForm={{ required: true }} controlId="pekerjaan" name="pekerjaan" placeholder="Pekerjaan Kamu Saat Ini" type="text" label="Pekerjaan" />
                    <ZealForm controlForm={control} rulesForm={{ required: true }} controlId="instansi" name="instansi" placeholder="Nama Perusahaan/Universitas Kamu" type="text" label="Perusahaan/Universitas" />
                    <ZealForm controlForm={control} rulesForm={{ required: true }} controlId="kota" name="kota" placeholder="Kota Tempat Tinggal" type="text" label="Kota" />
                    <ZealForm controlForm={control} rulesForm={{ required: true }} controlId="tanggalLahir" name="tanggalLahir" placeholder="dd/mm/yyyy" type="date" label="Tanggal Lahir" />
                </Fragment>
            )
        } else if (activeStep === 2) {
            return (
                <div style={{ marginBottom: 105 }}>
                    <ZealForm controlForm={control} rulesForm={{ required: true }} controlId="media" name="media" placeholder="Instagram/Web/Event" type="text" label="Darimana Kamu Mengetahui Zeal?" />
                    <ZealForm controlForm={control} rulesForm={{ required: true }} controlId="tujuan" name="tujuan" placeholder="Apa Tujuanmu?" type="text" label="Apa Tujuan Kamu Mengikuti Mini Class?" />
                    <ZealForm controlForm={control} rulesForm={{ required: true }} controlId="minat" name="minat" placeholder="Kamu ingin belajar tentang apa?" type="text" label="Apa yang Kamu Ingin Pelajari?" />
                </div>
            )
        } return (
            <div>
                test
            </div>
        )
    }
    return (
        <Form>
            {activeStep === 3 ?
                <div style={{ height: 360, paddingTop: 60 }} className="d-flex">
                    <div className="text-center" style={{ padding: '0 50px' }}>
                        <p style={{ margin: 0, fontSize: 20 }} className="nuromBold text-zeal">Terima Kasih Telah</p>
                        <p style={{ margin: 0, fontSize: 20 }} className="nuromBold text-zeal mb-4">Mengisi Form</p>
                        <p style={{ margin: 0, fontSize: 18 }} className="normRegular text-zeal">Cek inbox emailmu untuk mendownload  Free Ebook dari Zeal Indonesia melalui link tautan yang kami kirimkan</p>
                    </div>
                </div>
                : <FormWrap />
            }
            <div className="d-flex justify-content-center mb-4" style={{ height: 32 }}>
                {activeStep === 3 ? "" :
                    <MobileStepper
                        variant="dots"
                        steps={4}
                        position="static"
                        activeStep={activeStep}
                        className="mt-2"
                    />
                }
            </div>
            <div style={{ paddingBottom: 35 }} className="d-flex justify-content-center">
                <Button onClick={activeStep === 2 ? handleSubmit(onSubmit) : activeStep === 3 ? handleFinish : handleNext} className="w-75" style={{ backgroundColor: "#1F2B52" }}>
                    {activeStep === 2 ? "Send" : activeStep === 3 ? "Oke" : "Next"}
                </Button>
            </div>
        </Form>
    )
}