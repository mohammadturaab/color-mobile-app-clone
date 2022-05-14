import { Route, Routes } from "react-router-dom";
import { useReducer, useEffect } from "react";
import authService from "../api/auth.service";
import Nav from '../components/Nav'

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

            </>
        )
    }
}

export default Access;