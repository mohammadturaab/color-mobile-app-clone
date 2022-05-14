import { Route, Routes } from "react-router-dom";
import { useReducer, useEffect } from "react";
import * as authService from "../api/auth.service";
import Welcome from "../components/Welcome";
import Nav from '../components/Nav';
import ClinicCreate from '../components/Clinic/ClinicCreate';
import ClinicView from "../components/Clinic/ClinicView";
import Staff from "../components/Staff/staffView";

const reducer = (prevState, action) => {
    switch(action.type){
        case 'setIsLoggedIn':
            return{...prevState, isLoggedIn: action.payload};
        default:
            return prevState
    }
}

const initialState = {
    isLoggedIn: false
}

const Access = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { isLoggedIn } = state;

    const staffActive = () => {
        if (authService.currentStaff()) {
            dispatch({type: 'setIsLoggedIn', payload: true})
        } else {
            dispatch({type: 'setIsLoggedIn', payload: false})
        }
    }
    useEffect(() => {
        staffActive();
    }, []);

    if (isLoggedIn) {
        return(
            <>
            <div>
                <Nav 
                checkUserActive={() => staffActive}/>
            </div>
                <Routes>
                    <Route
                        path='/clinicadd'
                        element={<ClinicCreate/>}
                        />
                    <Route
                        path='/clinicview'
                        element={<ClinicView/>}
                        />
                     <Route
                        path='/staff'
                        element={<Staff/>}
                        />
                </Routes>
            
            </>
        )
    }else{
        return(
            <div>
                <div>
                    <Welcome checkUserActive={() => dispatch({type: "setIsLoggedIn", payload: true})}/>
                </div>
            </div>
        )
    }
}

export default Access;