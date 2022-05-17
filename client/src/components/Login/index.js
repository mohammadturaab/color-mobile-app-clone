import { useState } from "react";
import * as authService from "../../api/auth.service";
import {Button, Container, Form} from 'react-bootstrap';

const Login = ( {checkUserActive} ) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] =useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
      await authService.login(email, password).then((res) =>{{
        checkUserActive();
      }
            setEmail("");
            setPassword("");
        });
        window.location.href= '/clinicview'
    };

return (
    <Container>
    <div>
        <Form>
        <h1>Login</h1>
            <div>
            <Form.Label htmlFor="email">
                Email</Form.Label>
                <Form.Control
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="text"
                    name="email"
                    placeholder="email"
                />
            <Form.Label  htmlFor="password">
                Password</Form.Label>
                <Form.Control
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    name="password"
                    placeholder="password"
                />
            </div>
            <div >
                <Button variant="primary" onClick={handleSubmit}>
                    Login
                </Button>
            </div>
        </Form>
    </div>
    </Container>
);
};

export default Login;