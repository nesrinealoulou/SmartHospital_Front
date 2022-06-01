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
import axios from "axios";
import {useEffect, useState} from "react";
import {axiosInstance} from "../axios";
import jwt_decode from "jwt-decode";
const EmployeeEditProfile = () => {
    const getEmployee = async () => {
        const response = await axios.get(`http://127.0.0.1:8000/api/employee/${id}`)
        const response2 = await axios.get(`http://127.0.0.1:8000/api/information/${id}`)
        setFirstName(response2.data.firstName)
        setLastName(response2.data.lastName)
        setPhone(response2.data.phone)
        setNationality(response2.data.nationality)
        setDateOfBirth(response2.data.date_of_Birth)
        setGender(response2.data.gender)
        setCountry(response2.data.country)
        setCity(response2.data.city)
        setStreet(response2.data.street)
        setPostalCode(response2.data.postalCode)
        setSpeciality(response.data.speciality)
        setDepartment(response.data.department.departmentName)
        setDateOfJoining(response2.data.dateOfJoining)
    }
    let token = localStorage.getItem('access_token')
    const decoded = jwt_decode(token);
    let id = decoded.user_id
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phone, setPhone] = useState("")
    const [nationality, setNationality] = useState("")
    const [date_of_Birth, setDateOfBirth] = useState("")
    const [gender, setGender] = useState("")
    const [country, setCountry] = useState("")
    const [city, setCity] = useState("")
    const [street, setStreet] = useState("")
    const [postalCode, setPostalCode] = useState("")
    const [departments, setDepartments] = useState([])
    const [role, setRole] = useState("")
    const [speciality, setSpeciality] = useState("")
    const [department, setDepartment] = useState("")
    const [dateOfJoining, setDateOfJoining] = useState("")
    const updateEmployee = async () => {
        let formField = new FormData()
        formField.append('firstName',firstName)
        formField.append('lastName',lastName)
        formField.append('phone',phone)
        formField.append('nationality',nationality)
        formField.append('date_of_Birth',date_of_Birth)
        formField.append('gender',gender)
        formField.append('country',country)
        formField.append('city',city)
        formField.append('street',street)
        formField.append('postalCode',postalCode)
        formField.append('role',role)
        formField.append('speciality',speciality)
        formField.append('department',department)
        formField.append('dateOfJoining',dateOfJoining)
        console.log('aa',formField.data)
        await axios({
            method: 'PUT',
            url: `http://127.0.0.1:8000/api/employee/update/${id}`,
            data: formField,
            headers: {"Content-type": "multipart/form-data"}
        }).then(response => {
            alert("your profile is updated successfully")



        })
    }



    useEffect(() => {
        getEmployee()
        axios.get(`http://127.0.0.1:8000/api/departments`).then(res =>
            setDepartments(res.data)
        )
    },[])

    return (
        <>
            <UserHeader />
            {/* Page content */}
            <Container className="index" >
                <Row>
                    <Col>
                        <Card className="bg-secondary shadow">
                            <CardHeader className="bg-white border-0">
                                <Row className="align-items-center">
                                    <Col xs="8">
                                        <h3 className="mb-0">Edit Your Account</h3>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <Form>
                                    <h6 className="heading-small text-muted mb-4">
                                        User information
                                    </h6>
                                    <div className="pl-lg-4">
                                        <Row>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-username"
                                                    >
                                                        First Name
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        name="firstName"
                                                        value={firstName}
                                                        onChange={(e) => setFirstName(e.target.value)}
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-email"
                                                    >
                                                        Last Name
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        name="lastName"
                                                        value={lastName}
                                                        onChange={(e) => setLastName(e.target.value)}
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-first-name"
                                                    >
                                                        Date Of Birth
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        name="date_of_Birth"
                                                        value={date_of_Birth}
                                                        onChange={(e) => setDateOfBirth(e.target.value)}
                                                        type="Date"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-last-name"
                                                    >
                                                        Gender
                                                    </label>
                                                    <Input className="form-control-alternative"
                                                           name="gender"
                                                           value={gender}
                                                           onChange={(e) => setGender(e.target.value)}
                                                           type="select">
                                                            <option>Enter your Gender</option>
                                                            <option>male</option>
                                                            <option>female</option>
                                                    </Input>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </div>
                                    <hr className="my-4" />
                                    {/* Address */}
                                    <h6 className="heading-small text-muted mb-4">
                                        Contact information
                                    </h6>
                                    <div className="pl-lg-4">
                                        <Row>
                                            <Col lg="4">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-city"
                                                    >
                                                        Phone Number
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        name="phone"
                                                        value={phone}
                                                        onChange={(e) => setPhone(e.target.value)}
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="4">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-city"
                                                    >
                                                        Country
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        name="country"
                                                        value={country}
                                                        onChange={(e) => setCountry(e.target.value)}
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="4">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-city"
                                                    >
                                                        City
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        name="city"
                                                        value={city}
                                                        onChange={(e) => setCity(e.target.value)}
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg="4">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-city"
                                                    >
                                                        Street
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        name="street"
                                                        value={street}
                                                        onChange={(e) => setStreet(e.target.value)}
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="4">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-country"
                                                    >
                                                        Postal Code
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        name="postalCode"
                                                        value={postalCode}
                                                        onChange={(e) => setPostalCode(e.target.value)}
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="4">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-country"
                                                    >
                                                        Department
                                                    </label>
                                                    <Input
                                                           className="form-control-alternative"
                                                           name="DepartmentName"
                                                           value={department}
                                                           onChange={(e) => setDepartment(e.target.value)}
                                                           type="select">
                                                        <option>Enter Your Department</option>
                                                        {departments.map((department)=>
                                                            <option>{department.departmentName}</option>
                                                        )}
                                                    </Input>
                                                    {/*<Input
                                                        className="form-control-alternative"
                                                        name="DepartmentName"
                                                        value={department}
                                                        onChange={(e) => setDepartment(e.target.value)}
                                                        type="text"
                                                    />*/}
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </div>
                                    <hr className="my-4" />
                                    {/* Description */}
                                    <h6 className="heading-small text-muted mb-4">About me</h6>
                                    <Row>
                                        <Col lg="6">
                                            <FormGroup>
                                                <label
                                                    className="form-control-label"
                                                    htmlFor="input-last-name"
                                                >
                                                    Role
                                                </label>
                                                <Input className="form-control-alternative"
                                                       name="role"
                                                       value={role}
                                                       onChange={(e) => setRole(e.target.value)}
                                                       id="exampleFormControlSelect1" type="select">
                                                    <option>Enter Your Role</option>
                                                    <option>doctor</option>
                                                    <option>analysist</option>
                                                    <option>radiologist</option>
                                                    <option>pharmacist</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                        <Col lg="6">
                                            <FormGroup>
                                                <label
                                                    className="form-control-label"
                                                    htmlFor="input-email"
                                                >
                                                    Speciality
                                                </label>
                                                <Input
                                                    className="form-control-alternative"
                                                    name="speciality"
                                                    value={speciality}
                                                    onChange={(e) => setSpeciality(e.target.value)}
                                                    type="text"
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg="6">
                                            <FormGroup>
                                                <label
                                                    className="form-control-label"
                                                    htmlFor="input-first-name"
                                                >
                                                    Nationality
                                                </label>
                                                <Input
                                                    className="form-control-alternative"
                                                    name="nationality"
                                                    value={nationality}
                                                    onChange={(e) => setNationality(e.target.value)}
                                                    type="text"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col lg="6">
                                            <FormGroup>
                                                <label
                                                    className="form-control-label"
                                                    htmlFor="input-first-name"
                                                >
                                                    Date of Joining
                                                </label>
                                                <Input
                                                    className="form-control-alternative"
                                                    name="dateOfJoining"
                                                    value={dateOfJoining}
                                                    onChange={(e) => setDateOfJoining(e.target.value)}
                                                    type="Date"
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <div className="text-center btn25">
                                        <Button className="mt-4" color="primary" type="button"
                                                onClick={() => {updateEmployee()}}>
                                            update account
                                        </Button>
                                    </div>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default EmployeeEditProfile;
