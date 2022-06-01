import {
    Button,
    Card,
    CardBody,
    Col, Form
} from "reactstrap";
import {Link} from "react-router-dom";
import {useState} from "react";
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormGroup, Input} from "@mui/material";

const ImageBigger = (props) => {
    const {file, setFile } = props;
    const {openPopup3, setOpenPopup3 } = props;
    return (
        <>
            <Dialog
                open={openPopup3}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">The Prescription Image</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        take a look to your prescription
                    </DialogContentText>
                    <img src={file}  alt={"img"}/>

                </DialogContent>
                <DialogActions>
                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={() => {
                            setOpenPopup3(false)
                        }
                        }
                    >
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default ImageBigger;
