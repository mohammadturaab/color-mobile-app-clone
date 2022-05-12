import { useState } from "react";
import * as authService from "../../api/auth.service";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, TextInput, Button } from 'react-native';


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
      await authService.login(email, password).then((res) =>{
            setEmail("");
            setPassword("");
        });
    };

return (
        <View>
        <Text>Login</Text>
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
                    title="Log in"
                />
            </View>
        </View>
);
};

export default Login;