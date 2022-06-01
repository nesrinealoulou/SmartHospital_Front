import {
    Button,
    Card,
    CardBody,
    Col
} from "reactstrap";
import {Link} from "react-router-dom";
import {useState} from "react";

const Choice = () => {
    return (
        <>
            <Col lg="5" md="7">
                <Card className="bg-secondary shadow border-0 row">
                    <CardBody className="px-lg-5 py-lg-5">
                        <div className="text-center account card text-muted mb-4">
                            <h2>Choose Account Type</h2>
                        </div>
                            <div className="d-flex custom-control custom-control-alternative custom-checkbox">
                                <div className="col-md-6 container-imgDocter ">
                                    <img
                                        alt="..."
                                        className="  rounded-circle img "
                                        src={
                                            require("../../assets/img/theme/doctor.png")
                                                .default
                                        }
                                    />
                                    <div className="custom-control custom-radio radio">
                                        <Link to="/auth/registerEmployee">
                                            <Button className="my-4 btnStaff" color="primary" type="button" to="/admin/user-profile">
                                               Staff
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-6 container-imgPatient ">
                                    <img
                                        alt="..."
                                        className="  rounded-circle imgPatient  "
                                        src={
                                            require("../../assets/img/theme/patient.png")
                                                .default
                                        }
                                    />
                                    <div className="custom-control custom-radio radio">
                                        <Link to="/auth/registerPatient">
                                            <Button className="my-4 btn" color="primary" type="button" to="/admin/user-profile">
                                                Patient
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/*<div className="text-center">
                                <Link to="/auth/registerPatient">
                                    <Button className="my-4 btn" color="primary" type="button" to="/admin/user-profile">
                                        Sign up
                                    </Button>
                                </Link>
                            </div>*/}
                    </CardBody>
                </Card>
            </Col>
        </>
    );
};

export default Choice;
