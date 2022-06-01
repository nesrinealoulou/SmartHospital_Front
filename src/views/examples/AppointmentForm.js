// reactstrap components
import {
    Button, Form
} from "reactstrap";

import {
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
import {useState} from "react";


const AppointmentForm = (props) => {
    const {openPopup, setOpenPopup } = props;
    const {idDoctor, setIdDoctor } = props;
    const [appointmentDate, setDate] = useState(null)
    const [patients, setPatients] = useState([])
    const [appointmentTime, setTime] = useState(null)
    let token = localStorage.getItem('access_token')
    const decoded = jwt_decode(token);
    let id = decoded.user_id
    const addAppointment = async () => {
        let formField = new FormData()
        formField.append('appointmentDate',appointmentDate)
        formField.append('appointmentTime',appointmentTime)
        formField.append('patient',id)
        formField.append('doctor',idDoctor)
        console.log('patient',id,'doctor',idDoctor)
        await axios({
            method: 'POST',
            url: `http://127.0.0.1:8000/api/consultation/create`,
            data: formField
        }).then(response => {
            console.log(response.data);
            alert("your appointment is added successfully!" +
                "please be in time!")

        })

    }

    return (
        <>
            <Dialog
                open={openPopup}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Appointment</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please Enter The necessary information to add Your Consultation appointment
                    </DialogContentText>
                    <Form>
                        <FormGroup>
                            <label className=" form-control-label" htmlFor="example-date-input">
                                Date
                            </label>
                            <Input
                                name="appointmentDate"
                                value={appointmentDate}
                                onChange={(e) => setDate(e.target.value)}
                                type="date"
                            />
                        </FormGroup>
                        <FormGroup>
                            <label className=" form-control-label" htmlFor="example-time-input">
                                Time
                            </label>
                            <Input
                                name="appointmentTime"
                                value={appointmentTime}
                                onChange={(e) => setTime(e.target.value)}
                                type="time"
                            />
                        </FormGroup>
                    </Form>

                </DialogContent>
                <DialogActions>
                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={()=>{setOpenPopup(false)}}
                    >
                        Cancel
                    </Button>
                    <Button onClick={addAppointment} color="primary">
                        Subscribe
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default AppointmentForm;
