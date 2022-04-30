import React from "react";
import home from "../../assets/img/theme/home.png";
import {
    Button,
    Card,
    CardBody,
    Col,
    Form,
    FormGroup,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText, Row
} from "reactstrap";

const Home = (props) => {
    const title = "Welcome to Smart Hospital";
    return (
        <>
            <Col lg="5" md="7">
                <div className="text-muted text-center mt-2 mb-3">
                    <h1>Welcome to Smart Hospital</h1>
                </div>
                <img src={home} alt="Logo" style={{width: "450px",height: "400px"}} />
            </Col>
        </>
    );
};
export default Home;