// reactstrap components
import {
    Card,
    CardHeader,
    CardBody,
    Form,
    Container,
    Row,
    Col, Button,
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";
import FileUploader from "../../components/FileUploader";
import { useEffect, useState } from "react";
import axios from "axios";
import {useHistory, useParams} from "react-router-dom";
import jwt_decode from "jwt-decode";
const PatientProfile = (props) => {
    let [patient,setPatient] = useState("")
    const [user,setUser] = useState('patient')
    const [edit,setNotEdited] = useState('edit')
    let [info,setInfo] = useState("")
    let token = localStorage.getItem('access_token')
    const decoded = jwt_decode(token);
    let id = decoded.user_id
    const [isFileField, setIsFileField] = useState(false)
    const [file, setFile] = useState("")
    const [fileUrl, setFileUrl] = useState("")
    // Update s image student by id
    const updateImage = async () => {
        let formField = new FormData()
        formField.append('file',file)
        console.log('file',file)
        await axios({
            method: 'PUT',
            url: `http://127.0.0.1:8000/api/upload/${id}`,
            data: formField,
            headers: {"Content-type": "multipart/form-data"}
        }).then(response => {
            window.location.reload ()



        })
        console.log('dd',fileUrl)
    }

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/patient/${id}`).then(res =>setPatient(res.data))
        axios.get(`http://127.0.0.1:8000/api/information/${id}`).then(res =>setInfo(res.data))
        axios.get(`http://127.0.0.1:8000/api/file/${id}`).then(res =>{
            setFileUrl(res.data.file)
            if(res.data.file != null) {
                setIsFileField(true)

            }

        })


    },[])
    console.log(isFileField,"ee")
    console.log('patient',patient)
    return (
        <>
            <UserHeader user={user} edit={edit}/>
            {/* Page content */}
            <Container className="mt--7" fluid>
                <Row>
                    <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
                        <Card className="card-profile shadow">
                            <Row className="justify-content-center">
                                <Col className="order-lg-2" lg="3">
                                    {isFileField &&
                                    <div className="card-profile-image">
                                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                            <img
                                                alt="..."
                                                className="rounded-circle"
                                                src=
                                                    {fileUrl}


                                            />
                                        </a>
                                    </div>
                                    }
                                    {!isFileField &&
                                    <div className="card-profile-image">
                                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                            <img
                                                alt="..."
                                                className="rounded-circle"
                                                src={
                                                    require("../../assets/img/theme/image_doctor.jpg")
                                                        .default
                                                }
                                            />
                                        </a>
                                    </div>
                                    }
                                </Col>
                            </Row>
                            <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                            </CardHeader>
                            <CardBody className="pt-0 pt-md-4">
                                <Row>
                                    <div className="col">
                                        <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                                            <div>
                                                <span className="heading">22</span>
                                                <span className="description">visits</span>
                                            </div>
                                            <div>
                                                <span className="heading">10</span>
                                                <span className="description">doctors</span>
                                            </div>
                                            <div>
                                                <span className="heading">89</span>
                                                <span className="description">Comments</span>
                                            </div>
                                        </div>
                                    </div>
                                </Row>
                                <div className="text-center">
                                    <h3>
                                        {info.firstName}
                                        {/*<span className="font-weight-light">, 27</span>*/}
                                    </h3>
                                    <div className="h5 font-weight-300">
                                        <i className="ni location_pin mr-2"  />
                                        {info.email}
                                    </div>
                                    <hr className="my-4" />
                                    <h2 color="primary">Add Your Profile Picture</h2>
                                    <div className=" custom-file">
                                        <input
                                            className=" custom-file-input"
                                            id="customFileLang"
                                            lang="en"
                                            onChange={(e) => setFile(e.target.files[0])}
                                            type="file"
                                        />
                                        <label className=" custom-file-label" htmlFor="customFileLang">

                                        </label>
                                    </div>
                                    <Button className="mt-4"
                                            color="primary" type="button"
                                            onClick={() => {updateImage()}}>
                                        Upload
                                    </Button>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col className="order-xl-1" xl="8">
                        <Card className="bg-secondary shadow">
                            <CardHeader className="bg-white border-0">
                                <Row className="align-items-center">
                                    <Col xs="8">
                                        <h3 className="mb-0">My account</h3>
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
                                                <h3>
                                                    First Name
                                                </h3>
                                                <p>
                                                    {info.firstName}
                                                </p>
                                            </Col>
                                            <Col lg="6">
                                                <h3>
                                                    Last Name
                                                </h3>
                                                <p>
                                                    {info.lastName}
                                                </p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg="6">
                                                <h3>
                                                    Date of Birth
                                                </h3>
                                                <p>
                                                    {info.date_of_Birth}
                                                </p>
                                            </Col>
                                            <Col lg="6">
                                                <h3>
                                                    Gender
                                                </h3>
                                                <p>
                                                    {info.gender}
                                                </p>
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
                                            <Col>
                                                <h3>
                                                    Phone Number
                                                </h3>
                                                <p>
                                                    {info.phone}
                                                </p>
                                            </Col>
                                            <Col>
                                                <h3>
                                                    Country
                                                </h3>
                                                <p>
                                                    {info.country}
                                                </p>
                                            </Col>
                                            <Col>
                                                <h3>
                                                    City
                                                </h3>
                                                <p>
                                                    {info.city}
                                                </p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <h3>
                                                    Street
                                                </h3>
                                                <p>
                                                    {info.street}
                                                </p>
                                            </Col>
                                            <Col>
                                                <h3>
                                                    Postal Code
                                                </h3>
                                                <p>
                                                    {info.postalCode}
                                                </p>
                                            </Col>
                                        </Row>
                                    </div>
                                    <hr className="my-4" />
                                    {/* Address */}
                                    <h6 className="heading-small text-muted mb-4">
                                        General Information
                                    </h6>
                                    <div className="pl-lg-4">
                                        <Row>
                                            <Col>
                                                <h3>
                                                    Chronic Diseases
                                                </h3>
                                                <p>
                                                    {patient.chronic_disease}
                                                </p>
                                            </Col>
                                            <Col>
                                                <h3>
                                                    Allergy
                                                </h3>
                                                <p>
                                                    {patient.allergy}
                                                </p>
                                            </Col>
                                        </Row>
                                        <Row style={{gridGap:98}}>
                                            <Col lg="4">
                                                <h3>
                                                    Occupation
                                                </h3>
                                                <p>
                                                    {patient.occupation}
                                                </p>
                                            </Col>
                                            <Col lg="4">
                                                <h3>
                                                    Nationality
                                                </h3>
                                                <p>
                                                    {info.nationality}
                                                </p>
                                            </Col>
                                        </Row>
                                    </div>
                                    <hr className="my-4" />
                                    {/* Address */}
                                    <h6 className="heading-small text-muted mb-4">
                                        General Information
                                    </h6>
                                    <div className="pl-lg-4">
                                        <Row>
                                            <Col>
                                                <h3>
                                                    Passport
                                                </h3>
                                                <p>
                                                    {info.passport}
                                                </p>
                                            </Col>
                                            <Col>
                                                <h3>
                                                    Identity Card
                                                </h3>
                                                <p>
                                                    {info.cin}
                                                </p>
                                            </Col>
                                        </Row>
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

export default PatientProfile;
