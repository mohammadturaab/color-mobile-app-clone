import {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import * as clinicService from '../../api/clinic.service';
import {Button, Container, Row, Col} from 'react-bootstrap';

export default function ClinicView () {
    const [clinics, setClinics] = useState([]);

    const getClinic = async () => {
        await clinicService.getClinic()
            .then((res) => {
                setClinics(res.data.data);
            })
    }

    useEffect(() => {
        getClinic();
    }, []);


    return (
        <>
        <Container>
            <h3>All Clinics</h3>
            {clinics?.map((clinic, id) => {
                    return (
                        <Row>
                        <div>
                            <Col md={12}>
                            <li style = {{listStyle: "none"}}>
                                <p key={id}>Name: {clinic.clinicName}</p>
                                <Link to='/addpatient'>
                                    <Button variant="primary">
                                        Add Patient
                                    </Button>{" "}
                                </Link>
                                <Link to='/viewpatient'>
                                    <Button variant="primary">
                                        View Patient
                                    </Button>{" "}
                                </Link>
                            </li>
                            </Col>
                        </div>
                        </Row>
                    )
            })
        }
        </Container>
        </>
    )
}