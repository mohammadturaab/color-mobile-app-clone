import {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import * as clinicService from '../../api/clinic.service';

export default function ClinicView () {
    const [clinics, setClinics] = useState();

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
            <h3>Clinics</h3>
            {clinics?.map((clinic) => {
                    return (
                        <div>
                            <li>
                                <p>Name: {clinic.clinicName}</p>
                                
                            </li>
                        </div>
                    )
            })
        }
        </>
    )
}