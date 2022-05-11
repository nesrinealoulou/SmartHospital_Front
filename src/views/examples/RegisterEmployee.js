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

const RegisterEmployee = () =>{
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
                                    <InputGroup className="input-group-alternative mb-3">
                                        <Input placeholder="First Name" type="text"/>
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <InputGroup className="input-group-alternative mb-3">
                                        <Input placeholder="Last Name" type="text"/>
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <InputGroup className="input-group-alternative mb-3">
                                        <Input placeholder="(+216) Phone Number" type="text"/>
                                    </InputGroup>
                                </FormGroup>
                            </div>

                            <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20}}>
                                <FormGroup>
                                    <InputGroup className="input-group-alternative mb-3">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="ni ni-email-83"/>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            placeholder="Email"
                                            type="email"
                                            autoComplete="new-email"
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
                                            type="password"
                                            autoComplete="new-password"
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
                                            placeholder="Confirm Password"
                                            type="password"
                                            autoComplete="new-password"
                                        />
                                    </InputGroup>
                                </FormGroup>
                            </div>

                            <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20}}>
                                <FormGroup>
                                    <InputGroup className="input-group-alternative mb-3">
                                        <Input placeholder="Gender" type="text"/>
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <InputGroup className="input-group-alternative mb-3">
                                        <Input placeholder="Date_of_Birth" type="text"/>
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <InputGroup className="input-group-alternative mb-3">
                                        <Input placeholder="Speciality" type="text"/>
                                    </InputGroup>
                                </FormGroup>
                            </div>

                            <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20}}>
                                <FormGroup>
                                    <InputGroup className="input-group-alternative mb-3">
                                        <Input placeholder="Nationality" type="text"/>
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <InputGroup className="input-group-alternative mb-3">
                                        <Input placeholder="CIN" type="text"/>
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <InputGroup className="input-group-alternative mb-3">
                                        <Input placeholder="Passport" type="text"/>
                                    </InputGroup>
                                </FormGroup>
                            </div>
                            <div className="text-center">
                                <Button className="mt-4" color="primary" type="button">
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
