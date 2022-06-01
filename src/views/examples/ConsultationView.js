// reactstrap components
import {
    Button, CardBody, CardTitle, Col, Form, Row
} from "reactstrap";

import {
    Card,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle, FormGroup, Input,
    TextField,
    Typography
} from "@mui/material";
import jwt_decode from "jwt-decode";
import axios from "axios";
import {useEffect, useState} from "react";
import ImageBigger from "./ImageBigger";


const ConsultationView = (props) => {
    const {openPopup1, setOpenPopup1 } = props;
    const {file, setFile } = props;
    const [openPopup3, setOpenPopup3] = useState(false)
    const {bloodPressure, setBloodPressure } = props;
    const {isFileField, setIsFileField } = props;
    const {temperature, setTemperature } = props;
    const {prescriptionText, setPrescriptionText } = props;
    const {doctorNotes, setDoctorNotes } = props;
    console.log(file)

    return (
        <>
            <Dialog
                open={openPopup1}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Consultation details</DialogTitle>
                <DialogContent>
                    <div>
                        <h6 className="heading-small text-muted mb-4">
                            General Notes
                        </h6>
                        <div className="pl-lg-4">
                            <Row>
                                <Col lg="4">
                                    <Card className=" card-frame">
                                        <CardBody><h3>Temperature</h3>
                                            {temperature}
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col lg="4">
                                    <Card className=" card-frame">
                                        <CardBody><h3>Blood Pressure</h3>
                                            {bloodPressure}
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col lg="4">
                                    <Card className=" card-frame">

                                        <CardBody>
                                            <CardTitle><h3>Doctor Notes</h3></CardTitle>
                                            {doctorNotes}</CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                        <hr className="my-4"/>
                        {/* Address */}
                        <h6 className="heading-small text-muted mb-4">
                            About prescriptions
                        </h6>
                        <div className="pl-lg-4">
                            <Row>
                                <Col lg="6">
                                    <Col className="order-lg-2" lg="3">
                                        {isFileField &&
                                        <div className="card-profile-image imgCons ">
                                            <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                <img
                                                    alt="..."
                                                    src=
                                                        {file}


                                                />
                                            </a>

                                        </div>}
                                        {isFileField &&
                                        <Button
                                            className=" btn-icon"
                                            color="danger"
                                            size="sm"
                                            type="button"
                                            onClick={() => {
                                                setOpenPopup3(true)
                                            }
                                            }
                                        >
                                            open Image
                                        </Button>

                                        }
                                        {
                                            isFileField &&
                                            <ImageBigger
                                            openPopup3={openPopup3}
                                            setOpenPopup3={setOpenPopup3}
                                            file={file}
                                            setFile={setFile}
                                            />
                                        }

                                        {!isFileField &&
                                        <div className="card-profile-image imgCons">
                                            <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                <img
                                                    alt="..."
                                                    src={
                                                        require("../../assets/img/theme/image_doctor.jpg")
                                                            .default
                                                    }
                                                />
                                            </a>

                                        </div>


                                        }
                                    </Col>
                                </Col>
                                <Col lg="6">
                                    <Card className=" card-frame cardsize">
                                        <CardBody>
                                            <CardTitle><h3>Prescription Text</h3></CardTitle>
                                            {prescriptionText}</CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </div>

                    </div>

                </DialogContent>
                <DialogActions>
                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={()=>{setOpenPopup1(false)}}
                    >
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default ConsultationView;
