import { useState } from "react";
// reactstrap components
import {
    Card,
    CardHeader,
    CardBody,
    Container,
    Row,
    Col,
    UncontrolledTooltip, Table, Button,
} from "reactstrap";
const PageAcceuilForAdmin = () => {
    return (
        <>
            <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
                <Container fluid>
                    <div className="header-body"></div>
                </Container>
            </div>
            <Container className="mt--8" fluid>
                <Row className="mt-4"  style={{justifyContent:"center"}}>
                    <Card className="shadow" style={{width:900}}>
                        <CardHeader className="border-0">
                            <h3 className="mb-0">All Doctors</h3>
                        </CardHeader>
                        <Table className="align-items-center table-flush" style={{width:850, margin: 20}} responsive>
                            <thead className="thead-light">
                            <tr>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Email Address</th>
                                <th scope="col">Department</th>
                                <th scope="col">Speciality</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Nesrine</td>
                                <td>Abid</td>
                                <td>nesryne.abid@enis.tn</td>
                                <td>Cardiology</td>
                                <td>Cardiologist</td>
                            </tr>
                            <tr>
                                <td>Imen</td>
                                <td>Chaari</td>
                                <td>imen.chaari@enis.tn</td>
                                <td>Dental</td>
                                <td>Dentist</td>
                            </tr>
                            </tbody>
                        </Table>
                    </Card>
                </Row>
            </Container>
        </>
    );
};

export default PageAcceuilForAdmin;
