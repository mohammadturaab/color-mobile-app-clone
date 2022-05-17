import { useState } from 'react';
import * as authService from "../../api/auth.service";
import {Button, Container, Form} from 'react-bootstrap';

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
        <Container>
        <div>
            <Form>
            <h1>Create an Account</h1>
            <div>
                <Form.Label htmlFor="email">
            Email</Form.Label>
                    <Form.Control 
                        className = "input"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="text"
                        name="email"
                        placeholder="email"
                    />
                
                <Form.Label htmlFor="email">
            First Name</Form.Label>
                    <Form.Control  
                        className = "input"
                        onChange={(e) => setfirstName(e.target.value)}
                        value={firstName}
                        type="text"
                        name="firstName"
                        placeholder="first name"
                    />
                
                <Form.Label htmlFor="email">
            Last Name</Form.Label>
                    <Form.Control 
                        className = "input"
                        onChange={(e) => setlastName(e.target.value)}
                        value={lastName}
                        type="text"
                        name="lastName"
                        placeholder="last name"
                    />
                

                <Form.Label for="chk" aria-hidden="true" htmlFor="password">
            Password</Form.Label>
                    <Form.Control  
                        className = "input"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type="text"
                        name="password"
                        placeholder="password"
                    />
                </div>
                    <div>
                        <Button varient ="primary"onClick={handleSubmit}>
                            Sign Up
                        </Button>
                    </div>
            </Form>
        </div>
        </Container>
    );

};

export default Signup;