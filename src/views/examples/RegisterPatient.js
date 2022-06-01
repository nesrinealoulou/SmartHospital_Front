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
import {useHistory} from "react-router-dom";
import {Link} from "react-router-dom";
import {axiosInstance} from '../axios';
import {useState} from "react";
import { Alert } from "reactstrap";

const RegisterPatient = (props) => {
    const history = useHistory();
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
        occupation:'',
        chronic_disease:'',
        allergy:'',
        passport:'',
    });
    const [formData, updateFormData] = useState(initialFormData);

    let isSubmitted =false ;
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
            .post(`accounts/register/web/patient`, {
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
                occupation:formData.occupation,
                allergy:formData.allergy,
                passport:formData.passport,
                chronic_disease:formData.chronic_disease,
            })
            .then((res) => {
                isSubmitted = true;
                history.push('/auth/verifyOpt');
                console.log('res',res);
                console.log(res.data);

            });
    };
    return (
        <>
            <Col lg="10" md="8">
                <Card className="bg-secondary shadow border-0">
                    <CardBody className="px-lg-5 py-lg-2">
                        <div className="text-center text-muted mb-4">
                            <h2>Patient Registration to Hospital</h2>
                        </div>
                        <Form role="form">
                            <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20}}>
                                <FormGroup>
                                    <label className=" form-control-label" htmlFor="example-text-input">
                                        First Name
                                    </label>
                                    <InputGroup className="input-group-alternative mb-3">
                                        <Input  id="firstName"
                                                type="text"
                                                name="firstName"
                                                autoComplete="firstName"
                                                onChange={handleChange}/>
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <label className=" form-control-label" htmlFor="example-text-input">
                                        Last Name
                                    </label>
                                    <InputGroup className="input-group-alternative mb-3">
                                        <Input id="lastName"
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
                                        <Input type="email"
                                               id="email"
                                               name="email"
                                               autoComplete="email"
                                               onChange={handleChange}/>
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
                                        <Input  type="password"
                                                id="password"
                                                name="password"
                                                autoComplete="password"
                                                onChange={handleChange}/>
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
                                        <Input type="password"
                                               id="password2"
                                               name="password2"
                                               autoComplete="confirm-password"
                                               onChange={handleChange}/>
                                    </InputGroup>
                                </FormGroup>
                            </div>

                            <div style={{display: "grid", gridTemplateColumns: "repeat(2, 2fr)", gridGap: 20}}>
                                <FormGroup>
                                    <FormGroup>
                                        <label className=" form-control-label" htmlFor="exampleFormControlSelect1">Select your gender</label>
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
                                </FormGroup>
                                <FormGroup>
                                    <label className=" form-control-label" htmlFor="example-text-input">
                                        Date of Birth
                                    </label>
                                    <InputGroup className="input-group-alternative mb-3">
                                        <Input type="Date"
                                               id="date_of_Birth"
                                               name="date_of_Birth"
                                               autoComplete="birth"
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
                                        <Input type="text"
                                               id="nationality"
                                               name="nationality"
                                               autoComplete="nationality"
                                               onChange={handleChange}/>
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <label className=" form-control-label" htmlFor="example-text-input">
                                        Identity Card
                                    </label>
                                    <InputGroup className="input-group-alternative mb-3">
                                        <Input type="text"
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
                                        <Input  type="text"
                                                id="passport"
                                                name="passport"
                                                autoComplete="Passport"
                                                onChange={handleChange}/>
                                    </InputGroup>
                                </FormGroup>
                            </div>
                            <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20}}>
                                <FormGroup>
                                    <label className=" form-control-label" htmlFor="example-text-input">
                                        Occupation
                                    </label>
                                    <InputGroup className="input-group-alternative mb-3">
                                        <Input  type="text"
                                                id="occupation"
                                                name="occupation"
                                                autoComplete="occupation"
                                                onChange={handleChange}/>
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <label className=" form-control-label" htmlFor="example-text-input">
                                        Chronic Disease
                                    </label>
                                    <InputGroup className="input-group-alternative mb-3">
                                        <Input  type="text"
                                                id="chronic_disease"
                                                name="chronic_disease"
                                                autoComplete="chronic_disease"
                                                onChange={handleChange}/>
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <label className=" form-control-label" htmlFor="example-text-input">
                                        Allergy
                                    </label>
                                    <InputGroup className="input-group-alternative mb-3">
                                        <Input type="text"
                                               id="allergy"
                                               name="allergy"
                                               autoComplete="allergy"
                                               onChange={handleChange}/>
                                    </InputGroup>
                                </FormGroup>
                            </div>
                            <div className="text-center">
                                <Button
                                    className="mt-4" color="primary"
                                    type="button" onClick={() => {handleSubmit()}}>
                                    Create account
                                </Button>
                                {isSubmitted &&
                                <Alert color="success">
                                    <strong>Success!</strong> This is a success alert—check it out!
                                </Alert>}
                            </div>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </>
    )
        ;
};

export default RegisterPatient;
