import React, {useState, useEffect} from 'react';
import * as patientService from '../../api/patient.service';
import { Link } from 'react-router-dom';

export default function PatientView () {
    const [patient, setPatient] = useState();

    const getPatient = async () => {
        await patientService.getPatient()
            .then((res) => {
                setPatient(res.data.data);

            })
    }
    useEffect(() => {
        getPatient();
    }, [])

    return (
        <div>
            <h3>Patients</h3>
            {patient?.map((patient) =>{
                return (
                    <div>
                        <li>{patient.name}</li>
                    </div>
                )
            })}
        </div>
    )
}