import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import * as authService from "../../api/auth.service";
import * as clinicService from '../../api/clinic.service';

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
        <div>
            <h2>Create a new Site</h2>
            <form>
                <label>Clinic Name</label>
                <input
                    className = "input"
                    type="text"
                    name="clinicName"
                    onChange={((e) => setClinicName(e.target.value))}
                    placeholder="Clinic Name"
                />
            </form>
            <Link to= "/">
                <button onClick={handleSubmit}>
                    Create Clinic
                </button>
            </Link>
        </div>
    )
}