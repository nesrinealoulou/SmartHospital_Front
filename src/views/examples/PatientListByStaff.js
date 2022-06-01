import {
    Badge,
    Card,
    CardHeader,
    CardFooter,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media,
    Pagination,
    PaginationItem,
    PaginationLink,
    Progress,
    Table,
    Container,
    Row,
    UncontrolledTooltip,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import { Button} from "reactstrap";
import {useEffect, useState} from "react";
import {Dialog} from "@mui/material";
import AppointmentForm from "./AppointmentForm";
import {Link} from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import ConsultationFormForDoctor from "./ConsultationFormForDoctor";
import ConsultationView from "./ConsultationView";

const PatientListByStaff = () => {
    const [openPopup, setOpenPopup] = useState(false)
   const [firstName, setFirstName] = useState("")
    /*const [lastName, setLastName] = useState("")
    const [file, setFile] = useState("")
    const [age, setAge] = useState("")
    const [gender, setGender] = useState("")
    const [nationality, setNationality] = useState("")*/
    const [isFileField, setIsFielFied] = useState(false)
    const [patients, setPatients] = useState([])
    const [patientsByDoc, setPatientsByDoc] = useState([])


    let token = localStorage.getItem('access_token')
    const decoded = jwt_decode(token);
    let id = decoded.user_id
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/patients`)
            .then((res) => {
                console.log(res.data,'eeee')
                setPatientsByDoc([])
                res.data.map(async value => {
                    value.staff_medical.forEach(item=>{
                        if (item === id) {
                            patientsByDoc.push(value)
                            console.log(patientsByDoc,'1111')
                        }
                    })
                })
                setPatients(patientsByDoc)
            })

        patients.map(patient =>console.log("zzzz",patient.firstName))

    },[])

    return (
        <>
            <Header/>
            {/* Page content */}
            <Container className="mt--7 list" fluid>
                {/* Table */}
                <div className="col">
                    <Card style={{width: 1000, left: 20}} className="shadow">
                        <CardHeader className="border-0">
                            <h3 className="mb-0">Your Patients List</h3>
                        </CardHeader>
                        <Table className="align-items-center table-flush" responsive>
                            <thead className="thead-light">
                            <tr style={{margin:25}}>
                                <th scope="col">Picture</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Age</th>
                                <th scope="col">Nationality</th>
                                <th scope="col">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {patients.map((patient) => {
                                if(patient.file != null) {
                                    setIsFielFied(true)
                                }
                                return (
                                    <tr>
                                        <td scope="row">
                                            {!isFileField &&
                                            <Media className="align-items-center">
                                                <a
                                                    className="avatar rounded-circle mr-3"
                                                    href="#pablo"
                                                    onClick={(e) => e.preventDefault()}
                                                >
                                                    <img
                                                        alt="..."
                                                        src={
                                                            require("../../assets/img/theme/patientImg.png")
                                                                .default
                                                        }
                                                    />
                                                </a>
                                            </Media>
                                            }
                                            { isFileField &&
                                            <Media className="align-items-center">
                                                <a
                                                    className="avatar rounded-circle mr-3"
                                                    href="#pablo"
                                                    onClick={(e) => e.preventDefault()}
                                                >
                                                    <img
                                                        alt="..."
                                                        src={
                                                            require("../../assets/img/theme/patientImg.png")
                                                                .default
                                                        }
                                                    />
                                                </a>
                                            </Media>
                                            }
                                        </td>
                                        <td>{patient.firstName}</td>
                                        <td>{patient.lastName}</td>
                                        <td>{patient.gender}</td>
                                        <td>{patient.age}</td>
                                        <td>{patient.nationality}</td>
                                        <td>
                                            <Link to={`/admin/Patient-profile-for-doctor/${patient.user_ptr_id}`}>
                                                <Button
                                                    className=" btn-icon"
                                                    color="info"
                                                    size="sm"
                                                    type="button"
                                                    to="/Patient-profile"

                                                >
                                                    <i className=" ni ni-circle-08 pt-1"></i>
                                                </Button>
                                            </Link>
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

export default PatientListByStaff;
