import {useState, useEffect} from 'react';
import * as clinicService from '../../api/clinic.service';

export default function ViewClinicDetails () {
    const [clinic, setClinic] = useState();

    const getClinic = async () => {
        console.log("in getClinic");
        await clinicService.showOne()
            .then((res) => {
                setClinic(res.data.data);
                console.log('Here');
                console.log(res.data.data);
            })
    }
    useEffect(() => {
        getClinic();
    }, []);

    return (
        <>
            <h3>Clinics</h3>
            <h3>{clinic.clinicName}</h3>
        </>
    )
}