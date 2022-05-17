import ClinicCreate from "./ClinicCreate";
import ClinicView from "./ClinicView";
import SingleClinic from "./SingleClinic";

export default function Clinic () {
    return (
        <>
            <div>
                <ClinicView/>
                <ClinicCreate/>
                <SingleClinic/>
            </div>
        </>
    )
}