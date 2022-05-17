import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom"
import * as patientService from '../../api/patient.service';
import * as clinicService from '../../api/clinic.service';


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
        <div>
            <h1>Select Site</h1>
            <select onChange={(e) => setClinic(e.target.value)}>
                {clinics.map((clinic) => {
                    return(
                        <option
                        value={clinic._id}
                        key={clinic._id}
                        name="clinic">{clinic.clinicName}</option>
                    )
                })}
            </select>
            <h1>Add Patient</h1>
            <form>
                <label>First Name</label>
                <input
                    onChange={(e) => setPatientFirstName(e.target.value)
                    }
                    value={patientFirstName}
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    />
                <label>Last Name</label>
                <input
                    onChange={(e) => setPatientLastName(e.target.value)
                    }
                    value={patientLastName}
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    />
                <label>Date of Birth</label>
                <input
                    onChange={(e) => setPatientDOB(e.target.value)
                    }
                    value={patientDOB}
                    type="text"
                    name="dob"
                    placeholder="dob"
                    />
            </form>
            <Link to="/viewclinic/">
                <button onClick={handleSubmit}>
                    Add patient
                </button>
            </Link>
        </div>
    )
}