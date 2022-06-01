import {
    Badge,
    Card,
    CardHeader,
    CardFooter,
    Pagination,
    PaginationItem,
    PaginationLink,
    Table,
    Container,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import {Button} from "reactstrap";
import {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import ConsultationFormForDoctor from "./ConsultationFormForDoctor";
import ConsultationView from "./ConsultationView";

const CurrentConsultations = () => {

    const [cin, setCin] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [consultations, setConsultations] = useState([])
    let token = localStorage.getItem('access_token')
    let consultationsList = []
    const decoded = jwt_decode(token);
    let id = decoded.user_id
    const history = useHistory();
    const [openPopup, setOpenPopup] = useState(false)
    const [openPopup1, setOpenPopup1] = useState(false)
    const [idCons, setIdCons] = useState("")
    const [isFileField, setIsFileField] = useState(false)
    const [file, setFile] = useState("")
    const [temperature, setTemperature] = useState(false)
    const [bloodPressure, setBloodPressure] = useState("")
    const [doctorNotes, setDoctorNotes] = useState("")
    const [appointment, setAppointment] = useState("")
    const [prescriptionText, setPrescriptionText] = useState("")


    const deleteConsultation = async (id) => {
        console.log('if', id)
        await axios.delete(`http://127.0.0.1:8000/api/consultation/delete/${id}`).then(
            (res) => {
                alert("consultation deleted successfully")
                window.location.reload()
            }
        )

    }
    const getConsultations = async () => {
        const response = await axios.get(`http://127.0.0.1:8000/api/consultations`)
        console.log(response.data,'cons')

        setConsultations(response.data.filter(cons => cons.doctor.user_ptr_id === id && new Date(cons.appointmentDate)< new Date()))
        console.log(consultations.data,'cons filter')
        console.log('cons', response.data.filter(cons => cons.doctor === id))
        console.log('')

    }

    useEffect(async () => {
        getConsultations()
        console.log('id',id)
    }, [])


    return (
        <>
            <Header/>
            {/* Page content */}
            <Container className="mt--7 list" fluid>
                {/* Table */}
                <div className="col">
                    <Card style={{width: 1000, left: 20}} className="shadow">
                        <CardHeader className="border-0">
                            <h3 className="mb-0">Your Consutation History</h3>
                        </CardHeader>
                        <Table className="align-items-center table-flush" responsive>
                            <thead className="thead-light">
                            <tr style={{margin: 25}}>
                                <th scope="col">Cin</th>
                                <th scope="col">Patient First Name</th>
                                <th scope="col">Patient Last Name</th>
                                <th scope="col">Appointment Date</th>
                                <th scope="col">Appointment time</th>
                                <th scope="col">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {consultations.map((cons) => {
                                return (
                                    <tr>
                                        <td>{cons.patient.information_ptr.cin}</td>
                                        <td>{cons.patient.information_ptr.firstName}</td>
                                        <td>{cons.patient.information_ptr.lastName}</td>
                                        <td>{cons.appointmentTime}</td>
                                        <td>{cons.appointmentDate}</td>
                                        <td>
                                            <Button
                                                className=" btn-icon"
                                                color="info"
                                                size="sm"
                                                type="button"
                                                to="/Patient-profile"
                                                onClick={() => {
                                                    setOpenPopup(true)
                                                    setIdCons(cons.consultationId)

                                                }}
                                            >

                                                <i className=" ni ni-settings-gear-65 pt-1"></i>
                                            </Button>
                                            <ConsultationFormForDoctor
                                                openPopup={openPopup}
                                                setOpenPopup={setOpenPopup}
                                                idCons={idCons}
                                                setidCons={setIdCons}
                                            />
                                            <Button
                                                className=" btn-icon"
                                                color="success"
                                                size="sm"
                                                type="button"
                                                onClick={() => {
                                                    setOpenPopup1(true)
                                                    setPrescriptionText(cons.prescriptionText)
                                                    setTemperature(cons.temperature)
                                                    setDoctorNotes(cons.doctorNotes)
                                                    setBloodPressure(cons.bloodPressure)
                                                    setFile(cons.file)
                                                    console.log(file,'aaa')
                                                    console.log(bloodPressure,'aaa')
                                                    setIdCons(cons.consultationId)
                                                    if(cons.file != null){
                                                        setIsFileField(true)
                                                    }


                                                }}
                                            >
                                                <i className=" ni ni-circle-08 pt-1"></i>
                                            </Button>
                                            <ConsultationView
                                                openPopup1={openPopup1}
                                                doctorNotes={doctorNotes}
                                                setIsFileField={setIsFileField}
                                                isFileField={isFileField}
                                                setDoctorNotes={setDoctorNotes}
                                                setTemperature={setTemperature}
                                                temperature={temperature}
                                                setBloodPressure={setBloodPressure}
                                                setFile={setFile}
                                                file={file}
                                                bloodPressure={bloodPressure}
                                                setPrescriptionText={setPrescriptionText}
                                                prescriptionText={prescriptionText}
                                                setOpenPopup1={setOpenPopup1}
                                                idCons={idCons}
                                                setidCons={setIdCons}
                                            />

                                            <Button
                                                className=" btn-icon"
                                                color="danger"
                                                size="sm"
                                                type="button"

                                                onClick={() => {
                                                    deleteConsultation(cons.consultationId)}}
                                            >
                                                <i className=" ni ni-fat-remove pt-1"></i>
                                            </Button>
                                        </td>
                                    </tr>)
                            })}
                            </tbody>
                        </Table>
                        <CardFooter className="py-4">
                            <nav aria-label="...">
                                <Pagination
                                    className="pagination justify-content-end mb-0"
                                    listClassName="justify-content-end mb-0"
                                >
                                    <PaginationItem className="disabled">
                                        <PaginationLink
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                            tabIndex="-1"
                                        >
                                            <i className="fas fa-angle-left"/>
                                            <span className="sr-only">Previous</span>
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem className="active">
                                        <PaginationLink
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            1
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            2 <span className="sr-only">(current)</span>
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            3
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <i className="fas fa-angle-right"/>
                                            <span className="sr-only">Next</span>
                                        </PaginationLink>
                                    </PaginationItem>
                                </Pagination>
                            </nav>
                        </CardFooter>
                    </Card>
                </div>
                {/* Dark table */}

            </Container>
        </>
    );
};

export default CurrentConsultations;
