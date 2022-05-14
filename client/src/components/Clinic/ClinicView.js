import {useState, useEffect} from 'react';
import * as clinicService from '../../api/clinic.service';
import * as staffProfile from "../../api/staff.service";

export default function ClinicView () {
    const [clinics, setClinics] = useState();
    const [staff, setStaff] = useState("");

    const getClinic = async () => {
        await clinicService.getClinic()
            .then ((res) => {
                setClinics(res.data.data);
            })
    }

    const findStaff = async () => {
        await staffProfile.show().then((res) => {
            setStaff(res.data.data);
        })
    }
    useEffect(() => {
        getClinic();
        findStaff();
    })

    return (
        <>
            <h3>Clinics</h3>
            {clinics?.map((clinic, index) => {
                if(staff._id === clinic.staff){
                    return (
                        <div>
                            <li key={index}>
                                <p>Name: {clinic.name}</p>
                            </li>
                        </div>
                    )
                }
            })
        }
        </>
    )
}