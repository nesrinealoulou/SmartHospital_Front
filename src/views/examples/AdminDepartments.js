import {Button, Card, CardHeader, Col, Form, Media, Progress, Row, Table} from "reactstrap";
import UserHeader from "../../components/Headers/UserHeader";
import {useEffect, useState} from "react";
import AppointmentForm from "./AppointmentForm";
import axios from "axios";
import {
    Dialog, DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Divider,
    FormGroup, Input,
    ListItem,
    ListItemText
} from "@mui/material";
import List from "reactstrap/es/List";
const DoctorListForAdmin = () => {
    const [departmentName, setDepartmentName] = useState(null)
    const addDepartment = async () => {
        let formField = new FormData()
        formField.append('departmentName',departmentName)

        await axios({
            method: 'POST',
            url: `http://127.0.0.1:8000/api/department/create`,
            data: formField
        }).then(response => {
            console.log(response.data);
            alert("your department is added successfully!")
            window.location.reload()

        })

    }
    const deleteDeaprtment = async (id) => {
        console.log('if', id)
        await axios.delete(`http://127.0.0.1:8000/api/department/delete/${id}`).then(
            (res) => {
                alert("department deleted successfully")
                window.location.reload()
            }
        )

    }
    const [departments, setDepartments] = useState([])
    const getDepartments = async () => {
        const  response = await axios.get(`http://127.0.0.1:8000/api/departments`)
        setDepartments(response.data)
    }
    useEffect(() => {
        getDepartments()

    },[])
    const [open, setOpen] = useState(false)

    function handleClickOpen() {
        setOpen(true)
    }
    function handleClose() {
        setOpen(false)
    }

    return (
        <>
            <UserHeader />
            <Button
                className=" btn-dep"
                color="success"
                type="button"
                onClick={handleClickOpen}
            >
                Add Department
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle id="form-dialog-title">Add Department</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please Enter the name of the department
                    </DialogContentText>
                    <Form>
                        <FormGroup>
                            <label className=" form-control-label" htmlFor="example-date-input">
                                Department Name
                            </label>
                            <Input
                                name="departmentName"
                                value={departmentName}
                                onChange={(e) => setDepartmentName(e.target.value)}
                                type="text"
                            />
                        </FormGroup>
                    </Form>

                </DialogContent>
                <DialogActions>
                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={handleClose}
                    >
                        Cancel
                    </Button>
                    <Button onClick={addDepartment} color="primary">
                        add
                    </Button>
                </DialogActions>

            </Dialog>
            <Row className="index cardContainer">
                {departments.map((department) =>
                    <Col className="mb-5 mb-xl-0" xl="6">
                        <Card className="shadow cardStyle1">
                            <CardHeader className="border-0">
                                <Row className="align-items-center">
                                    <Col lg="6">
                                        <Media className=" imgdep align-items-center img">
                                            <a
                                                className="avatar  mr-3"
                                                href="#pablo"
                                                onClick={(e) => e.preventDefault()}
                                            >
                                                <img
                                                    alt="..."
                                                    className="imgdep"
                                                    src={
                                                        require("../../assets/img/theme/dep.png")
                                                            .default
                                                    }
                                                />
                                            </a>
                                        </Media>
                                        <h3>
                                            {department.departmentName}

                                        </h3>
                                    </Col>
                                    <Col lg="6">
                                        <Row>
                                            <div className="col text-right btnnn">
                                                <Button
                                                    color="primary"
                                                    onClick={()=>{deleteDeaprtment(department.id)}}

                                                >
                                                    Delete
                                                </Button>
                                            </div>

                                        </Row>
                                    </Col>
                                </Row>
                            </CardHeader>
                        </Card>
                    </Col>
                )}
            </Row>
        </>
    );
};


export default DoctorListForAdmin;
