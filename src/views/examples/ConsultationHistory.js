import {
    Badge,
    Card,
    CardHeader,
    CardFooter,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media,
    Pagination,
    PaginationItem,
    PaginationLink,
    Progress,
    Table,
    Container,
    Row,
    UncontrolledTooltip,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import { Button} from "reactstrap";
import {useState} from "react";
import {Dialog} from "@mui/material";
import AppointmentForm from "./AppointmentForm";
import {Link} from "react-router-dom";

const ConsultationHistory = () => {
    const [openPopup, setOpenPopup] = useState(false)
    /*const[consultedByDoctor,setConsultedByDoctor] = useState(false)*/

    const openInPopup = () => {
        setOpenPopup(true)
    }

    return (
        <>
            <Header />
            {/* Page content */}
            <Container className="mt--7 list" fluid>
                {/* Table */}
                <div className="col" >
                    <Card  style={{width:850,left:72}} className="shadow">
                        <CardHeader className="border-0">
                            <h3 className="mb-0">Your Patients List</h3>
                        </CardHeader>
                        <Table className="align-items-center table-flush" responsive >
                            <thead className="thead-light">
                            <tr style={{margin:25}}>
                                <th scope="col">Patient First Name</th>
                                <th scope="col">Patient Last Name</th>
                                <th scope="col">Appointlement</th>
                                <th scope="col">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Nessrine</td>
                                <td>Aloulou</td>
                                <td>22-02-2022</td>
                                <td>
                                    <Link to="/admin/Patient-profile">
                                        <Button
                                            className=" btn-icon"
                                            color="info"
                                            size="sm"
                                            type="button"
                                            to="/Patient-profile"
                                            /*onClick={() => {setConsultedByDoctor(true)}}
                                            consultedByDoctor={consultedByDoctor}*/
                                            /*onClick={() => { setOpenPopup(true)}}*/
                                        >
                                            <i className=" ni ni-circle-08 pt-1"></i>
                                        </Button>
                                    </Link>
                                    {/*<AppointmentForm
                                            openPopup={openPopup}
                                            setOpenPopup={setOpenPopup}
                                        />*/}
                                    <Button
                                        className=" btn-icon"
                                        color="success"
                                        size="sm"
                                        type="button"
                                    >
                                        <i className=" ni ni-settings-gear-65 pt-1"></i>
                                    </Button>

                                    <Button
                                        className=" btn-icon"
                                        color="danger"
                                        size="sm"
                                        type="button"
                                    >
                                        <i className=" ni ni-fat-remove pt-1"></i>
                                    </Button>
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                        <CardFooter className="py-4">
                            <nav aria-label="...">
                                <Pagination
                                    className="pagination justify-content-end mb-0"
                                    listClassName="justify-content-end mb-0"
                                >
                                    <PaginationItem className="disabled">
                                        <PaginationLink
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                            tabIndex="-1"
                                        >
                                            <i className="fas fa-angle-left" />
                                            <span className="sr-only">Previous</span>
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem className="active">
                                        <PaginationLink
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            1
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            2 <span className="sr-only">(current)</span>
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            3
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <i className="fas fa-angle-right" />
                                            <span className="sr-only">Next</span>
                                        </PaginationLink>
                                    </PaginationItem>
                                </Pagination>
                            </nav>
                        </CardFooter>
                    </Card>
                </div>
                {/* Dark table */}

            </Container>
        </>
    );
};

export default ConsultationHistory;
