import ClinicCreate from "./ClinicCreate";
import ClinicView from "./ClinicView";

export default function Clinic () {
    return (
        <>
            <div>
                <ClinicView/>
                <ClinicCreate/>
            </div>
        </>
    )
}