import * as authService from '../../api/auth.service';

const Logout = () => {
    const handleSubmit = (e) => {
        authService.logout();
    }
    return (
        <div>
            <div>
                <button onClick={handleSubmit}>Logout</button>
            </div>
        </div>
    )
}

export default Logout;