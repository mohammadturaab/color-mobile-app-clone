import React, {useState, useEffect} from 'react';
import * as patientService from '../../api/patient.service';
import { Link } from 'react-router-dom';
import {Button, Container, Form} from 'react-bootstrap';


export default function UpdatePatient() {
    const [patientFirstName, setPatientFirstName] = useState("");
    const [patientLastName, setPatientLastName] = useState("");
    const [patientDOB, setPatientDOB] = useState("");

    const handleSubmit = async () => {
        let newPatientInfo = {
            patientFirstName, patientLastName, patientDOB};
        let res = await patientService.updatePatient(newPatientInfo)
            .then(() => {
                setPatientFirstName("");
                setPatientLastName("");
                setPatientDOB("");
            });
            if (!res === 201){
                alert("Adding patient failed. More information: ", res.status)
            }
            window.location.href="/clinicview"
    }
    const handlePatientDelete = async () => {
        let res = await patientService.deletePatient()
            .then(() => {
            }) 
            if ( !res === 201 ) {
                alert("Profile Not Deleted") 
            } 
    }

    return (
        <Container>
        <div>
            <h2>Edit Patient Profile</h2>
            <Form>
                <Form.Control
                    onChange={(e) => setPatientFirstName(e.target.value)}
                    value={patientFirstName}
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                />
                <Form.Control
                    onChange={(e) => setPatientLastName(e.target.value)}
                    value={patientLastName}
                    type="text"
                    name="firstName"
                    placeholder="Last Name"
                />
                <Form.Control
                    onChange={(e) => setPatientDOB(e.target.value)}
                    value={patientDOB}
                    type="text"
                    name="firstName"
                    placeholder="Date of Birth (MMDDYYYY)"
                />
            </Form>
            <Link to="/viewpatient">
                <Button onClick = {handleSubmit}>
                    Confirm
                </Button>
            </Link>
            <Link to="/clinic/">
                <Button variant="danger" onClick = {handlePatientDelete}>
                     Delete Patient
                </Button>
            </Link>
        </div>
        </Container>
    )
}