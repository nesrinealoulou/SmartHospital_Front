import {useHistory} from 'react-router-dom';
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
import axios from "axios";
import React, {useState} from "react";
import AuthNavbar from "../../components/Navbars/AuthNavbar";


const VerfifyOpt = () => {
    const [email, setEmail] = useState("")
    const [otp, setOtp] = useState("")
    const history = useHistory();

    const verify = async () => {
        let formField = new FormData()
        formField.append('email',email)
        console.log("email",email)
        console.log("otp",formField)
        formField.append('otp',otp)
        await axios({
            method: 'POST',
            url: `http://127.0.0.1:8000/api/accounts/verify`,
            data: formField
        }).then(response => {
            console.log(response.data);
            console.log('res',response.data)
            if(response.data.message === 'account verified') {
                history.push("/auth/login");
            }
            else {
                alert('account not verified ')
            }

        })

    }

    return (
        <>
            <Col lg="5" md="7">
                <Card className="bg-secondary shadow border-0">
                    <CardBody className="px-lg-5 py-lg-5">
                        <div className="text-center text-muted mb-4">
                            <h2>Please add Your Verfication Number</h2>
                        </div>
                        <Form role="form">
                            <FormGroup>
                                <InputGroup className="input-group-alternative">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="ni ni-lock-circle-open"/>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        placeholder="Email"
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}

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
                                        placeholder="otp"
                                        type="text"
                                        name="otp"
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value)}
                                    />
                                </InputGroup>

                            </FormGroup>
                            <div className="text-center">
                                <Button
                                    onClick={() => {verify()}}
                                    className="my-4 btn" color="primary" type="button">
                                    Verify
                                </Button>
                            </div>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </>
    );
};

export default VerfifyOpt;
