import {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import * as clinicService from '../../api/clinic.service';
import * as patientService from '../../api/patient.service';

export default function ClinicView () {
    const [clinics, setClinics] = useState();
    const [patient, setPatient] = useState();

    const getClinic = async () => {
        await clinicService.getClinic()
            .then((res) => {
                setClinics(res.data.data);
            })
    }

    const getPatient = async () => {
        await patientService.getPatient()
            .then((res) => {
                setPatient(res.data.data);
            })
    }

    useEffect(() => {
        getClinic();
        getPatient();
    }, []);


    return (
        <>
            <h3>Clinics</h3>
            {clinics?.map((clinic) => {
                    return (
                        <div>
                            <li>
                                <p>Name: {clinic.clinicName}</p>
                                {/* <Link to={clinic._id}>
                                    <button>
                                        View
                                    </button>
                                </Link> */}
                                {patient?.map((patient) =>{
                                    return (
                                        <div>
                                            <li>
                                                <p>Patient: {patient.patientFirstName}</p>
                                            </li>
                                        </div>
                                    )
                                })}
                                <Link to='/addpatient'>
                                    <button>
                                        Add patient
                                    </button>
                                </Link>
                            </li>
                        </div>
                    )
            })
        }
        </>
    )
}