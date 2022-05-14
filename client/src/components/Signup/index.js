import { useState } from 'react';
import * as authService from "../../api/auth.service";


const Signup = () => {

    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit =  async (e) => {
        e.PreventDefault();
        authService.signup(email,password,firstName,lastName);
        setEmail("");
        setPassword("");
        setfirstName("");
        setlastName("");

    };

    return (
        <div>
            <form>
            <h1>Create an Account</h1>
            <div>
                <label htmlFor="email">
            Email</label>
                    <input 
                        className = "input"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="text"
                        name="email"
                        placeholder="email"
                    />
                
                <label htmlFor="email">
            First Name</label>
                    <input 
                        className = "input"
                        onChange={(e) => setfirstName(e.target.value)}
                        value={firstName}
                        type="text"
                        name="firstName"
                        placeholder="first name"
                    />
                
                <label htmlFor="email">
            Last Name</label>
                    <input 
                        className = "input"
                        onChange={(e) => setlastName(e.target.value)}
                        value={lastName}
                        type="text"
                        name="lastName"
                        placeholder="last name"
                    />
                

                <label for="chk" aria-hidden="true" htmlFor="password">
            Password</label>
                    <input 
                        className = "input"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type="text"
                        name="password"
                        placeholder="password"
                    />
                </div>
                    <div>
                        <button onClick={handleSubmit}>
                            Sign Up
                        </button>
                    </div>
            </form>
        </div>
    );

};

export default Signup;