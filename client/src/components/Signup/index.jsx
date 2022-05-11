import { useState } from 'react';
import * as authService from "../../api/auth.service";
import { View, Text, TextInput, Button } from 'react-native';

const Signup = () => {

    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successMsg, setSuccessMsg] = useState("");


    const handleSubmit = (e) => {
        e.PreventDefault();
        authService.register(email,password,firstName,lastName);
        setEmail("");
        setPassword("");
        setfirstName("");
        setlastName("");
        setSuccessMsg("Thank you for signing up with Color.");
        console.log("components-->register-->index handlesubmit: ", email, password)

    };

    return (
        <View>
            <Text>Create an Account</Text>
                <View>
                    <TextInput 
                        className = "input"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="text"
                        name="email"
                        placeholder="email"
                    />
                    <TextInput 
                        className = "input"
                        onChange={(e) => setfirstName(e.target.value)}
                        value={firstName}
                        type="text"
                        name="firstName"
                        placeholder="first name"
                    />
                    <TextInput  
                        className = "input"
                        onChange={(e) => setlastName(e.target.value)}
                        value={lastName}
                        type="text"
                        name="lastName"
                        placeholder="last name"
                    />
                    <TextInput 
                        className = "input"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type="password"
                        name="password"
                        placeholder="password"
                    />
                </View>
                    <View>
                        <Button 
                            onPress={handleSubmit}
                            title="Sign Up"
                        />
                    </View>
                <Text>{successMsg}</Text>
        </View>
    );

};

export default Signup;