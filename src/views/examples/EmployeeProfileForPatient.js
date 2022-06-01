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
import  { useEffect, useState } from "react";
import {useHistory, useParams} from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";

const EmployeeProfileForPatient = () => {
    let firstName = ""
    let [employee,setEmployee] = useState("")
    let [info,setInfo] = useState("")
    const [patient,setPatient] = useState('doctor patient')
    const [user,setUser] = useState('employee')
    const [edit,setNotEdited] = useState('edit')
    let {id} = useParams()

    const [isFileField, setIsFileField] = useState(false)
    const [idFile, setIdFile] = useState("")
    const [file, setFile] = useState("")
    const [fileUrl, setFileUrl] = useState("")
    // Update s image student by id
    const updateImage = async () => {
        let formField = new FormData()
        formField.append('file',file)
        console.log('file',file)
        await axios({
            method: 'PUT',
            url: `http://127.0.0.1:8000/api/upload/${idFile}`,
            data: formField,
            headers: {"Content-type": "multipart/form-data"}
        }).then(response => {
            window.location.reload ()



        })
        console.log('dd',fileUrl)
    }
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/employee/${id}`).then(res =>
            setEmployee(res.data)
        )
        axios.get(`http://127.0.0.1:8000/api/information/${id}`).then(res =>setInfo(res.data))
        axios.get(`http://127.0.0.1:8000/api/employee/fileId/${id}`).then(res =>setIdFile(res.data.fileId))
        axios.get(`http://127.0.0.1:8000/api/file/${id}`).then(res =>{
            setFileUrl(res.data.file)
            if(res.data.file != null) {
                setIsFileField(true)

            }

        })

    },[])
    console.log(employee)
    console.log("file id",idFile)
    console.log('emp',employee.information_ptr)
    console.log('info',info.firstName)

    return (
        <>
            <UserHeader patient={patient}  />
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
                                                <span className="description">working years</span>
                                            </div>
                                            <div>
                                                <span className="heading">10</span>
                                                <span className="description">Photos</span>
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
                                        {info.firstName} {info.lastName}
                                    </h3>
                                    <div className="h5 font-weight-300">
                                        <i className="ni location_pin mr-2"  />
                                        {employee.speciality}
                                    </div>

                                    <div className="h5 font-weight-300">
                                        <i className="ni location_pin mr-2"  />
                                        {info.email}
                                    </div>

                                    <div className="h5 mt-4">
                                        <i className="ni business_briefcase-24 mr-2" />
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
                                            <Col lg="4">
                                                <h3>
                                                    Street
                                                </h3>
                                                <p>
                                                    {info.street} Street
                                                </p>
                                            </Col>
                                            <Col lg="4">
                                                <h3>
                                                    Postal Code
                                                </h3>
                                                <p>
                                                    {info.postalCode}
                                                </p>
                                            </Col>
                                            <Col lg="4">
                                                <h3>
                                                    Department
                                                </h3>
                                                <p>
                                                    Esthétique
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
                                                    Role
                                                </h3>
                                                <p>
                                                    {employee.role}
                                                </p>
                                            </Col>
                                            <Col>
                                                <h3>
                                                    Speciality
                                                </h3>
                                                <p>
                                                    {employee.speciality}
                                                </p>
                                            </Col>
                                        </Row>
                                        <Row style={{gridGap:98}}>
                                            <Col lg="4">
                                                <h3>
                                                    Nationality
                                                </h3>
                                                <p>
                                                    {info.nationality}
                                                </p>
                                            </Col>
                                            <Col lg="4">
                                                <h3>
                                                    Date of Joining
                                                </h3>
                                                <p>
                                                    {employee.dateOfJoining}
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

export default EmployeeProfileForPatient;
