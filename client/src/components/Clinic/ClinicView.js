import {useState, useEffect} from 'react';
import {Route, useHistory, generatePath, useParams, history} from "react-router-dom";
import * as clinicService from '../../api/clinic.service';
import SingleClinic from "./SingleClinic";

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

    const { id } = useParams();

    const SingleClinic = (e) => {
        history.push(generatePath("/clinicview/:id", { id }));
      };

    return (
        <>
            <h3>Clinics</h3>
            {clinics?.map((clinic) => {
                    return (
                        <div>
                            <li>
                                <p>Name: {clinic.clinicName}</p>
                                    <Route path="/clinicview/:id">
                                        <SingleClinic />
                                    </Route>
                            </li>
                        </div>
                    )
            })
        }
        </>
    )
}