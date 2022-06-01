
import {Button, Card, CardHeader, Col, Media, Progress, Row, Table} from "reactstrap";
import UserHeader from "../../components/Headers/UserHeader";
import {useEffect, useState} from "react";
import AppointmentForm from "./AppointmentForm";
import axios from "axios";
import {Link} from "@mui/material";

const DoctorListForAdmin = (props) => {




    const [employees, setEmployees] = useState([])
    const [idDoctor, setIdDoctor] = useState([])
    const [openPopup, setOpenPopup] = useState(false)

    const getEmployees = async () => {
        const  response = await axios.get(`http://127.0.0.1:8000/api/employees`)
        setEmployees(response.data.filter(employee => employee.is_verified === true))
        console.log('employees',employees)
    }
    useEffect(() => {
        getEmployees()

    },[])
    const deleteEmployee = async (id) => {
        console.log('if', id)
        await axios.delete(`http://127.0.0.1:8000/api/employee/delete/${id}`).then(
            (res) => {
                alert("Employee deleted successfully")
                window.location.reload()
            }
        )

    }
    return (
        <>
            <UserHeader />
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            <Row className="index cardContainer">
                {employees.map((emp) =>
                    <Col className="mb-5 mb-xl-0" xl="6">
                        <Card className="shadow cardStyle1">
                            <CardHeader className="border-0">
                                <Row className="align-items-center">
                                    <Col lg="6">
                                        {(emp.file != null) &&
                                        <Media className="align-items-center img">
                                            <a
                                                className="avatar rounded-circle mr-3"
                                                href="#pablo"
                                                onClick={(e) => e.preventDefault()}
                                            >
                                                <img
                                                    alt="..."
                                                    src={emp.file}
                                                />
                                            </a>
                                        </Media>
                                        }
                                        {(emp.file === null) &&
                                        <Media className="align-items-center img">
                                            <a
                                                className="avatar rounded-circle mr-3"
                                                href="#pablo"
                                                onClick={(e) => e.preventDefault()}
                                            >
                                                <img
                                                    alt="..."
                                                    className="rounded-circle"
                                                    src={
                                                        require("../../assets/img/theme/image_doctor.jpg")
                                                            .default
                                                    }
                                                />
                                            </a>
                                        </Media>
                                        }
                                        <h3>
                                            {emp.firstName} {emp.lastName}
                                            {/*<span className="font-weight-light">, 27</span>*/}
                                        </h3>
                                        <h3> {emp.speciality}</h3>
                                        <div className="h5 font-weight-300 paragraph">
                                            <i className="ni location_pin mr-2"  />
                                            {emp.email}
                                        </div>
                                    </Col>
                                    <Col lg="6">
                                        <Row>
                                            <div className="col text-right btnnn">
                                                <Button
                                                    color="primary"
                                                    onClick={() => {
                                                        deleteEmployee(emp.user_ptr_id)
                                                    }}
                                                >
                                                    Delete
                                                </Button>
                                            </div>
                                        </Row>

                                    </Col>
                                </Row>
                            </CardHeader>
                        </Card>
                    </Col>
                )}
            </Row>
        </>
    );
};


export default DoctorListForAdmin;
