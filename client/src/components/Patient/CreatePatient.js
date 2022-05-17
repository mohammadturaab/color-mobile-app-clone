import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom"
import * as patientService from '../../api/patient.service';
import * as clinicService from '../../api/clinic.service';
import {Button, Container, Form} from 'react-bootstrap';


export default function CreatePatient () {
    const [patientFirstName, setPatientFirstName] = useState("");
    const [patientLastName, setPatientLastName] = useState("");
    const [patientDOB, setPatientDOB] = useState("");
    const [clinics, setClinics] = useState([]);
    const [clinic, setClinic] = useState("");
    const [patientBarcode, setPatientBarcode] = useState("");

    const handleSubmit = async () => {
        let newPatient = {
            patientFirstName, patientLastName, patientDOB, patientBarcode, clinic};
        let res = await patientService.createPatient(newPatient)
            .then(() => {
                setPatientFirstName("");
                setPatientLastName("");
                setPatientDOB("");
                setPatientBarcode("");
                setClinic("")
            });
            if (!res === 201){
                alert("Adding patient failed. More information: ", res.status)
            }
            window.location.href="/"
    }
    const findClinic = async () => {
        await clinicService.getClinic()
        .then ((res)=>{
            setClinics(res.data.data);
        })
    }
    useEffect(() => {
        findClinic();
    }, []);


    return (
        <Container>
        <div>
            <h1>Select Site</h1>
            <Form.Select aria-label="Default select example" select onChange={(e) => setClinic(e.target.value)}>
                {clinics.map((clinic) => {
                    return(
                        <option
                        value={clinic._id}
                        key={clinic._id}
                        name="clinic">{clinic.clinicName}</option>
                    )
                })}
            </Form.Select>
            <h1>Add Patient</h1>
            <Form>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                    onChange={(e) => setPatientFirstName(e.target.value)
                    }
                    value={patientFirstName}
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    />
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                    onChange={(e) => setPatientLastName(e.target.value)
                    }
                    value={patientLastName}
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    />
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                    onChange={(e) => setPatientDOB(e.target.value)
                    }
                    value={patientDOB}
                    type="text"
                    name="dob"
                    placeholder="dob"
                    />
            </Form>
            <Link to="/viewclinic/">
                <Button variant="primary" onClick={handleSubmit}>
                    Add patient
                </Button>
            </Link>
        </div>
        </Container>
    )
}