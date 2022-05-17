import React, {useState, useEffect} from 'react';
import * as patientService from '../../api/patient.service';
import { Link } from 'react-router-dom';


export default function UpdatePatient() {
    const [patientFirstName, setPatientFirstName] = useState("");
    const [patientLastName, setPatientLastName] = useState("");
    const [patientDOB, setPatientDOB] = useState("");
    const [patientBarcode, setPatientBarcode] = useState("");

    const handleSubmit = async () => {
        let newPatientInfo = {
            patientFirstName, patientLastName, patientDOB, patientBarcode};
        let res = await patientService.updatePatient(newPatientInfo)
            .then(() => {
                setPatientFirstName("");
                setPatientLastName("");
                setPatientDOB("");
                setPatientBarcode("");
            });
            if (!res === 201){
                alert("Adding patient failed. More information: ", res.status)
            }
            window.location.href="/"
    }
    const handlePatientDelete = async () => {
        let res = await patientService.deletePatient()
            .then(() => {
            }) 
            if ( !res === 201 ) {
                alert("Profile Not Deleted") 
            } 
    }

    const getPatientProfile = async () => {
        let res = await patientService.getPatient()
            .then((data) => {
                setPatientFirstName(data.data.data.firstName);
                setPatientLastName(data.data.data.lastName);
                setPatientDOB(data.data.data.description);
            })
            if ( !res === 201 ) {
                alert(`Post error. Please submit again. ${res.status}`) 
            } 
    }
        
    useEffect(() => {
        getPatientProfile();
    }, []);

    return (
        <div>
            <h2>Edit Patient Profile</h2>
            <form>
                <input
                    onChange={(e) => setPatientFirstName(e.target.value)}
                    value={patientFirstName}
                    type="text"
                    name="firstName"
                    placeholder={patientFirstName}
                />
                <input
                    onChange={(e) => setPatientLastName(e.target.value)}
                    value={patientLastName}
                    type="text"
                    name="firstName"
                    placeholder={patientLastName}
                />
                <input
                    onChange={(e) => setPatientDOB(e.target.value)}
                    value={patientDOB}
                    type="text"
                    name="firstName"
                    placeholder={patientDOB}
                />
            </form>
            <Link to="/clinic/">
                <button onClick = {handleSubmit}>
                    Confirm
                </button>
            </Link>
            <Link to="/clinic/">
                <button onClick = {handlePatientDelete}>
                     Delete Patient
                </button>
            </Link>
        </div>
    )
}