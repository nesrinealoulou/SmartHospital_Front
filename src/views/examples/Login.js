import React, { useState } from 'react';
import {axiosInstance} from '../axios';
import { useHistory } from 'react-router-dom';
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
    Col, NavItem, NavLink,
} from "reactstrap";
import {Link} from "react-router-dom";
//localStorage.setItem('access_token', "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY2MTc3NTMxMCwiaWF0IjoxNjUzOTk5MzEwLCJqdGkiOiI5NjlhYzI1ZjdjZGM0MTAyOGVhZDljZDkyOWY3NWQ1MiIsInVzZXJfaWQiOjJ9._vRN5iSa-PC8pS1zvh2AIxrdUXjHAwsjPnDPKC4iPtQ")

let  is_auth = localStorage.getItem('is_auth')
let id =""
console.log(is_auth)
const Login = () => {
    const history = useHistory();
    const initialFormData = Object.freeze({
        email: '',
        password: '',
    });

    const [formData, updateFormData] = useState(initialFormData);
    let role = "" ;

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),
        });
    };

    const handleSubmit = (e) => {

        console.log(formData);


        axiosInstance
            .post(`accounts/login/employee`, {
                email: formData.email,
                password: formData.password,
            }).then((res) => {
            console.log('res',res)
            localStorage.setItem('access_token', res.data.access);
            localStorage.setItem('refresh_token', res.data.refresh);
            axiosInstance.defaults.headers['Authorization'] =
                'JWT ' + localStorage.getItem('access');
            console.log(res.data.is_Patient)
            if(res.data.is_Patient === true) {
                console.log('aces')
                role = 'patient'
            }
            else {
                if(res.data.is_Employee === true) {
                    role = 'employee'
                }
                else {
                    if(res.data.is_admin === true) {
                        role = 'admin'
                    }
                }
            }
            localStorage.setItem('role',role)
            localStorage.setItem('is_auth',true)
            localStorage.getItem('access_token')
            localStorage.setItem('id',res.data.id)
            history.push('/admin/index');
            //console.log(res);
            //console.log(res.data);

        });
    };

    return (
        <>
            <Col lg="5" md="7">
                <Card className="bg-secondary shadow border-0">
                    <CardBody className="px-lg-5 py-lg-5">
                        <div className="text-center text-muted mb-4">
                            <h2>Let's Sign you In</h2>
                        </div>
                        <Form role="form">
                            <FormGroup className="mb-3">
                                <InputGroup className="input-group-alternative">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="ni ni-email-83"/>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        placeholder="Email"
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        onChange={handleChange}
                                    />
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <InputGroup className="input-group-alternative">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="ni ni-lock-circle-open"/>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        placeholder="Password"
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="new-password"
                                        onChange={handleChange}
                                    />
                                </InputGroup>
                            </FormGroup>
                            <div className="custom-control custom-control-alternative custom-checkbox">
                                <input
                                    className="custom-control-input"
                                    id=" customCheckLogin"
                                    type="checkbox"
                                />
                                <label
                                    className="custom-control-label"
                                    htmlFor=" customCheckLogin"
                                >
                                    <span className="text-muted">Remember me</span>
                                </label>
                            </div>
                            <div className="text-center">
                                <Button className="my-4 btn" onClick={() => {handleSubmit()}} color="primary" type="button">
                                    Sign in
                                </Button>
                            </div>
                            <div className="text-center">
                                Don't have account?
                                <Link to="/auth/choix" className="sign">
                                    <a href="#pablo"  className="lien">Sign up</a>
                                </Link>
                            </div>
                        </Form>
                    </CardBody>
                </Card>
                <Row className="mt-3">
                    <Col xs="6">
                        <a
                            className="text-light"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                        >
                            <small>Forgot password?</small>
                        </a>
                    </Col>
                </Row>
            </Col>
        </>
    );
};

export default Login;
