import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import * as patientService from '../../api/patient.service';
import {Button, Container, Row, Col} from 'react-bootstrap';

export default function PatientView () {
    const [patients, setPatients] = useState();

    const getPatient = async () => {
        await patientService.getAll()
            .then((res) => {
                setPatients(res.data.data);
            })
    }
    useEffect(() => {
        getPatient();
    }, [])

    return (
        <Container>
        <div>
            <h3>Patients</h3>
            {patients?.map((patient) =>{
                return (
                    <Row>
                    <div>
                        <Col md={10}>
                        <li style = {{listStyle: "none"}}>
                            <p>{patient.patientFirstName} {patient.patientLastName}</p>
                            <p>DOB <strong>{patient.patientDOB}</strong> (MMDDYYYY)</p>
                            <Link to='/updatepatient'>
                                    <Button variant="primary">
                                        Edit Patient Information
                                    </Button>{" "}
                            </Link>
                        </li>
                        </Col>
                    </div>
                    </Row>
                )
            })}
        </div>
        </Container>
    )
}