// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Container,
    Row,
    Col,
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";
import FileUploader from "../../components/FileUploader";
import axios from "axios";
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import {useState} from "react";

const ConsultationFormForDoctor = (props) => {
    const {openPopup, setOpenPopup} = props;
    const {idCons, setIdCons} = props;
    const [doctorNotes,setDoctorNotes] = useState('')
    const [bloodPressure,setBloodPressure] = useState('')
    const [temperature,setTemperature] = useState('')
    const [prescriptionText,setPrescriptionText] = useState('')
    const [file,setFile] = useState("")

    const consultationUpdate = async () => {
        let formField = new FormData()
        formField.append('doctorNotes',doctorNotes)
        formField.append('temperature',temperature)
        formField.append('bloodPressure',bloodPressure)
        formField.append('file',file)
        formField.append('prescriptionText',prescriptionText)
        console.log('file',formField.data)
        await axios({
            method: 'PUT',
            url: `http://127.0.0.1:8000/api/consultation/update/${idCons}`,
            data: formField,
            headers: {"Content-type": "multipart/form-data"}
        }).then(response => {
            alert("vos données sonr bien enregistrer !")
            window.location.reload ()



        })
    }
    return (
        <>

            <Dialog
                open={openPopup}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Consultation</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please Enter The necessary information to add Your Consultation
                    </DialogContentText>
                    <Form>
                        <h6 className="heading-small text-muted mb-4">
                            General Notes
                        </h6>
                        <div className="pl-lg-4">
                            <Row>
                                <Col lg="4">
                                    <FormGroup>
                                        <label
                                            className="form-control-label"
                                            htmlFor="input-username"
                                        >
                                            Temperature
                                        </label>
                                        <Input
                                            className="form-control-alternative"
                                            name="temperature"
                                            value={temperature}
                                            onChange={(e) => setTemperature(e.target.value)}
                                            type="text"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col lg="4">
                                    <FormGroup>
                                        <label
                                            className="form-control-label"
                                            htmlFor="input-username"
                                        >
                                            Pressure
                                        </label>
                                        <Input
                                            className="form-control-alternative"
                                            name="bloodPressure"
                                            value={bloodPressure}
                                            onChange={(e) => setBloodPressure(e.target.value)}
                                            type="text"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col lg="4">
                                    <FormGroup>
                                        <label
                                            className="form-control-label"
                                            htmlFor="input-username"
                                        >
                                            doctor Notes
                                        </label>
                                        <Input
                                            className="form-control-alternative"
                                            name="doctorNotes"
                                            value={doctorNotes}
                                            onChange={(e) => setDoctorNotes(e.target.value)}
                                            type="text"
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </div>
                        <hr className="my-4"/>
                        {/* Address */}
                        <h6 className="heading-small text-muted mb-4">
                            About Prescription
                        </h6>
                        <div className="pl-lg-4">
                            <Row>
                                <Col lg="6">
                                    <FormGroup>
                                    <label htmlFor="exampleFormControlTextarea1">Image Prescription</label>
                                    <div className=" custom-file">
                                        <input
                                            className=" custom-file-input"
                                            name="file"
                                            onChange={(e) => setFile(e.target.files[0])}
                                            type="file"
                                        />
                                        <label className=" custom-file-label" htmlFor="customFileLang">

                                        </label>
                                    </div>
                                    </FormGroup>
                                </Col>
                                <Col lg="6">
                                    <FormGroup>
                                        <label htmlFor="exampleFormControlTextarea1">Prescription text</label>
                                        <Input id="exampleFormControlTextarea1"

                                               name="prescriptionText"
                                               value={prescriptionText}
                                               onChange={(e) => setPrescriptionText(e.target.value)}
                                               rows="4" type="textarea"/>
                                    </FormGroup>
                                </Col>
                            </Row>
                        </div>

                    </Form>
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={() => {
                            setOpenPopup(false)
                        }}
                    >
                        Cancel
                    </Button>
                    <Button onClick={consultationUpdate} color="primary">
                        Subscribe
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};


export default ConsultationFormForDoctor;
