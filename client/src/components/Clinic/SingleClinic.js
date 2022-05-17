// import {useState, useEffect} from 'react';
// import * as clinicService from '../../api/clinic.service';

// export default function ViewClinicDetails () {
//     const [clinic, setClinic] = useState();

//     const showClinic = async () => {
//         console.log("In showClinic");
//         await clinicService.get({id: clinic._id})
//             .then((res) => {
//                 setClinic(res.data.data);
//                 console.log("in res" + res.data.data);
//             })
//     }
//     useEffect(() => {
//         showClinic();
//     }, []);

//     return (
//         <>
//             <h3>Clinics</h3>
//             {/* <p>{clinic.clinicName}</p> */}
//         </>
//     )
// }