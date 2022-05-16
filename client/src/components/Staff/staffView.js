import React, {useState, useEffect} from 'react';
import * as staffService from '../../api/staff.service';
import * as clinicService from '../../api/clinic.service';

const StaffIndex = () => {
    const [clinic, setClinic] = useState([]);
    const [staff, setStaff] = useState([]);

    const findStaff = async () => {
        await staffService.show().then((res) => {
            setStaff(res.data.data)
        })
    }
    useEffect(() => {
        findStaff();
    }, []);


    // const findClinic = async () => {
    //     await clinicService.getAll().then((res) => {
    //         setClinic(res.data.data)
    //     });
    // }
    // useEffect(() => {
    //     findClinic();
    // }, []);

    return (
        <div>
            <h3>Welcome {staff.firstName}</h3>
            <p>Clinics</p>
            {clinic.map((clinic, index) => {
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
        </div>
    )
}

export default StaffIndex