import { Button, Container, Row, Col } from "reactstrap";
import {Link} from "react-router-dom";
import {useState} from "react";
//user profile
const UserHeader = (props) => {
    const user = props.user;
    const edit = props.edit;
    const doc = props.doc;
    const patient = props.patient;
    const consultedByDoctor = props.consultedByDoctor;
    const[isPatient,setIsPatient] = useState(user === 'patient')
    const[isDoctor,setIsDoctor] = useState(user === 'employee')
    const[NotEdited,setNotEdited] = useState(edit === 'edit')
    const[isDoctoAccess,setIsDoctorAccess] = useState(doc === 'doctor access')
    const[isPatientAccess,setIsPatientAccess] = useState(patient === 'doctor access')
    /*const[isNotConsultedByDoctor,setIsNotConsultedByDoctor] = useState(consultedByDoctor === false)*/
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "600px",
          backgroundImage:
            "url(" +
            require("../../assets/img/theme/medecinProfile.webp").default +
            ")",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-8" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="7" md="10">
                {isPatient && <h1 className="display-3 text-white">Hello Patient</h1>}
                {isDoctor && <h1 className="display-2 text-white">Hello Doctor</h1>}
                {NotEdited && <p className="text-white mt-0 mb-5">
                This is your profile page.You can see and manage your information
              </p> }
                {isDoctoAccess
                && <h1 className="display-3 text-white">Hello Doctor</h1>}
                {isDoctoAccess
                && <p className="text-white mt-0 mb-5">You can Take a Look to your patient Profile</p>}
                {isPatientAccess
                && <h1 className="display-3 text-white">Hello Patient</h1>}
                {isPatientAccess
                && <p className="text-white mt-0 mb-5">You can Take a Look to Your doctor Profile</p>}
                <div className="text-center">
                    {NotEdited &&
                    <Link to="/admin/Employee-edit">
                        <Button className="mt-4" color="primary" type="button" to="/admin/Employee-edit">
                            Edit Profile
                        </Button>
                    </Link>}
                </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default UserHeader;
