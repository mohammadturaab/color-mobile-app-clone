import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import * as authService from "../../api/auth.service";
import * as clinicService from '../../api/clinic.service';
import {Button, Container, Form} from 'react-bootstrap';

export default function ClinicCreate () {
    const [clinicName, setClinicName] = useState("");

    const handleSubmit = async () => {
        let newClinic = { clinicName };
        let res = await clinicService.create(newClinic).then(() => {
            setClinicName('')
            console.log("clinc" + newClinic);
        })
        if (!res === 200) {
            alert ('Please enter Clinic Name');
        }
        window.location.href="/clinicview"
};
    return (
        <Container>
        <div>
            <h2>Create a new Site</h2>
            <Form>
                <Form.Group>
                <Form.Label>Clinic Name</Form.Label>
                <Form.Control
                    type="text"
                    name="clinicName"
                    onChange={((e) => setClinicName(e.target.value))}
                    placeholder="Clinic Name"
                />
                </Form.Group>
            </Form>
            
            <Link to= "/">
                <Button varient = "primary" onClick={handleSubmit}>
                    Create Clinic
                </Button>
            </Link>
        </div>
        </Container>
    )
}