import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Row,
    Col,
} from "reactstrap";
import {Link} from "react-router-dom";
import {axiosInstance} from '../axios';
import { useHistory } from 'react-router-dom';
import {useEffect, useState} from "react";
import axios from "axios";
const RegisterEmployee = () =>{
    const history = useHistory();
    const [departments, setDepartments] = useState([])
    const initialFormData = Object.freeze({
        email: '',
        password: '',
        password2:'',
        firstName:'',
        lastName:'',
        phone:'',
        cin:'',
        nationality:'',
        date_of_Birth:'',
        gender:'',
        speciality:'',
        role:'',
        dateOfJoining:'',
        department:'',
        passport:'',
    });
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/departments`).then(res =>
            setDepartments(res.data)
        )
        console.log(departments)
    },[])

    const [formData, updateFormData] = useState(initialFormData);

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            // Trimming any whitespace
            [e.target.name]: e.target.value.trim(),
        });
    };
    const handleSubmit = (e) => {
        /*e.preventDefault();*/
        console.log(formData);

        axiosInstance
            .post(`accounts/register/employee`, {
                email: formData.email,
                password:formData.password,
                password2:formData.password2,
                firstName:formData.firstName,
                lastName:formData.lastName,
                phone:formData.phone,
                cin:formData.cin,
                nationality:formData.nationality,
                date_of_Birth:formData.date_of_Birth,
                gender:formData.gender,
                speciality:formData.speciality,
                role:formData.role,
                dateOfJoining:formData.dateOfJoining,
                department:formData.department,
                passport:formData.passport,
            })
            .then((res) => {
                history.push('/auth/login');
                console.log(res);
                console.log(res.data);
            });
    };
    return (
        <>
            <Col lg="10" md="8">
                <Card className="bg-secondary shadow border-0">
                    <CardBody className="px-lg-5 py-lg-2">
                        <div className="text-center text-muted mb-4">
                            <h2>Employee Registration to Hospital</h2>
                        </div>
                        <Form role="form">
                            <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20}}>
                                <FormGroup>
                                    <label className=" form-control-label" htmlFor="example-text-input">
                                        FirstName
                                    </label>
                                    <InputGroup className="input-group-alternative mb-3">
                                        <Input id="firstName"
                                               type="text"
                                               name="firstName"
                                               autoComplete="firstName"
                                               onChange={handleChange} />
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <label className=" form-control-label" htmlFor="example-text-input">
                                        Last Name
                                    </label>
                                    <InputGroup className="input-group-alternative mb-3">
                                        <Input  id="lastName"
                                                type="text"
                                                name="lastName"
                                                autoComplete="LastName"
                                                onChange={handleChange}/>
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <label className=" form-control-label" htmlFor="example-text-input">
                                        Phone Number
                                    </label>
                                    <InputGroup className="input-group-alternative mb-3">
                                        <Input id="phone"
                                               type="text"
                                               name="phone"
                                               autoComplete="Phone"
                                               onChange={handleChange} />
                                    </InputGroup>
                                </FormGroup>
                            </div>

                            <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20}}>
                                <FormGroup>
                                    <label className=" form-control-label" htmlFor="example-text-input">
                                        Email
                                    </label>
                                    <InputGroup className="input-group-alternative mb-3">

                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="ni ni-email-83"/>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            type="email"
                                            id="email"
                                            name="email"
                                            autoComplete="email"
                                            onChange={handleChange}
                                        />
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <label className=" form-control-label" htmlFor="example-text-input">
                                        Password
                                    </label>
                                    <InputGroup className="input-group-alternative">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="ni ni-lock-circle-open"/>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            type="password"
                                            id="password"
                                            name="password"
                                            autoComplete="password"
                                            onChange={handleChange}
                                        />
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <label className=" form-control-label" htmlFor="example-text-input">
                                        Confirm Password
                                    </label>
                                    <InputGroup className="input-group-alternative">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="ni ni-lock-circle-open"/>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            type="password"
                                            id="password2"
                                            name="password2"
                                            autoComplete="confirm-password"
                                            onChange={handleChange}
                                        />
                                    </InputGroup>
                                </FormGroup>
                            </div>

                            <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20}}>
                                <FormGroup>
                                    <label className=" form-control-label" htmlFor="exampleFormControlSelect1">Example Your Gender</label>
                                    <Input className="input-group-alternative"
                                           id="gender"
                                           name="gender"
                                           autoComplete="gender"
                                           onChange={handleChange}
                                           type="select">
                                        <option>Enter your Gender</option>
                                        <option>male</option>
                                        <option>female</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <label className=" form-control-label" htmlFor="example-text-input">
                                        Date of Birth
                                    </label>
                                    <InputGroup className="input-group-alternative mb-3">
                                        <Input  type="Date"
                                                id="date_of_Birth"
                                                name="date_of_Birth"
                                                autoComplete="birth"
                                                onChange={handleChange}/>
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <label className=" form-control-label" htmlFor="example-text-input">
                                        Speciality
                                    </label>
                                    <InputGroup className="input-group-alternative mb-3">
                                        <Input  type="text"
                                                id="speciality"
                                                name="speciality"
                                                autoComplete="Speciality"
                                                onChange={handleChange}/>
                                    </InputGroup>
                                </FormGroup>
                            </div>

                            <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20}}>
                                <FormGroup>
                                    <label className=" form-control-label" htmlFor="example-text-input">
                                        Nationality
                                    </label>
                                    <InputGroup className="input-group-alternative mb-3">
                                        <Input
                                            type="text"
                                            id="nationality"
                                            name="nationality"
                                            autoComplete="Nationality"
                                            onChange={handleChange}/>
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <label className=" form-control-label" htmlFor="example-text-input">
                                        Identity Card
                                    </label>
                                    <InputGroup className="input-group-alternative mb-3">
                                        <Input  type="text"
                                                id="cin"
                                                name="cin"
                                                autoComplete="Identity Card"
                                                onChange={handleChange}/>
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <label className=" form-control-label" htmlFor="example-text-input">
                                        Passport
                                    </label>
                                    <InputGroup className="input-group-alternative mb-3">
                                        <Input type="text"
                                               id="passport"
                                               name="passport"
                                               autoComplete="Passport"
                                               onChange={handleChange}/>
                                    </InputGroup>
                                </FormGroup>
                            </div>
                            <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20}}>
                                <FormGroup>
                                    <label className=" form-control-label" htmlFor="exampleFormControlSelect1">Role</label>
                                    <Input className="input-group-alternative"
                                           id="role"
                                           name="role"
                                           autoComplete="role"
                                           onChange={handleChange}
                                           type="select">
                                        <option>Enter Your Role</option>
                                        <option>doctor</option>
                                        <option>radiologue</option>
                                        <option>analysist</option>
                                        <option>pharmacist</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <label className=" form-control-label" htmlFor="example-text-input">
                                        Date of Joining
                                    </label>
                                    <InputGroup className="input-group-alternative mb-3">
                                        <Input type="date"
                                               id="dateOfJoining"
                                               name="dateOfJoining"
                                               autoComplete="Date of Joining"
                                               onChange={handleChange}/>
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <label className=" form-control-label" htmlFor="example-text-input">
                                        Department
                                    </label>
                                    <InputGroup className="input-group-alternative mb-3">
                                        <Input className="input-group-alternative"
                                               id="department"
                                               name="department"
                                               autoComplete="department"
                                               onChange={handleChange}
                                               type="select">
                                            <option>Enter Your Department</option>
                                            {departments.map((department)=>
                                                <option>{department.departmentName}</option>
                                            )}
                                        </Input>
                                        </InputGroup>

                                </FormGroup>
                            </div>
                            <div className="text-center">
                                <Button className="mt-4" color="primary" type="button"
                                        onClick={() => {handleSubmit()}}>
                                    Create account
                                </Button>
                            </div>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </>
    )
        ;
};

export default RegisterEmployee;
