import {NavLink} from 'react-router-dom';
import * as authService from "../../api/auth.service";

export default function Nav ({checkUserActive}){
    const handleLogout = async () => {
        const res = await authService.logout();
        checkUserActive();
        return res;
    }

    return (
        <div>
            <div>
                <h1>Color</h1>
            </div>
            <NavLink 
                to='/'
                onClick={handleLogout}>
                    Logout
                </NavLink>
        </div>
    )
}